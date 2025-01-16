<template>
  <div class="bg-[#f1f9fc]">
    <p class="mb-12 text-center lg:max-w-xl lg:mx-auto custom-style">
      What do users think about Pavo
    </p>
    <div class="testimonial-slider">
      <button
        @click="prev"
        class="slider-button prev-button"
        :class="{ active: isButtonActive }"
      >
        &lt;
      </button>

      <div class="slider-container">
        <div class="slider">
          <div
            class="slider-item"
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index"
          >
            <div class="testimonial-card">
              <img
                :src="`details/${testimonial.profilePic}`"
                alt="Profile Picture"
                class="profile-pic"
              />
              <p class="details italic mb-3">{{ testimonial.details }}</p>
              <h4 class="designation">{{ testimonial.designation }}</h4>
            </div>
          </div>
        </div>
      </div>

      <button
        @click="next"
        class="slider-button next-button"
        :class="{ active: isButtonActive }"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { GetFeedbackContentApi } from "~/services/home";
import type { TSlider } from "~/types/api-data-type";

const visibleTestimonialsData = ref<{
  profilePic: string;
  details: string;
  designation: string;
  orderNo: number;
}[]>([]);

const currentIndex = ref(0);
const itemsPerPage = 3;
const isButtonActive = ref(false);
const isAutoPlayActive = ref(true);
let autoplayInterval: ReturnType<typeof setInterval>;
const totalTestimonials = ref(0);

const GetStatisticsData = async () => {
  try {
    const { data = null, status = 500 } = await GetFeedbackContentApi();
    if (status === 200 && data) {
      visibleTestimonialsData.value = (data as TSlider[]).map((item: TSlider) => ({
        profilePic: item.contentImagePath || "default.jpg",
        details: item.feedback || "No description available",
        designation: item.userName || "Anonymous User",
        orderNo: item.orderNo || 0,
      }));
      totalTestimonials.value = visibleTestimonialsData.value.length;
    } else {
      console.error("Failed to fetch testimonials data.");
    }
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
  }
};

const visibleTestimonials = computed(() => {
  const start = currentIndex.value;
  const end = (start + itemsPerPage) % totalTestimonials.value;
  if (end > start) {
    return visibleTestimonialsData.value.slice(start, end);
  }
  return [
    ...visibleTestimonialsData.value.slice(start, totalTestimonials.value),
    ...visibleTestimonialsData.value.slice(0, end),
  ];
});

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % totalTestimonials.value;
  handleButtonClick();
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalTestimonials.value) % totalTestimonials.value;
  handleButtonClick();
};

const handleButtonClick = () => {
  if (!isAutoPlayActive.value) {
    isButtonActive.value = true;
    setTimeout(() => {
      isButtonActive.value = false;
    }, 200);
  }
};

onMounted(() => {
  GetStatisticsData();
  autoplayInterval = setInterval(() => {
    if (isAutoPlayActive.value) next();
  }, 3000); // Auto-scroll every 3 seconds
});

onUnmounted(() => {
  clearInterval(autoplayInterval);
});
console.log('visibleTestimonials',visibleTestimonials.value);
</script>

<style scoped>
.testimonial-slider {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
}

.slider-container {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}

.slider {
  display: flex;
  width: 100%;
}

.slider-item {
  flex: 0 0 33.33%; /* Default: 3 items per slide */
  padding: 0 10px;
  box-sizing: border-box;
  transition: transform 0.5s ease-in-out;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  background-color: #f1f9fc;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 200px; /* Ensure a consistent card height */
}

.profile-pic {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.designation {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.details {
  color: #6b747b;
  font-weight: 400; /* Regular weight */
  font-size: 1rem; /* Font size */
  line-height: 1.625rem; /* Line height */
  font-family: 'Open Sans', sans-serif; /* Font family */
  text-align: center;
  margin: 0 1rem; /* Adding horizontal margins to avoid text touching edges */
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: black;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
}

.prev-button {
  left: 10px;
  margin-left: 40px;
}

.next-button {
  right: 10px;
  margin-right: 40px;
}

.custom-style {
  color: #252c38;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 2.625rem;
  letter-spacing: -0.4px;
  padding-top: 5rem;
  margin-top: 5rem;
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
  /* Tablet devices: Show 2 items per slide */
  .slider-item {
    flex: 0 0 50%;
  }

  .testimonial-slider {
    padding: 3rem;
  }

  .slider-button {
    font-size: 1.4rem;
    padding: 1rem;
  }

  .prev-button,
  .next-button {
    margin-left: 30px;
    margin-right: 30px;
  }
}

@media (max-width: 768px) {
  /* Mobile Landscape: Show 1 item per slide */
  .slider-item {
    flex: 0 0 100%; /* Show 1 testimonial per slide */
    padding: 0 5px;
  }

  .testimonial-slider {
    padding: 2rem; /* Reduce padding on mobile */
  }

  .slider-button {
    font-size: 1.2rem; /* Smaller buttons */
    padding: 0.8rem;
  }

  .prev-button {
    left: 5px;
    margin-left: 20px;
  }

  .next-button {
    right: 5px;
    margin-right: 20px;
  }

  .profile-pic {
    width: 60px;
    height: 60px;
  }

  .designation {
    font-size: 1rem;
  }

  .details {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }

  .custom-style {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 3rem;
  }
}

@media (max-width: 480px) {
  /* Small screens: Show 1 item per slide with additional tweaks */
  .slider-button {
    font-size: 1rem;
    padding: 0.7rem;
  }

  .custom-style {
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-top: 2rem;
  }

  .profile-pic {
    width: 50px;
    height: 50px;
  }

  .designation {
    font-size: 0.9rem;
  }

  .details {
    font-size: 0.8rem;
    line-height: 1.25rem;
  }
}
</style>

