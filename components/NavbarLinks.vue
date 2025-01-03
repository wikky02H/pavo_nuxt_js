<template>
  <div>
    <nav v-if="!isMenuOpen" class="flex space-x-1 lg:pt-[10px]">
      <nuxt-link
        to="#home"
        :class="[
          activeLink === 'home' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] lg:px-[0.6]',
        ]"
        @click="setActiveLink('home')"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="#features"
        :class="[
          activeLink === 'features' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5 lg:px-3.5',
        ]"
        @click="setActiveLink('features')"
      >
        Features
      </nuxt-link>
      <nuxt-link
        to="#details"
        :class="[
          activeLink === 'details' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5 lg:px-0',
        ]"
        @click="setActiveLink('details')"
      >
        Details
      </nuxt-link>
      <nuxt-link
        to="#pricing"
        :class="[
          activeLink === 'pricing' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5 lg:px-3.5',
        ]"
        @click="setActiveLink('pricing')"
      >
        Pricing
      </nuxt-link>

      <div class="relative">
        <a
          href="#"
          :class="[
            activeLink === 'drop' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
            'text-[14px] font-semibold transition-colors duration-300 ease-in-out hover:text-[#ff6e84] px-2.5 flex items-center space-x-1 lg:px-0',
          ]"
          @click="toggleDropdown"
        >
          Drop
          <img
            src="../assets/images/downArrow1.svg"
            class="w-4 h-3 text-[#ff6e84] pt-[1px]"
            alt="Dropdown Arrow"
          />
        </a>
        <div
          v-if="dropdownOpen"
          class="dropdown-menu absolute bg-[#f1f9fc] shadow-lg rounded-lg mt-2 w-48 align-middle border border-gray-300 lg:px-3.5"
          :style="{ top: 'calc(100% + 4px)', left: 0 }"
        >
          <nuxt-link
            to="#article"
            class="block px-4 py-2 text-[#6b747b] hover:text-[#ff6e84] whitespace-nowrap"
          >
            Article Details
          </nuxt-link>
          <div class="dropdown-divider my-1 bg-gray-200"></div>
          <nuxt-link
            to="#terms"
            class="block px-4 py-2 text-[#6b747b] hover:text-[#ff6e84] whitespace-nowrap"
          >
            Terms & Conditions
          </nuxt-link>
          <div class="dropdown-divider my-1 bg-gray-200"></div>
          <nuxt-link
            to="#privacy"
            class="block px-4 py-2 text-[#6b747b] hover:text-[#ff6e84] whitespace-nowrap"
          >
            Privacy Policy
          </nuxt-link>
        </div>
      </div>

      <nuxt-link
        to="#download"
        :class="[
          activeLink === 'download' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold hover:text-[#ff6e84] transition-colors duration-[800ms] ease-in-out px-2.5 lg:px-3.5',
        ]"
        @click="setActiveLink('download')"
      >
        Download
      </nuxt-link>

      <div class="social-icons ml-5 flex space-x-3.5 mt-[-1px] lg:px-2.5">
        <a
          href="#apple"
          class="fab fa-apple text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
        <a
          href="#android"
          class="fab fa-android text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
      </div>
    </nav>

    <div
      v-if="isMenuOpen"
      class="fixed top-[49px] ld:top-[50px] right-0 w-full h-full bg-white z-20 shadow-lg transform transition-transform duration-300 ease-in-out segoeUIFont"
      :class="{ 'translate-x-full': !isMenuOpen }"
    >
      <div class="flex flex-col items-start pt-4 pr-0 pb-0 pl-5 space-y-[12px]">
        <nuxt-link
          to="#home"
          :class="['text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold']"
          @click="closeMenuAndSetActiveLink('home')"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="#features"
          :class="['text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold']"
          @click="closeMenuAndSetActiveLink('features')"
        >
          Features
        </nuxt-link>
        <nuxt-link
          to="#details"
          :class="['text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold']"
          @click="closeMenuAndSetActiveLink('details')"
        >
          Details
        </nuxt-link>
        <nuxt-link
          to="#pricing"
          :class="['text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold']"
          @click="closeMenuAndSetActiveLink('pricing')"
        >
          Pricing
        </nuxt-link>
        <nuxt-link
          to="#download"
          :class="['text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold']"
          @click="closeMenuAndSetActiveLink('download')"
        >
          Download
        </nuxt-link>

        <div class="flex items-center">
          <a
            href="#"
            class="text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold flex items-center space-x-1"
            @click="toggleDropdown"
          >
            <span>Drop</span>
            <img
              src="../assets/images/downArrow1.svg"
              class="w-4 h-3 text-[#6b747b] hover:text-[#ff6e84] pt-[1px]"
              alt="Dropdown Arrow"
            />
          </a>
        </div>
        <div v-if="dropdownOpen">
          <div
            class="dropdown-menu absolute bg-[#f1f9fc] shadow-lg rounded-lg mt-2 w-24 align-middle border border-gray-300"
          >
            <nuxt-link
              to="#article"
              class="block px-4 py-1 text-[#6b747b] text-[14px] hover:text-[#ff6e84] whitespace-nowrap"
            >
              Article Details
            </nuxt-link>
            <div class="dropdown-divider my-0 bg-gray-200"></div>
            <nuxt-link
              to="#terms"
              class="block px-4 py-0.5 text-[#6b747b] text-[14px] hover:text-[#ff6e84] whitespace-nowrap"
            >
              Terms & Conditions
            </nuxt-link>
            <div class="dropdown-divider my-0.5 bg-gray-200"></div>
            <nuxt-link
              to="#privacy"
              class="block px-4 py-[4px] text-[#6b747b] text-[14px] hover:text-[#ff6e84] whitespace-nowrap"
            >
              Privacy Policy
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="dropdownOpen" class="social-icons ml-5 flex space-x-4 pt-24">
        <a
          href="#apple"
          class="fab fa-apple text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
        <a
          href="#android"
          class="fab fa-android text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
      </div>
      <div v-if="!dropdownOpen" class="social-icons ml-5 flex space-x-4 pt-4">
        <a
          href="#apple"
          class="fab fa-apple text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
        <a
          href="#android"
          class="fab fa-android text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
      </div>
    </div>

    <div class="lg:hidden fixed top-2 right-4 z-30">
      <img
        src="../public/navbar/download.svg"
        alt="Hamburger Menu"
        @click="toggleMenu"
        class="cursor-pointer bg-center bg-[length:100%_100%] w-6 h-8"
      />
    </div>
    <div>
      <a
        href="#home"
        v-show="showScrollToTop"
        @click.prevent="scrollToTop"
        class="fixed bottom-6 right-6 bg-[rgb(52,62,72)] p-3 rounded-full shadow-md hover:bg-black transition-colors duration-300 flex items-center justify-center"
      >
        <img src="/features/up-arrow.png" alt="Up Arrow" class="upArrow" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  activeLink: String,
  dropdownOpen: Boolean,
})

