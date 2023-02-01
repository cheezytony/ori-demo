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
      class="bg-gray-50 border border-gray-200 mb-8 p-4 rounded-md text-gray-600"
    >
      <p class="font-medium">Message:</p>
      <p class="mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur
        perspiciatis molestiae quibusdam minima. Maxime unde deserunt ut
        aspernatur mollitia nostrum quo. Veritatis soluta sit doloribus quia
        officia architecto voluptas? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Officia minus exercitationem, error recusandae
        consectetur placeat repudiandae quam veniam voluptates magni doloribus
        dignissimos facere delectus perspiciatis molestias laborum nesciunt,
        fugit quas.
      </p>
    </div>

  </div>
</template>
