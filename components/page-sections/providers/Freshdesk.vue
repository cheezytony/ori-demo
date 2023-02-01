<script lang="ts" setup>
import { useForm } from 'vue3-form';
import ButtonSubmit from '~~/components/common/button/ButtonSubmit.vue';
import Form from '~~/components/common/form/Form.vue';
import FormGroup from '~~/components/common/form/FormGroup.vue';
import MessageDefault from '~~/components/common/message/MessageDefault.vue';
import { CompanyProvider } from '~~/types/models';

const props = defineProps<{
  provider?: CompanyProvider
}>();

const form = useForm({
  domain: {},
  api_key: {}
});

const mapFormData = () => {
  form.value.fields.domain.value = props.provider?.domain || '';
  form.value.fields.api_key.value = props.provider?.api_key || '';
};
onMounted(mapFormData);
</script>

<template>
  <Form>
    <MessageDefault v-if="form.success" color-scheme="green" class="mb-4">
      {{ form.success }}
    </MessageDefault>
    <MessageDefault v-if="form.error" color-scheme="red" class="mb-4">
      {{ form.error }}
    </MessageDefault>
    <div class="bg-gray-50 border border-gray-200 mb-8 rounded-md p-4">
      <FormGroup
        v-model="form.fields.domain.value"
        :form="form"
        id="domain"
        name="domain"
        label="Freshdesk Domain"
        placeholder="e.g. https://enif.freshdesk.com"
        class="max-w-[500px]"
      />

      <p class="mb-0 text-gray-500">
        Voluptatem sapiente blanditiis natus excepturi fugit placeat mollitia
        ipsam sunt fugiat nostrum ea cumque vero, laboriosam, harum assumenda
        culpa, voluptatibus possimus quasi.
      </p>
    </div>

    <div class="bg-gray-50 border border-gray-200 mb-8 rounded-md p-4">
      <FormGroup
        v-model="form.fields.api_key.value"
        :form="form"
        id="api_key"
        name="api_key"
        label="Freshdesk API key"
        placeholder="e.g. Tr2vgfrtyvtcif54alh"
        class="max-w-[500px]"
      />

      <p class="mb-0 text-gray-500">
        Iste dolorum iusto asperiores? Ratione ab, accusantium distinctio
        veritatis ullam delectus quos quia quae cupiditate voluptas, autem,
        doloribus odio magnam vero asperiores.
      </p>
    </div>

    <ButtonSubmit :form="form">Complete Set up</ButtonSubmit>
  </Form>
</template>
