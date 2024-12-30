<template>
  <div class="container">
    <div class="text-container">
      <h2
        class="mb-6 font-bold text-[2.125rem] leading-[2.625rem] tracking-[0.4px]"
      >
        Results driven ground breaking technology
      </h2>
      <p class="mb-4">
        Based on our team's extensive experience in developing line of business
        applications and constructive customer feedback we reached a new level
        of revenue.
      </p>
      <p class="mb-4">
        We enjoy helping small and medium sized tech businesses take a shot at
        established Fortune 500 companies
      </p>
    </div>
    <div class="image-container">
      <img src="../public/details/detailsImg.jpg" alt="Details Image" />
    </div>
  </div>
  <div class="container">
    <div class="image-container">
      <img src="../public/details/detailsImg1.jpg" alt="Details Image" />
    </div>
    <div class="text-container">
      <h2
        class="mb-6 font-bold text-[2.125rem] leading-[2.625rem] tracking-[0.4px]"
      >
        Instant results for the marketing department
      </h2>
      <p class="mb-2 flex items-center gap-[5px]">
        <img
          src="../assets/images/rightSolidArrow.svg"
          class="w-4 h-3.5 text-[#ff6e84]"
          alt="Dropdown Arrow"
        />
        Features that will help you and your marketers
      </p>
      <p class="mb-2 flex items-center gap-[5px]">
        <img
          src="../assets/images/rightSolidArrow.svg"
          class="w-4 h-3.5 text-[#ff6e84]"
          alt="Dropdown Arrow"
        />
        Smooth learning curve due to the knowledge base
      </p>
      <p class="mb-6 flex items-center gap-[5px]">
        <img
          src="../assets/images/rightSolidArrow.svg"
          class="w-4 h-3.5 text-[#ff6e84]"
          alt="Dropdown Arrow"
        />
        Ready out-of-the-box with minor setup settings
      </p>
      <div class="ml-1 flex space-x-3">
        <a
          href="#apple"
          class="flex items-center justify-center px-6 py-2 bg-indigo-600 border border-indigo-600 text-white rounded-full cursor-pointer hover:bg-white hover:text-indigo-600 w-32 h-11 text-sm font-semibold"
        >
          Lightbox
        </a>
        <a
          href="#android"
          class="flex items-center justify-center px-6 py-2 bg-white border border-black text-black rounded-full cursor-pointer hover:bg-black hover:text-white w-28 h-11 text-sm"
        >
          Details
        </a>
      </div>
    </div>
  </div>
  <Statistics />
  <Slider />
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 5rem;
  gap: 5rem; 
}

.text-container {
  flex: 1; 
  max-width: 40%; 
}

.text-container h2 {
  font-weight: bold;
  color: #333;
}

.text-container p {
  font:
    400 1rem/1.625rem 'Open Sans',
    sans-serif;
  color: #6b747b;
  line-height: 1.5;
}

.image-container {
  flex: 1; 
  text-align: right; 
}

.image-container img {
  max-width: 100%; 
  height: auto;
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column; 
    text-align: center; 
  }

  .text-container {
    max-width: 100%;
  }

  .image-container {
    max-width: 100%; 
    text-align: center; 
  }
}
</style>
