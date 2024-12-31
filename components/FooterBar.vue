<template>
  <div class="footer-bar">
    <div class="footer-item" v-for="(item, index) in footerBar" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { footerBar } from '~/constants/dataSets'
</script>

<style scoped>
.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: 'Open Sans', sans-serif;
}

/* Styling for footer items */
.footer-item {
  font-size: 14px;
  font-weight: normal;
}

.footer-item:nth-child(4) {
  text-align: center;
}

.footer-item:nth-child(5) {
  text-align: right;
}

@media (max-width: 768px) {
  .footer-bar {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;
  }

  .footer-item {
    text-align: center;
    font-size: 16px;
  }

  .footer-item:nth-child(4) {
    text-align: center;
  }

  .footer-item:nth-child(5) {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-bar {
    padding: 0.5rem;
  }

  .footer-item {
    font-size: 14px;
  }
}
</style>
