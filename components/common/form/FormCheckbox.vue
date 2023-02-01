<script lang="ts" setup>
import IconCheckmark from '@/components/common/icon/IconCheckmark.vue';

const emit = defineEmits<{
  (e: 'change', value: boolean): void;
}>();
const props = defineProps<{ id?: string; modelValue?: boolean }>();

const isChecked = ref<boolean>(false);

const change = (event: Event) => {
  emit(
    'change',
    (isChecked.value = (event.target as HTMLInputElement)?.checked)
  );
};

watch(
  () => props.modelValue,
  (value) => (isChecked.value = value || false)
);
</script>

<template>
  <div class="inline-block mb-4">
    <label class="cursor-pointer flex gap-3 items-center">
      <i
        class="border flex-shrink-0 inline-flex h-5 items-center justify-center rounded w-5"
        :class="[isChecked ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-500']"
      >
        <IconCheckmark v-if="isChecked" />
      </i>
      <span class="text-[12px]">
        <slot />
      </span>
      <input
        :id="id"
        type="checkbox"
        class="absolute top-0 pointer-events-none opacity-0 visibility-hidden"
        :checked="isChecked"
        v-bind="$attrs"
        @change="change"
      />
    </label>
  </div>
</template>
