<template>
  <div class="lg:p-[5rem] md:p-[2rem] p-[10px]">
    <Card :features="features" />
  </div>
</template>

<script setup lang="ts">
import { features } from '~/constants/dataSets'
import Card from './Card.vue'
</script>
<style scoped>
.features {
  padding: 5rem;
}
</style>
