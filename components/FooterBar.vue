<template>
  <div class="mt-16 lg:mt-7 grid grid-cols-1 lg:grid-cols-3 mb-[23px] ml-1 gap-[1.7545rem]">
      <ul class="flex flex-col lg:flex-row flex-wrap gap-2 lg:gap-5">
      <li
        v-for="(item, index) in filteredFooterBar"
        :key="index"
        class="text-[#6b747b] text-[14px] font-normal"
      >
        {{ item.name }} 
      </li>
    </ul>    
    <p class=" text-[#6b747b] text-[14px] font-normal text-center lg:text-right">
      {{ getFooterDetail(4)  ?? 'Copyright © Your name'}}
      <!-- Copyright © Your name -->
    </p>
    <p class=" text-[#6b747b] text-[14px] font-normal text-center lg:text-right lg:mr-[4px]">
      {{ getFooterDetail(5) ?? 'Distributed by : Themewagon'}}
      <!-- Distributed by : Themewagon -->
    </p>
  </div>
</template>

<script setup lang="ts">
import { GetMenuListApi } from "~/services/home";
import type { TContent } from '~/types/api-data-type';
const footerContent = ref<TContent | null>(null);
const filteredFooterBar = computed(() => {
  return footerContent.value?.footer?.filter(item => [1, 2, 3].includes(item.orderNo)) || [];
});

function getFooterDetail(orderNo: number) {
  const filteredItems = footerContent.value?.footer?.find(item => item.orderNo === orderNo);
  return filteredItems ? filteredItems?.name : null;
}


onMounted(() => {
  GetFooterContentData();
});

async function GetFooterContentData() {
  try {
    const { data = null, status = 500 } = await GetMenuListApi();
    if (status === 200 && data) {
        footerContent.value = data;
        console.info('footerContentdata',data);
    } else {
      footerContent.value = null;
      console.error('Failed to fetch page content data');
    }
  } catch (error) {
    console.error('Error fetching page content data:', error);
    footerContent.value = null;
  }
}
</script>

<style scoped>
.footer-bar {
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  flex-wrap: wrap;
  gap: 0;
  margin-left: 0rem;
  margin-top: 4.5rem;
  justify-content: flex-start; 
}

@media (max-width: 768px) {
  .footer-bar {
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    gap: 10px;
    margin-left: 0;
    margin-top: 1rem;
  }
}

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
