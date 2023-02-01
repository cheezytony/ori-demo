<template>
  <input
    :type="type"
    v-bind="$attrs"
    class="input"
    :value="modelValue"
    v-on="listeners"
  />
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:modelValue']);
defineProps<{
  type?: string;
  modelValue?: string | number;
}>();

const listeners = {
  change: (event: KeyboardEvent) => {
    emit('update:modelValue', (event.target as HTMLInputElement)?.value);
  },
  input: (event: KeyboardEvent) => {
    emit('update:modelValue', (event.target as HTMLInputElement)?.value);
  },
};
</script>
