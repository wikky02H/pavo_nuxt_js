<template>
  <div class="basic-5 lg:bg-cover lg:bg-center">
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
      <div class="mb-16 lg:mb-0 order-1 lg:order-none">
        <img src="../public/download/smartphone.png" alt="alternative" />
      </div>

      <div
        class="lg:mt-24 xl:mt-44 xl:ml-12 order-2 lg:order-none lg:text-left"
      >
        <p class="mb-9 text-gray-800 text-3xl leading-10">
          {{ getDetailContent(8, 'download').value.contentTitle }}
        </p>
        <div class="social-icons">
          <a href="#apple" class="download-btn apple-btn">
            <i class="fab fa-apple mr-2 text-xl"></i>
            Download
          </a>

          <a href="#android" class="download-btn android-btn">
            <i class="fab fa-google-play mr-2 text-base"></i>
            Download
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { usePageContent } from '~/composables/usePageContent'
    const { getDetailContent } = usePageContent()
</script>

<style scoped>
.basic-5 {
  padding-top: 4.5rem;
  padding-bottom: 7.5rem;
  background-size: cover;
  text-align: center;
  background: none;
}

@media (min-width: 1024px) {
  .basic-5 {
    background: url(../public/download/backgroundImage.jpg) center center
      no-repeat;
    background-position: 50%;
    background-size: cover;
  }
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 44px;
  border-radius: 40px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.android-btn {
  background-color: #eb427e;
  color: #fff;
  border: 1px solid #eb427e;
}

.android-btn:hover {
  background-color: transparent;
  color: #eb427e;
}

.apple-btn {
  background-color: #4f46e5;
  color: #fff;
  border: 1px solid #4f46e5;
}

.apple-btn:hover {
  background-color: transparent;
  color: #4f46e5;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 1024px) {
  .basic-5 {
    background: none;
  }
}

@media (max-width: 768px) {
  .social-icons {
    justify-content: center;
    gap: 8px; /* Reduce gap for smaller screens */
  }

  .download-btn {
    padding: 0.6rem 32px; /* Adjust padding for smaller buttons */
    font-size: 12px;
  }

  .apple-btn,
  .android-btn {
    font-size: 14px; /* Adjust font size */
  }
}

@media (max-width: 480px) {
  .download-btn {
    padding: 0.5rem 24px; /* Smaller padding for very small screens */
    font-size: 11px;
  }

  .apple-btn,
  .android-btn {
    font-size: 13px; /* Smaller font size on very small screens */
  }
}
</style>
