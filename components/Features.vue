<template>
  <div class="features">
    <Card :features="features" />
  </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { features } from '~/constants/dataSets'
    import Card from './Card.vue'
    const router = useRouter()
    const goToFeatures = () => {
    // Navigate to /features and then scroll to the #features element
    router.push('/features').then(() => {
      // Scroll to the element after navigation
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
    })
  }
</script>
<style scoped>
    .features{
        padding: 5rem;
    }
</style>
