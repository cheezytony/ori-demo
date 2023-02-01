<script lang="ts" setup>
import Heading from '~~/components/common/typography/Heading.vue';

const currentRoute = useRoute();
const tabs = [
  {
    title: 'Basic Information',
    route: '/settings',
  },
  {
    title: 'Password',
    route: '/settings/password',
  },
];
</script>

<template>
  <div>
    <Heading level="3" class="mb-20"> Update your company information </Heading>

    <div class="flex flex-row flex-wrap gap-4 mb-16">
      <template :key="title" v-for="({ title, route }, i) in tabs">
        <NuxtLink
          :to="route"
          class="appearance-none px-6 py-2 rounded-md text-[14px]"
          :class="
            currentRoute.path === route
              ? 'font-medium bg-blue-500 text-white'
              : 'bg-blue-50 text-gray-400 hover:bg-blue-200 hover:text-blue-500'
          "
        >
          {{ title }}
        </NuxtLink>
      </template>
    </div>

    <RouterView />

  </div>
</template>
