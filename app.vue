<script lang="ts" setup>
import 'toastr/build/toastr.min.css'
useHead({
  titleTemplate: (title) => title ? `${title} - Ori` : 'Ori',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
