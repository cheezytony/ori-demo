<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ButtonBase from '~~/components/common/button/ButtonBase.vue';
const response = ref('');
</script>

<template>
  <div class="">
    <div class="mb-8">
      <div class="font-medium">Mike Wizowski</div>
      <div class="text-gray-500 text-sm">12:45pm</div>
    </div>


    <div
      class="bg-gray-50 border border-gray-200 mb-8 p-4 rounded-md text-gray-600 focus-within:bg-white focus-within:border-blue-500"
    >
      <p class="font-medium">Response:</p>
      <textarea
        v-model="response"
        class="bg-transparent block min-h-[200px] px-0 resize-none text-[15px] w-full focus:outline-none"
        :spellcheck="false"
      />
    </div>

    <div class="flex justify-end">
      <ButtonBase>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
        </span>
        <span>Send Response</span>
      </ButtonBase>
    </div>
  </div>
</template>
