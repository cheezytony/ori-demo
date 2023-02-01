<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'submit'): void;
}>()
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <slot />
  </form>
</template>
