<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const currentRoute = useRoute();
const router = useRouter();
const routes = [
  { title: 'Dashboard', icon: 'fa-solid fa-square-poll-vertical', route: '/' },
  {
    title: 'Tickets',
    icon: 'fa-solid fa-ticket',
    route: '/tickets',
    exact: false,
  },
  {
    title: 'Settings',
    icon: 'fa-solid fa-gear',
    route: '/settings',
    exact: false,
  },
];

const compareRoute = (route: string, exact = true) => {
  const currentRoutePath = currentRoute.path;
  return exact
    ? route === currentRoutePath
    : currentRoutePath.match(new RegExp(route));
};
const handleLogout = () => router.push('/login');
</script>

<template>
  <div class="flex min-h-screen relative">
    <div
      class="fixed duration-300 flex-shrink-0 h-full w-[250px] -translate-x-full z-[90] xl:h-auto xl:relative xl:translate-x-0"
    >
      <aside
        class="bg-black flex flex-col min-h-screen pb-[100px] sticky text-white top-0"
      >
        <div class="flex gap-4 h-[150px] items-center px-10 text-white">
          <div class="flex items-center">
            <div class="bg-current flex-shrink-0 h-9 mix-blend-difference rounded-md w-9"></div>
            <div
              class="font-medium flex items-center -ml-7 text-[24px]"
            >
              ori
            </div>
          </div>
        </div>

        <!-- <div class="flex flex-col items-start mb-16 px-10">
          <img
            src="https://picsum.photos/id/64/100/100"
            :alt="name"
            class="mb-3 rounded-full"
            height="70"
            width="70"
          />
          <div class="font-medium text-gray-300">{{ name }}</div>
          <div class="text-gray-400 text-sm">{{ company?.name }}</div>
        </div> -->

        <div class="flex flex-col flex-grow gap-8">
          <template
            :key="index"
            v-for="({ route, icon, title, exact }, index) in routes"
          >
            <NuxtLink
              :to="route"
              class="relative flex items-center gap-2 px-10"
              :class="
                compareRoute(route, exact)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              "
            >
              <span
                v-if="compareRoute(route, exact)"
                class="absolute bg-white h-full left-0 top-0 w-[2px]"
              />
              <div class="w-6">
                <FontAwesomeIcon :icon="icon" />
              </div>
              <span class="text-[14px]">{{ title }}</span>
            </NuxtLink>
          </template>
          <div class="mt-auto"></div>
          <button
            class="appearance-none relative flex items-center gap-2 px-10 text-gray-400"
            type="button"
            @click.prevent="handleLogout"
          >
            <div class="w-6">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
            </div>
            <span class="text-[14px]">Log out</span>
          </button>
        </div>
      </aside>
    </div>
    <header
      class="fixed flex justify-end items-center left-[250px] h-[150px] px-6 top-0 w-[calc(100%-250px)]"
    >
      <div
        class="cursor-pointer gap-3 group inline-flex items-center p-2 rounded-full hover:bg-gray-100"
      >
        <div
          class="bg-gray-200 font-medium h-8 grid place-items-center rounded-full text-[14px] w-8 group-hover:bg-gray-300"
        >
          AO
        </div>
        <div>
          Mike Wizowski
        </div>
        <span class="text-sm">
          <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
        </span>
      </div>
    </header>
    <div class="bg-gray-100 flex flex-col flex-grow">
      <main class="flex-grow flex w-full">
        <slot />
      </main>
    </div>
  </div>
</template>
