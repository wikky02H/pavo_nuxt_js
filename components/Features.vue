<template>
  <div class="container p-4 lg:px-[35px] lg:mt-[26px]">
    <Card :features="formattedFeatures" />
  </div>
</template>

<script setup lang="ts">
    import { usePageContent } from '~/composables/usePageContent'
    const { getDetailContent } = usePageContent()
    const formattedFeatures = getDetailContent(0, 'features', 'features')
</script>

<style scoped>
  .features {
    padding: 5rem;
  }
</style>
