<script lang="ts" setup>
import Dropdown from '../dropdown/Dropdown.vue';
import DropdownButton from '../dropdown/DropdownButton.vue';
import ButtonDefault from '../button/ButtonDefault.vue';
import IconSorting from '../icon/IconSorting.vue';
import IconCaretDown from '../icon/IconCaretDown.vue';
import DropdownMenu from '../dropdown/DropdownMenu.vue';
import DropdownItem from '../dropdown/DropdownItem.vue';
import { computed, ref } from 'vue';
import IconSettingsSliders from '../icon/IconSettingsSliders.vue';

const emit = defineEmits<{
  (e: 'update:order', order: 'asc' | 'desc'): void;
  (e: 'update:orderBy', orderBy: string): void;
}>();
const props = withDefaults(
  defineProps<{
    options: Array<{
      title: string;
      value: string;
    }>;
    order?: 'asc' | 'desc';
    orderBy?: string;
  }>(),
  {}
);

const orderBy = ref<string>(props.orderBy || '');
const order = ref<'asc' | 'desc'>(props.order || 'asc');
const orderOptions: Array<{
  title: string;
  value: 'asc' | 'desc';
}> = [
  { title: 'Ascending', value: 'asc' },
  { title: 'Descending', value: 'desc' },
];

const selectedOrder = computed(
  () =>
    orderOptions.find((option) => option.value === order.value) ||
    orderOptions[0]
);
const selectedOrderBy = computed(
  () =>
    props.options.find((option) => option.value === orderBy.value) ||
    props.options[0]
);

const setOrder = (value: 'asc' | 'desc') =>
  emit('update:order', (order.value = value));
const setOrderBy = (value: string) =>
  emit('update:orderBy', (orderBy.value = value));
</script>

<template>
  <Dropdown v-slot="props">
    <DropdownButton as="div">
      <ButtonDefault variant="dropdown">
        <IconSettingsSliders />
        <span class="font-normal">{{ selectedOrderBy?.title }}</span>
        <IconCaretDown />
      </ButtonDefault>
    </DropdownButton>
    <DropdownMenu>
      <template :key="index" v-for="({ title, value }, index) in options">
        <DropdownItem
          :is-selected="value === orderBy"
          @click="setOrderBy(value)"
        >
          {{ title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
  <Dropdown>
    <DropdownButton as="div">
      <ButtonDefault variant="dropdown">
        <IconSorting />
        <span class="font-normal">{{ selectedOrder.title }}</span>
        <IconCaretDown />
      </ButtonDefault>
    </DropdownButton>
    <DropdownMenu>
      <template :key="index" v-for="({ title, value }, index) in orderOptions">
        <DropdownItem :is-selected="value === order" @click.prevent="setOrder(value)">
          {{ title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>
