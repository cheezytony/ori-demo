<script lang="ts" setup>
import Container from '@/components/common/Container.vue';
</script>

<template>
  <section class="pt-16" style="padding-bottom: 90px;">
    <Container>
      <div class="mb-16 pb-5">
        <RouterLink to="/">
          Enif
        </RouterLink>
      </div>

      <slot />
    </Container>
  </section>
</template>