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
              <h4 class="designation">{{ testimonial.designation }}</h4>
              <p class="details">{{ testimonial.details }}</p>
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
import { ref, computed } from 'vue'
import { testimonials } from '~/constants/dataSets'
import { onMounted, onUnmounted } from 'vue'
const currentIndex = ref(0)
const itemsPerPage = 3
const isButtonActive = ref(false)
const isAutoPlayActive = ref(false)
let autoplayInterval: ReturnType<typeof setInterval>

const visibleTestimonials = computed(() => {
  const start = currentIndex.value
  const end = start + itemsPerPage
  return [
    ...testimonials.slice(start, end),
    ...testimonials.slice(0, end - testimonials.length),
  ]
})

const next = () => {
  if (currentIndex.value + 1 < testimonials.length) {
    currentIndex.value += 1
  } else {
    currentIndex.value = 0
  }
  handleButtonClick()
  smoothScroll()
}
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  } else {
    currentIndex.value = testimonials.length - 1
  }
  handleButtonClick()
  smoothScroll()
}
const smoothScroll = () => {
  console.log('smoothScroll function triggered');
  
  const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
  console.log('sliderContainer:', sliderContainer);
  
  const sliderItem = sliderContainer?.querySelector('.slider-item') as HTMLElement;
  console.log('sliderItem:', sliderItem);

  if (sliderItem) {
    const itemWidth = 300;  
    console.log('itemWidth:', itemWidth);
    
    const scrollToPosition = 1 * itemWidth;
    // const scrollToPosition = currentIndex.value * itemWidth;
    console.log('currentIndex:', currentIndex.value);
    console.log('scrollToPosition:', scrollToPosition);
    if (sliderContainer) {
      if (scrollToPosition === 0) {
        console.log('Scrolled to the first item, no movement');
      } else {
        console.log('Scrolling to position...');
      }

      // Scroll with smooth behavior
      sliderContainer.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth',
      });
    } else {
      console.error('Slider container not found.');
    }
  } else {
    console.error('Slider item not found or incorrect item width.');
  }
};


onMounted(() => {
  isAutoPlayActive.value = true
  autoplayInterval = setInterval(() => {
    next()
  }, 3000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
  isAutoPlayActive.value = false
})

const handleButtonClick = () => {
  if (!isAutoPlayActive.value) {
    isButtonActive.value = true
    setTimeout(() => {
      isButtonActive.value = false
    }, 200)
  }
}
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
  transition: transform 0.5s ease-in-out; 
}

.slider {
  display: flex;
  width: 100%;
  justify-content: center;
}

.slider-item {
  flex: 0 0 33.33%; 
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.profile-pic {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.designation {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.details {
  color: #666666;
  font-size: 1rem;
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
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  z-index: 1;
  padding: 4rem;
}

.slider-button:focus,
.slider-button:active {
  background-color: transparent;
  color: black;
  outline: none;
}

.slider-button:hover {
  background-color: transparent;
}

.slider-button.active {
  background-color: transparent;
  color: black;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

@media (max-width: 768px) {
  .slider-item {
    flex: 0 0 100%;
  }
}

.custom-style {
  color: #252c38;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 2.625rem;
  letter-spacing: -0.4px;
  padding-top: 5rem;
  margin-top: 6rem;
  text-align: center;
}
</style>

