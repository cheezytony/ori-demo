import { defineStore } from 'pinia';
import { useApiRequest } from '~~/hooks/api';
import { CompanyProvider } from '~~/types/models';
import { industries } from '@/mocks/providers';

export const useProviders = defineStore('providers', () => {
  return { industries };
});

export const useCompanyProviders = defineStore('company-providers', () => {
  const {
    data: response,
    isLoading,
    load,
  } = useApiRequest<CompanyProvider[]>({
    url: '/companies/providers',
    authorize: true,
    autoLoad: true,
  });

  const providers = computed(() => response.value?.data);

  return  { providers, isLoading, load };
})
