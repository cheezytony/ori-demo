<script lang="ts" setup>
import { NuxtLinkProps } from '#app';
import { ButtonHTMLAttributes, computed } from 'vue';

const COLORS = {
  'black':
    'bg-black text-white hover:bg-gray-700 focus:bg-gray-500',
  'black:ghost':
    'bg-transparent text-black hover:bg-gray-100 focus:bg-gray-200',
  blue: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-700',
  'blue:outline':
    'bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 focus:bg-blue-100',
  gray: 'bg-gray-500 text-white hover:bg-gray-400 focus:bg-gray-600',
  'green:soft': 'bg-green-50 text-green-500 hover:bg-green-100 focus:bg-green-200',
  red: 'bg-red-500 text-white hover:bg-red-400 focus:bg-red-600',
  white: 'bg-white border border-gray-300 text-black hover:bg-gray-100 focus:bg-gray-200'
};

const LINKCOLORS = {
  gray: 'text-gray-500',
  red: 'text-red-500',
  blue: 'text-blue-500',
};

const SIZES = {
  sm: 'font-medium gap-2 px-5 py-[0.5rem] rounded-[4px] text-[12px]',
  lg: 'font-medium gap-3 px-10 py-[1.25rem] rounded-[4px] text-[16px]',
  md: 'font-medium gap-3 max-w-full px-[24px] py-[1rem] rounded-[4px] text-[14px]',
};

const props = withDefaults(
  defineProps<{
    colorScheme?: keyof typeof COLORS;
    disabled?: boolean;
    isLoading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    to?: NuxtLinkProps['to'];
    variant?: 'dropdown' | 'link' | 'solid';
  }>(),
  {
    size: 'md',
    colorScheme: 'blue',
  }
);

const color = computed<string>(() => {
  if (props.variant === 'link') {
    switch (props.colorScheme) {
      case 'gray':
        return 'text-gray-500';
      case 'red':
        return 'text-red-500';
      case 'blue':
      default:
        return 'text-blue-500';
    }
  }

  return COLORS[props.colorScheme];
});

const box = computed<string>(() => {
  if (props.variant === 'dropdown') return 'gap-2 text-[14px]';
  if (props.variant === 'link') return 'font-medium text-[14px]';

  return SIZES[props.size];
});

const attrs = computed(() => ({}));

const is = computed(() => {
  if (props.to) return 'a';
  return 'button';
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :disabled="isLoading || disabled"
    :to="to"
    class="duration-75 inline-flex items-center justify-center tracking-[1px] transform uppercase"
    :class="[
      box,
      color,
      isLoading || disabled
        ? 'cursor-not-allowed opacity-50'
        : 'hovers:-translate-y-1 active:scale-[0.99]',
    ]"
  >
    <span v-if="isLoading">...</span>
    <slot v-else />
  </NuxtLink>
  <button
    v-else
    :disabled="isLoading"
    type="button"
    class="duration-75 inline-flex items-center justify-center tracking-[1px] transform uppercase"
    :class="[
      box,
      color,
      isLoading || disabled
        ? 'cursor-not-allowed opacity-50'
        : 'hovers:-translate-y-1 active:scale-[0.99]',
    ]"
  >
    <span v-if="isLoading">...</span>
    <slot v-else />
  </button>
</template>
