<script lang="ts" setup>
const route = useRoute();

// Submit and redirect
onBeforeMount(() => {
  opener.postMessage({ data: route.query, key: 'google:oauth2' });
  self.close();
  // fetch(`https://www.googleapis.com/drive/v3/about?fields=user&access_token=${params.value.access_token}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)

  //     // send data to backend
      
  //     opener.postMessage({ params: params.value, data });
  //     self.close();
  //   })
});
</script>

<template>
  <div>Setting Up Google</div>
</template>