const emit = defineEmits(['setActiveLink', 'toggleDropdown'])
const isMenuOpen = ref(false)
const showScrollToTop = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setActiveLink = (link: string) => {
  emit('setActiveLink', link)
}

const toggleDropdown = () => {
  emit('toggleDropdown')
}
const closeMenuAndSetActiveLink = (link: string) => {
  isMenuOpen.value = false
  setActiveLink(link)
}
const handleScroll = () => {
  if (window.scrollY > window.innerHeight * 1.5) {
    showScrollToTop.value = true
  } else {
    showScrollToTop.value = false
  }
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Same as before */
@media (max-width: 950px) {
  nav {
    display: none;
  }

  .dropdown-menu {
    width: 100%;
    max-width: 200px;
    align-items: center;
    text-align: left;
  }
}

.dropdown-divider {
  border-top: 1px solid gray;
}

.social-icons a {
  font-size: 1.5rem;
  color: #6366f1;
}

.social-icons a:hover {
  color: #ff6e84; /* Custom hover color */
}
.upArrow {
  width: 90%;
  height: 50%;
  object-fit: contain; /* Ensures the image scales to fit while maintaining aspect ratio */
}
a[v-show='showScrollToTop'] {
  display: block;
  width: 50px; /* Adjust size of the button */
  height: 50px; /* Adjust size of the button */
}
a[v-show='showScrollToTop']:hover {
  background-color: #ff1d60; /* Darker hover effect */
}
@media (max-width: 1024px) {
  .social-icons {
    /* margin-top: 1rem; */
    gap: 12;
    /* margin-left: 2rem; */
  }
}

.dropdown-menu {
  position: absolute;
  background-color: #f1f9fc;
  color: #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  z-index: 20;
}
.segoeUIFont {
  font-family: 'Segoe UI Semibold', sans-serif; /* Fallback to sans-serif */
}
</style>
