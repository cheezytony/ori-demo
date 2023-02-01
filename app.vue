<script lang="ts" setup>
import 'toastr/build/toastr.min.css'
useHead({
  titleTemplate: (title) => title ? `${title} - Enif` : 'Enif',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
