<template>
    <div class="statistics">
      <div v-for="(detail, index) in animatedDetails" :key="index" class="stat-item">
        <p class="text-[#252c38] text-[3.75rem] leading-[4.25rem] font-bold">{{ detail.current }}</p>
        <h3 class="font-size: 0.875rem; vertical-align: middle; text-[#6b747b]">{{ detail.title }}</h3>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { details } from '~/constants/dataSets'

  
  interface Detail {
    title: string;
    start: number;
    end: number;
    current?: number;
  }
  const animatedDetails = ref(details.map((detail) => ({ ...detail, current: detail.start })));
  
  const animateNumbers = (detail: Detail, index: number) => {
    const increment = Math.ceil((detail.end - detail.start) / 100);
    const interval = setInterval(() => {
      if (animatedDetails.value[index].current! < detail.end) {
        animatedDetails.value[index].current! += increment;
        if (animatedDetails.value[index].current! > detail.end) {
          animatedDetails.value[index].current = detail.end;
        }
      } else {
        clearInterval(interval);
      }
    }, 20);
  };
  
  onMounted(() => {
    animatedDetails.value.forEach((detail, index) => {
      animateNumbers(detail, index);
    });
  });
  </script>
  
  <style scoped>
  .statistics {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem 4rem;
  }
  
  .stat-item {
    padding: 1rem;
    text-align: center;
    width: 200px;
  }
  </style>
  