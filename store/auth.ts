import { defineStore } from 'pinia';
import { getItem, removeItem, setItem } from 'storagedotjs';
import { User } from '../types/models';

export type AuthState = {
  accessToken?: string;
  user?: User;
};

// export const getToken = () => {
//   return getItem<AuthState>(API_TOKEN_STORAGE_KEY)?.accessToken;
// };

export const useAuth = defineStore('auth', () => {
  const { public: { apiTokenStorageKey } } = useRuntimeConfig();
  const isLoggedIn = ref<boolean>(false);
  const accessToken = ref<string>();

  const user = ref<User>();
  const company = computed(() => user.value?.company);

  const name = computed(() => {
    return `${user.value?.first_name} ${user.value?.last_name}`;
  });
  const initials = computed(() => {
    return `${user.value?.first_name?.[0]}${user.value?.last_name?.[0]}`;
  });

  const state: AuthState = reactive({ isLoggedIn, accessToken, user });

  const login = (payload: AuthState) => {
    isLoggedIn.value = !!(payload.accessToken && payload.user);
    accessToken.value = payload.accessToken;
    user.value = payload.user;
    save();
  };
  const logout = () => {
    isLoggedIn.value = false;
    accessToken.value = undefined;
    user.value = undefined;
    clear();
  };
  const save = () => setItem(apiTokenStorageKey, state);
  const clear = () => removeItem(apiTokenStorageKey);
  const restore = () => {
    const data = getItem<AuthState>(apiTokenStorageKey);
    
    if (data && data.accessToken && data.user) login(data);
  };

  restore();

  return {
    isLoggedIn,
    accessToken,
    user,
    company,
    name,
    initials,
    login,
    logout,
  };
});
