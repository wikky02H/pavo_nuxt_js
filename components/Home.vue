<template>
  <div
    class="backgroundColor py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
  >
    <div
      class="container px-4 sm:px-8 lg:gap-x-8 gap-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center"
    >
      <div class="lg:!-mt-[0.2px]">
        <h1
          class="lg:-tracking-[0.5px] text-[2.75rem] lg:text-[3.125rem] font-bold !leading-[3.75rem] lg:mb-5 text-[#252C38]"
        >
          {{ getDetailContent(1, 'home').value.contentTitle }}
        </h1>
        <p
          class="text-[1.145rem] font-normal text-lg leading-7 text-[#6b747b] mb-8 lg:mr-10"
        >
          {{ getDetailContent(1, 'home').value.contentDescription }}
        </p>
        <div class="flex flex-col md:flex-row gap-3">
          <a
            href="#apple"
            class="flex gap-2 items-center justify-center px-10 py-3 bg-indigo-600 text-white rounded-[30px] text-lg cursor-pointer hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg border border-transparent transition-all duration-300 ease-in-out"
          >
            <i class="fab fa-apple"></i>
            Download
          </a>

          <a
            href="#android"
            class="flex gap-2 items-center justify-center px-10 py-3 bg-pink-500 text-white rounded-full text-lg cursor-pointer hover:bg-transparent hover:text-pink-500 hover:border-pink-500 border border-transparent transition-all duration-300 ease-in-out"
          >
            <i class="fab fa-google-play"></i>
            Download
          </a>
        </div>
      </div>

      <div class="xl:text-right">
        <img
          src="../assets/images/smartphone.png"
          alt="Smartphone Image"
          class="inline"
        />
      </div>
    </div>
  </div>
  <div class="container px-4 sm:px-8 pb-20 text-center lg:mt-[1rem]">
    <p
      class="text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto lg:mb-3"
    >
      {{ getDetailContent(2, 'home').value.contentDescription }}
    </p>
  </div>
</template>
<script setup lang="ts">
    import { usePageContent } from '~/composables/usePageContent'
    const { getDetailContent } = usePageContent()
</script>
<style scoped>
.backgroundColor {
  background: linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1));
}

img {
  max-width: 100%;
  height: auto;
}

.social-icons {
  display: flex;
  justify-content: left;
  gap: 16px;
}

@media (max-width: 768px) {
  .social-icons {
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .social-icons a {
    margin-left: 0 !important;
    margin-right: 0;
    width: 100%;
    max-width: 250px;
    margin: 0;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .social-icons {
    width: 100%;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .social-icons a {
    width: auto;
    max-width: 200px;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .social-icons {
    width: 100%;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }

  .social-icons a {
    width: auto;
    max-width: 220px;
  }
}
</style>
