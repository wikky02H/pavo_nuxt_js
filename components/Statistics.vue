<!-- <template>
    <div class="container flex justify-center flex-wrap gap-4 px-4 sm:px-8 py-14 sm:py-32">
      <div v-for="(detail, index) in animatedDetails" :key="index" class="p-[1rem] text-center w-[200px]">
        <p class="text-[#252c38] text-[3.75rem] leading-[4.25rem] font-bold">{{ detail.current }}</p>
        <h3 class="font-size: 0.875rem; vertical-align: middle; text-[#6b747b]">{{ detail.title }}</h3>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { details } from '~/constants/dataSets';
  import { GetStatisticsApi } from '~/services/home';
  
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
    GetStatisticsData(); 
    console.log('GetStatisticsData=>',GetStatisticsData());
  });
  async function GetStatisticsData() {
  try {
    console.log('Fetching statistics...');
    const { data = null, status = 500 } = await GetStatisticsApi(); // API call

    if (status === 200 && data) {
      // Mapping the API response to match the required format for animation
      const mappedDetails = Object.keys(data).map((key) => {
        const item = data[key][0]; // Assumes there's one object in each array
        console.log('key:', key); // Log the key for debugging
        return {
          title: item.name,  // Use the 'name' property of the item
          start: 1,  // Default start value
          end: item.value,  // Use the 'value' property for 'end'
        };
      });

      console.log('Mapped details:', mappedDetails);
    } else {
      console.error('Failed to fetch statistics data');
    }
  } catch (error) {
    console.error('Error fetching statistics data:', error);
  }
}
console.log('Mapped details:final', GetStatisticsData());

  </script>
  
  <style scoped>  
  .stat-item {
    padding: 1rem;
    text-align: center;
    width: 200px;
  }
  </style>
  
    -->
<template>
  <div
    class="container flex justify-center flex-wrap gap-4 px-4 sm:px-8 py-14 sm:py-32"
  >
    <div
      v-for="(detail, index) in animatedDetails"
      :key="index"
      class="p-[1rem] text-center w-[200px]"
    >
      <p class="text-[#252c38] text-[3.75rem] leading-[4.25rem] font-bold">
        {{ detail.current || 0 }}
      </p>
      <h3 class="text-[0.875rem] text-[#6b747b]">{{ detail.title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { GetStatisticsApi } from '~/services/home'
import type { TStatistics } from '~/types/api-data-type'
const animatedDetails = ref<TStatistics[]>([])

const animateNumbers = (detail: TStatistics, index: number) => {
  const increment = Math.ceil((detail.end - detail.start) / 100)
  animatedDetails.value[index].current = detail.start

  const interval = setInterval(() => {
    if (animatedDetails.value[index].current! < detail.end) {
      animatedDetails.value[index].current! += increment
      if (animatedDetails.value[index].current! > detail.end) {
        animatedDetails.value[index].current = detail.end
      }
    } else {
      clearInterval(interval)
    }
  }, 20)
}

const GetStatisticsData = async () => {
  try {
    const { data = null, status = 500 } = await GetStatisticsApi()

    if (status === 200 && data) {
      const mappedDetails = Object.keys(data).map((key) => {
        const item = data[key][0] // Assumes one object in each array
        return {
          title: item.name || 'Default Title', // Fallback for title
          start: 0, // Start animation from 0
          end: item.value || 0, // Fallback for value
        }
      })

      animatedDetails.value = mappedDetails
    } else {
      console.error('Failed to fetch statistics data.')
    }
  } catch (error) {
    console.error('Error fetching statistics data:', error)
  }
}

watch(animatedDetails, (newDetails) => {
  newDetails.forEach((detail, index) => {
    animateNumbers(detail, index)
  })
})

onMounted(() => {
  GetStatisticsData()
})
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
