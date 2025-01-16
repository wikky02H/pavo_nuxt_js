<template>
  <div
    class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:mt-[90.5px]"
  >
    <div class="lg:col-span-5">
      <div class="mb-16 lg:mb-0 xl:mt-16">
        <h2 class="mb-6 title1">
          {{ getDetailContent(3, 'details').value.contentTitle }}
        </h2>
        <p
          class="mb-4"
          v-for="(detail, index) in getDetailContent(3, 'details').value
            .contentDetailsList"
          :key="index"
        >
          {{ detail.contentDetailName }}
        </p>
      </div>
    </div>
    <div class="lg:col-span-7">
      <div class="xl:ml-14">
        <img
          class="inline"
          src="../public/details/detailsImg.jpg"
          alt="alternative"
        />
      </div>
    </div>
  </div>
  <div class="lg:py-[9.9rem] md:py-[8rem] py-10">
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div class="lg:col-span-7">
        <div class="mb-12 lg:mb-0 xl:mr-14">
          <img
            class="inline"
            src="../public/details/detailsImg1.jpg"
            alt="alternative"
          />
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="xl:mt-12">
          <h2 class="mb-6 title1">
            {{ getDetailContent(4, 'details').value.contentTitle }}
          </h2>
          <ul
            class="list mb-7 space-y-2 -mt-2"
            v-for="(detail, index) in getDetailContent(4, 'details').value
              .contentDetailsList"
            :key="index"
          >
            <li class="flex">
              <i
                class="fas fa-chevron-right lg:mt-[7px] lg:mr-1.5 text-[#594cda] text-xs"
              ></i>
              <div class="ml-2 md:mt-0 md:ml-0">
                {{ detail.contentDetailName }}
              </div>
            </li>
          </ul>
          <a
            class="btn-solid-reg popup-with-move-anim mr-1.5"
            href="#details-lightbox"
            >Lightbox</a
          >
          <a class="btn-outline-reg lg:ml-1" href="article.html">Details</a>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-16 pb-12 lg:pt-0">
    <div
      class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12 py-10 md:py-0"
    >
      <div class="lg:col-span-5">
        <div class="mb-16 lg:mb-0 xl:mt-24 lg:mb">
          <h2 class="mb-6 title1">
            {{ getDetailContent(5, 'details').value.contentTitle }}
          </h2>
          <p
            class="mb-4"
            v-for="(detail, index) in getDetailContent(5, 'details').value
              .contentDetailsList"
            :key="index"
          >
            {{ detail.contentDetailName }}
          </p>
        </div>
      </div>
      <div class="lg:col-span-7">
        <div class="ml-14">
          <img
            class="inline"
            src="../public/details/detailsImg2.jpg"
            alt="alternative"
          />
        </div>
      </div>
    </div>
  </div>
  <Statistics />
  <Slider />
</template>

<script setup lang="ts">
    import { usePageContent } from '~/composables/usePageContent'
    const { getDetailContent } = usePageContent()
</script>

<style scoped>
.text-container {
  flex: 1;
  max-width: 40%;
}
.title1 {
  color: #252c38;
  font-weight: 700;
  font-size: 2.125rem;
  line-height: 2.625rem;
  letter-spacing: -0.4px;
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
.btn-outline-reg {
  display: inline-block;
  padding: 1.375rem 2.25rem 1.375rem 2.25rem;
  border: 1px solid #252c38;
  border-radius: 32px;
  background-color: transparent;
  color: #252c38;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-solid-reg {
  display: inline-block;
  padding: 1.375rem 2.25rem 1.375rem 2.25rem;
  border: 1px solid #594cda;
  border-radius: 32px;
  background-color: #594cda;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 0;
  text-decoration: none;
  transition: all 0.2s;
}
@media (max-width: 1024px) {
  .text-container {
    max-width: 100%;
    text-align: left;
  }

  .image-container {
    max-width: 100%;
    text-align: center;
  }

  .flex.items-center {
    justify-content: flex-start;
  }

  .ml-1 {
    margin-left: 0;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-32,
  .w-28 {
    width: 100%;
    max-width: 200px;
  }

  .h-11 {
    height: 40px;
  }
  .text-sm {
    font-size: 0.875rem;
  }
}
</style>
