<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Heading from '~~/components/common/typography/Heading.vue';

definePageMeta({
  layout: 'app',
});

useHead({
  title: 'Settings'
});

const currentRoute = useRoute();
const routes = [
  {
    title: 'Providers',
    icon: 'fa-solid fa-handshake-angle',
    route: '/settings/providers',
  },
];
const compareRoute = (route: string, exact = true) => {
  const currentRoutePath = currentRoute.path;
  return exact ? route === currentRoutePath : currentRoutePath.match(new RegExp(route))
}
</script>

<template>
  <div class="flex flex-grow">
    <div class="w-4/12 min-w-[200px] max-w-[300px]">
      <div class="border-r border-gray-200 sticky top-0">
        <div class="flex items-center h-[150px] px-8">
          <Heading level="2">Settings</Heading>
        </div>
        <div class="flex flex-col gap-2 px-8">
          <template
            :key="index"
            v-for="({ route, icon, title }, index) in routes"
          >
            <NuxtLink
              :to="route"
              class="relative flex items-center gap-2 px-4 py-2 rounded-md"
              :class="
                compareRoute(route)
                  ? 'font-medium text-gray-800 bg-gray-300'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-300 hover:bg-opacity-50'
              "
            >
              <div class="w-6">
                <FontAwesomeIcon :icon="icon" />
              </div>
              <span class="text-[14px]">{{ title }}</span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <div class="bg-white flex-grow px-8">
      <div class="flex flex-col h-full max-w-[700px] mx-auto py-[150px] sticky top-0">
        <RouterView />
      </div>
    </div>
  </div>
</template>
