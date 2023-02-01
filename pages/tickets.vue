<script lang="ts" setup>
import { useApiRequest } from '~~/hooks/api';
import Heading from '~~/components/common/typography/Heading.vue';
import Skeleton from '~~/components/common/loaders/Skeleton.vue';
import FormGroup from '~~/components/common/form/FormGroup.vue';

definePageMeta({
  layout: 'app',
});

useHead({
  title: 'Tickets',
});

const route = useRoute();
const ticketId = computed(() => Number(route.params.id));

const options = [
  { title: 'Gmail', value: 'gmail' },
  { title: 'Freshdesk', value: 'freshdesk' },
  { title: 'Zohodesk', value: 'zohodesk' },
  { title: 'Zendesk', value: 'Zendesk' },
  { title: 'Intercom', value: 'Intercom' },
  { title: 'Outlook', value: 'Outlook' },
  { title: 'Twitter', value: 'Twitter' },
  { title: 'Facebook', value: 'Facebook' },
  { title: 'Instagram', value: 'Instagram' },
  { title: 'Tiktok', value: 'Tiktok' },
];
const option = ref('gmail');
const categories = ['Unprocessed', 'Pending', 'Resolved'];
const index = ref(0);
const setIndex = (i: number) => (index.value = i);
</script>

<template>
  <div class="flex flex-grow">
    <div
      class="flex-shrink-0 h-screen overflow-auto sticky top-0 w-4/12 min-w-[200px] max-w-[500px]"
    >
      <div class="border-r border-gray-200 sticky top-0">
        <div class="flex items-center h-[150px] px-8">
          <Heading level="2">Tickets</Heading>
        </div>

        <div class="px-8">
          <FormGroup
            v-model="option"
            type="select"
            :options="options"
            label="Select Provider"
            placeholder="Select Provider"
          />
        </div>

        <div class="flex flex-row flex-wrap gap-4 mb-16 px-8">
          <template :key="category" v-for="(category, i) in categories">
            <button
              class="appearance-none px-6 py-2 rounded-md text-[14px]"
              :class="
                index === i
                  ? 'font-medium bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-black'
              "
              @click="setIndex(i)"
            >
              {{ category }}
            </button>
          </template>
        </div>

        <div class="flex flex-col">
          <template :key="i" v-for="i in 10">
            <NuxtLink
              :to="`/tickets/${i}`"
              class="border cursor-pointer flex gap-2 relative px-8 pb-3 pt-4"
              :class="
                i === ticketId
                  ? 'bg-white border-gray-200 border-r-white -mr-px'
                  : 'border-transparent hover:bg-black hover:bg-opacity-5'
              "
            >
              <div
                class="bg-blue-500 flex-shrink-0 h-[10px] rounded-full w-[10px]"
              />
              <div>
                <div class="flex gap-8 justify-between mb-2">
                  <div
                    class="font-medium leading-[1] text-[14px] text-gray-700"
                  >
                    Mike Wizowski
                  </div>
                  <div class="text-gray-500 text-sm">3:15pm</div>
                </div>
                <p
                  class="font-light mb-0 overflow-hidden line-clamp-2 text-gray-500"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti assumenda impedit dignissimos quam, ex praesentium
                  ducimus, nam reprehenderit excepturi accusamus minus expedita
                  animi ipsa veniam! Asperiores, voluptatum. Porro, doloremque
                  unde.
                </p>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <div class="bg-white flex-grow px-8">
      <div
        class="flex flex-col h-full max-w-[700px] mx-auto py-[150px] sticky top-0"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
