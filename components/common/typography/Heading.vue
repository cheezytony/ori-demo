<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    level?: '1' | '2' | '3' | '4';
    fontWeight?: string;
  }>(),
  {
    fontWeight: 'font-medium',
  }
);

const sizing = computed(() => {
  switch (props.level) {
    case '2':
      return 'leading-[1.2] text-[32px]';
    case '3':
      return 'leading-[1.2] text-[24px]';
    case '4':
      return 'leading-[1.2] text-[18px]';
    case '1':
    default:
      return 'font-heading leading-[1.2] text-[48px]';
  }
});
</script>

<template>
  <div :class="[sizing, fontWeight]"><slot /></div>
</template>
