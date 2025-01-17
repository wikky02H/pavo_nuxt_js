<template>
  <div class="container feature-list gap-3 lg:gap-x-[1.5rem] lg:gap-y-14">
    <div class="feature-card" v-for="(feature, index) in features" :key="index">
      <img
        :src="`features/${feature.imgPath}`"
        :alt="feature.title || 'Feature Image'"
        class="feature-image"
      />
      <h3 class="feature-title">{{ feature.title }}</h3>
      <p class="feature-description">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TFeature } from "~/types/api-data-type";
defineProps<{ features: TFeature[] }>()
</script>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 28px;
  margin-bottom: 2.3rem;
}

.feature-card {
  background-color: #f1f9fc;
  border-radius: 15px;
  padding: 41px 19px;
  transition: box-shadow 0.3s ease;
  text-align: center;
  box-sizing: border-box;
}

.feature-image {
  width: 70px;
  height: 70px;
  margin-top: 10px;
  margin-bottom: 1.5rem;
  display: inline-block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5.7px;
  margin-top: 0px;
}

.feature-description {
  color: #6b747b;
  line-height: 1.5;
  font:
    400 1rem / 1.625rem 'Open Sans',
    sans-serif;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}
@media (max-width: 1024px) {
  .feature-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
}
</style>
