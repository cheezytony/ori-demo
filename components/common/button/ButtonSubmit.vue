<script lang="ts" setup>
import { Form } from 'vue3-form';
import ButtonBase from './ButtonBase.vue';
import LoaderSmWhite from '../loaders/LoaderSmallWhite.vue'

defineProps<{
  form?: Form;
  isLoading?: boolean;
}>();
</script>

<template>
  <ButtonBase class="w-full" :disabled="form?.loading" type="submit">
    <template v-if="form?.loading || isLoading">
      <LoaderSmWhite /> &nbsp;
    </template>
    <slot v-else />
  </ButtonBase>
</template>
