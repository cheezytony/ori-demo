<script lang="ts" setup>
import Heading from '~~/components/common/typography/Heading.vue';

definePageMeta({
  layout: 'app',
});

useHead({
  title: 'Dashboard',
});
</script>

<template>
  <div class="flex flex-grow">
    <div class="w-4/12 min-w-[200px] max-w-[500px]">
      <div class="sticky top-0">
        <div class="flex items-center h-[150px] px-8">
          <Heading level="2">Dashboard</Heading>
        </div>
      </div>
    </div>
    <div class="bg-white flex-grow px-8">
      <div class="max-w-[700px] py-[150px]"></div>
    </div>
  </div>
</template>
