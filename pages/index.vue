<template>
  <div class="backgroundColor">
    <div class="content-container">
      <h1 class="mb-5 text-[2.975rem] font-bold leading-[3.5rem]">
        Team management mobile application
      </h1>
      <p class="text-xl font-light mb-8 text-[#6b747b] ">
        Start getting things done together with your team based on Pavo's
        revolutionary team management features.
      </p>
      <div class="social-icons flex space-x-3">
        <a
          href="#apple"
          class="flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-[30px] text-lg cursor-pointer hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg border  border-transparent transition-all duration-300 ease-in-out"
        >
          <i class="fab fa-apple mr-2"></i>
          Download
        </a>

        <a
          href="#android"
          class="flex items-center justify-center px-6 py-2 bg-pink-500 text-white rounded-[30px] text-lg cursor-pointer hover:bg-transparent hover:text-pink-500 hover:border-pink-500 border border-transparent transition-all duration-300 ease-in-out"
        >
          <i class="fab fa-google-play mr-2"></i>
          Download
        </a>
      </div>
    </div>

    <div class="image-container">
      <img src="../assets/images/smartphone.png" alt="Smartphone Image" />
    </div>
  </div>
  <div class="pt-4 pb-14 text-center mt-4">
    <div class="px-4 sm:px-8 xl:px-4">
      <p class="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
        Team management mobile apps don’t get better than Pavo. It’s probably
        the best app in the world for this purpose. Don’t hesitate to give it a
        try today and you will fall in love with it
      </p>
    </div>
  </div>
  <Features />
  <Details />
  <Statistics />
  <Slider />
  <Pricing />
  <Download />
  <Footer />
</template>
<script setup lang="ts">
</script>

<style scoped>
.backgroundColor {
  height: 170vh;
  background: linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; 
  box-sizing: border-box;
  gap: 24px;
}

.content-container {
  flex: 1;
  max-width: 500px; 
  text-align: left;
  /* padding: 20px; */
}


.image-container {
  flex: 1;
  max-width: 500px; 
  display: flex;
  justify-content: center;
}

img {
  max-width: 100%;
  height: auto;
}


@media (max-width: 768px) {
  .backgroundColor {
    flex-direction: column; 
  }

  .content-container {
    text-align: center; 
    margin-bottom: 20px; 
  }

  .image-container {
    margin-top: 20px;
  }
}
</style>
