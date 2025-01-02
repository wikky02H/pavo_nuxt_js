<template>
    <div class="footer-bar">
      <div
        v-for="(item, index) in footerBar"
        :key="index"
        :class="['footer-item']"
        :style="getItemStyle(index)"
      >
        {{ item.title }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { footerBar } from '~/constants/dataSets';
  
  const getItemStyle = (index: number) => {
    if (index === 0) {
      return { marginLeft: '30px' };
    } else if (index === 1) {
      return { marginLeft: '22px' };
    } else if (index === 2) {
      return { marginLeft: '22px' };
    } else if (index === 3) {
      return { marginLeft: '14rem' };
    } else if (index === 4) {
      return { marginLeft: '10.5rem' };
    }
  };
  </script>
  
  <style scoped>
  /* Footer container styles */
  .footer-bar {
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    flex-wrap: wrap;
    gap: 0;
    margin-left: 7rem;
    margin-top: 4.5rem;
    justify-content: flex-start; /* Align items to the left for desktop */
  }
  
  /* Footer item styles */
  .footer-item {
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: left; /* Text alignment left by default */
    transition: all 0.3s ease;
    color: #6b747b;
  }
  
  /* Responsive styles for tablets and below (max-width: 768px) */
  @media (max-width: 768px) {
    .footer-bar {
      flex-direction: column;
      align-items: center; /* Center the items in the footer */
      justify-content: center;
      gap: 10px;
      margin-left: 0;
      margin-top: 1rem;
    }
  
    .footer-item {
      text-align: center; /* Center the text for smaller screens */
      font-size: 16px;
      margin-left: 0 !important;
    }
  }
  
  /* Responsive styles for mobile devices (max-width: 480px) */
  @media (max-width: 480px) {
    .footer-bar {
      padding: 0.5rem;
      margin-left: 0;
      margin-top: 1rem;
    }
  
    .footer-item {
      font-size: 14px;
      text-align: center; /* Center the text for smaller screens */
      margin-left: 0 !important;
    }
  }
  </style>
  