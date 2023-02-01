<template>
  <div class="relative">
    <input
      ref="inputRef"
      v-bind="$attrs"
      :type="showPassword ? 'text' : 'password'"
      class="input"
      :value="modelValue"
      v-on="listeners"
    />
    <button
      v-if="canTogglePassword"
      type="button"
      class="absolute p-2 right-[1rem] rounded-md text-gray-500 top-1/2 transform -translate-y-1/2 z-[1] hover:bg-blue-50 hover:text-blue-500"
      @click="toggleShowPassword"
    >
      <IconEye />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconEye from '../icon/IconEye.vue';

const emit = defineEmits(['update:modelValue']);
withDefaults(defineProps<{
  canTogglePassword?: boolean;
  modelValue?: string;
}>(), {
  canTogglePassword: true,
});

const inputRef = ref<HTMLInputElement>();

const showPassword = ref(false);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
  inputRef.value?.focus();
};

const listeners = {
  change: (event: KeyboardEvent) => {
    emit('update:modelValue', (event.target as HTMLInputElement)?.value);
  },
  input: (event: KeyboardEvent) => {
    emit('update:modelValue', (event.target as HTMLInputElement)?.value);
  },
};
</script>
