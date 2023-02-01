<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ButtonBase from '~~/components/common/button/ButtonBase.vue';
import { useApiRequest } from '~~/hooks/api';

const route = useRoute();

const response = ref(
  [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur',
    'perspiciatis molestiae quibusdam minima. Maxime unde deserunt ut',
    'aspernatur mollitia nostrum quo. Veritatis soluta sit doloribus quia',
    'officia architecto voluptas? Lorem ipsum, dolor sit amet consectetur',
    'adipisicing elit. Officia minus exercitationem, error recusandae',
    'consectetur placeat repudiandae quam veniam voluptates magni doloribus',
    'dignissimos facere delectus perspiciatis molestias laborum nesciunt,',
    'fugit quas.',
  ].join(' ')
);

// watch(route, () => load());
// onMounted(load);
</script>

<template>
  <div class="">
    <div class="mb-8">
      <div class="font-medium">Antonio Okoro</div>
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
