<script lang="ts" setup>
import { Component as VueComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ButtonBase from '~~/components/common/button/ButtonBase.vue';
import Heading from '~~/components/common/typography/Heading.vue';
import Gmail from '~~/components/page-sections/providers/Gmail.vue';
import Zohodesk from '~~/components/page-sections/providers/Zohodesk.vue';
import Freshdesk from '~~/components/page-sections/providers/Freshdesk.vue';
import { useProviders } from '~~/store/providers';
import { Provider } from '~~/types/models';

const { industries } = useProviders();

const providers = computed(
  () => {
    return industries.flatMap(({ providers }) => providers);
  }
);

const components: Record<string, VueComponent> = {
  Gmail,
  Zohodesk,
  Freshdesk,
};

const isIntegrated = (provider: Provider) => components[provider.name];

const index = ref(0);
const setIndex = (i: number) => (index.value = i);

const isConfiguring = ref<Provider | null>(null);
const configure = (provider: Provider) => (isConfiguring.value = provider);
const cancel = () => (isConfiguring.value = null);
</script>

<template>
  <div>
    <Heading level="3" class="mb-20">
      Configure and select your provider
    </Heading>

    <div class="flex flex-col gap-8">
      <template :key="provider.name" v-for="(provider, i) in providers">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-8 items-center md:flex-row">
            <div>
              <p class="font-semibold leading-[1]">
                {{ provider.name }}
              </p>
              <p class="mb-0 text-gray-500">
                {{ isIntegrated(provider) ? 'Click to link Account' : 'Coming soon...' }}
              </p>
            </div>
            <div class="flex gap-4 ml-auto" :class="[!isIntegrated(provider) && 'pointer-events-none opacity-25']">
              <ButtonBase
                v-if="isConfiguring?.name === provider.name"
                color-scheme="red"
                size="sm"
                @click="cancel"
              >
                <FontAwesomeIcon icon="fa-solid fa-close" class="text-lg" />
              </ButtonBase>
              <ButtonBase v-else :color-scheme="'black'" size="sm" @click="configure(provider)">
                <FontAwesomeIcon icon="fa-solid fa-gear" class="text-lg" />
              </ButtonBase>
            </div>
          </div>
          <component
            v-if="
              components[provider.name] && isConfiguring?.name === provider.name
            "
            :is="components[provider.name]"
          />
        </div>
        <div v-if="i < (providers?.length || 0) - 1" class="border-b border-gray-200" />
      </template>
    </div>
  </div>
</template>
