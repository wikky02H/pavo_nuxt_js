<template>
  <div class="feature-list">
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
type TFeature = {
  title: string
  description: string
  imgPath: string
}

defineProps<{ features: TFeature[] }>()
</script>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  column-gap: 28px; 
  row-gap: 3.5rem;
  padding: 0 10px;
  margin-bottom: 2.3rem; 
}

.feature-card {
  background-color: #f1f9fc;
  border-radius: 15px;
  padding: 3.125rem 1rem 2.125rem 1rem;
  transition: box-shadow 0.3s ease;
  text-align: center;
  width: 100%; 
  box-sizing: border-box; 
}
.feature-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.feature-image {
  height: 62px;
  margin-top: 10px;
  margin-bottom: 25px;
  display: inline-block; 
}

.feature-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.feature-description {
  color: #6b747b;
  line-height: 1.5;
  font: 400 1rem / 1.625rem "Open Sans", sans-serif;
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

