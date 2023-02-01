<script lang="ts" setup>
const route = useRoute();

// Submit and redirect
onBeforeMount(() => {
  opener.postMessage({ data: route.query, key: 'zohodesk:oauth2' });
  self.close();
});
</script>

<template>
  <div>Setting Up Zohodesk</div>
</template>
