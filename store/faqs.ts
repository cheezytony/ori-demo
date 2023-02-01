import { defineStore } from 'pinia';
import { useApiRequest } from '~~/hooks/api';
import { Faq } from '~~/types/models';

export const useFaqs = defineStore('company-faqs', () => {
  return useApiRequest<Faq[]>({
    url: '/companies/faqs',
    authorize: true,
    autoLoad: true,
  });
});