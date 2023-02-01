import { Ref } from 'vue';
import {
  Form,
  getRawFormData,
  getFormData,
  setFormErrors,
  validateForm,
} from 'vue3-form';
import toastr from 'toastr';
import axios from 'axios';
import { HTTPError, HTTPErrorData, HTTPResponseData } from '~~/types/http';
import { useAuth } from '~~/store/auth';

export type APIRequestConfig<T> = {
  url: string | Ref<string>;
  method?: string;
  headers?: object;

  authorize?: boolean;
  autoLoad?: boolean;

  onSuccess?: (data: T) => void;
  onError?: (error: HTTPErrorData) => void;
  onFinish?: () => void;
};

export type APIRequestPayload = {
  data?: object;
  params?: object;
};

export const useApiRequest = <T = object>({
  authorize = false,
  autoLoad = false,
  url,
  headers,
  onSuccess,
  onError,
  onFinish,
  ...config
}: APIRequestConfig<HTTPResponseData<T>>) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();
  const { accessToken } = useAuth();

  const isLoading = ref(false);
  const data = ref<HTTPResponseData<T>>();
  const error = ref<Error>();
  const load = (payload?: APIRequestPayload) => {
    new Promise((resolve, reject) => {
      if (authorize) {
        headers = {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        };
      }

      axios<HTTPResponseData<T>>({
        ...config,
        ...payload,
        headers,
        url: typeof url === 'object' ? url.value : url,
        baseURL: apiBaseUrl,
      })
        .then((response) => {
          data.value = response?.data;
          resolve(response?.data);
          onSuccess?.(response.data);
        })
        .catch((error: HTTPError) => {
          if (axios.isCancel(error)) return;
          const err: HTTPErrorData = {
            ...error?.response?.data!,
            status: error.response?.status,
            statusText: error.response?.statusText,
          };
          reject(err);
          onError?.(err);
        })
        .finally(onFinish);
    });
  };

  onMounted(() => autoLoad && load());

  return { data, error, isLoading, load };
};

export const useFormRequest = <T>(
  form: Ref<Form>,
  {
    useFormData = false,
    onSuccess,
    onFinish,
    onError,
    ...config
  }: APIRequestConfig<HTTPResponseData<T>> & { useFormData?: boolean }
) => {
  const { load, ...data } = useApiRequest<T>({
    ...config,
    onSuccess: (data) => {
      form.value.success = data?.message || null;
      toastr.success(data?.message || 'Operation Successful');
      onSuccess?.(data);
    },
    onError: (error) => {
      form.value.error = error.message;
      error.errors && setFormErrors(form, error.errors);

      onError?.(error);
    },
    onFinish: () => {
      form.value.loading = false;
      onFinish?.();
    },
  });
  const submit = (data?: FormData | any) => {
    if (!validateForm(form)) return;

    form.value.loading = true;
    form.value.error = null;
    form.value.success = null;

    load({
      data: (useFormData ? getFormData(form) : getRawFormData(form)),
    });
  };

  return { ...data, submit };
};
