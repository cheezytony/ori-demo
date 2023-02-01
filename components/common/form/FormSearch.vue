<script lang="ts" setup>
import FormInput from './FormInput.vue';
import IconSearch from '../icon/IconSearch.vue';
import IconClose from '../icon/IconClose.vue';
const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'update:modelValue', value: string): void;
}>();
defineProps<{
  modelValue?: string;
}>();

const reset = () => {
  emit('update:modelValue', '');
  nextTick().then(() => emit('cancel'));
};
</script>

<template>
  <div class="relative md:min-w-[35rem]">
    <IconSearch class="absolute left-5 top-1/2 transform -translate-y-1/2" />
    <FormInput
      class="pl-12"
      placeholder="Search..."
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />
    <button
      class="absolute appearance-none bg-gray-100 grid h-6 place-items-center right-5 top-1/2 rounded-full -translate-y-1/2 w-6 z-20 hover:bg-gray-300"
      @click="reset"
    >
      <IconClose />
    </button>
  </div>
</template>
