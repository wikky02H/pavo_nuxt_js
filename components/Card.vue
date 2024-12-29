<template>
    <div class="feature-list">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <img :src="require(`@/assets/images/${feature.imgPath}`)" alt="Feature Image" class="feature-image" />
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { features } from '../constants/features'; // Import the constant file
  
  </script>
  
  <style scoped>
  .feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .feature-card {
    background-color: #f1f9fc;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    text-align: center;
  }
  
  .feature-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .feature-image {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
  
  .feature-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .feature-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  </style>
  