<template>
    <div>
      <!-- Normal Navbar for Desktop -->
      <nav v-if="!isMenuOpen" class="flex space-x-1">
        <router-link
          to="/"
          :class="[activeLink === 'home' ? 'text-[#ff6e84]' : 'text-gray-600', 'text-sm font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84]']"
          @click="setActiveLink('home')"
        >
          Home
        </router-link>
  
        <router-link
          to="/features"
          :class="[activeLink === 'features' ? 'text-[#ff6e84]' : 'text-gray-600', 'text-sm font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5']"
          @click="setActiveLink('features')"
        >
          Features
        </router-link>
        <router-link
          to="/details"
          :class="[activeLink === 'details' ? 'text-[#ff6e84]' : 'text-gray-600', 'text-sm font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5']"
          @click="setActiveLink('details')"
        >
          Details
        </router-link>
  
        <router-link
          to="/pricing"
          :class="[activeLink === 'pricing' ? 'text-[#ff6e84]' : 'text-gray-600', 'text-sm font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5']"
          @click="setActiveLink('pricing')"
        >
          Pricing
        </router-link>
  
        <div class="relative">
          <a
            href="#"
            :class="[activeLink === 'drop' ? 'text-[#ff6e84]' : 'text-gray-600', 'text-sm font-semibold transition-colors duration-300 ease-in-out hover:text-[#ff6e84] px-2.5 flex items-center space-x-1']"
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
            class="dropdown-menu absolute bg-[#f1f9fc] shadow-lg rounded-lg mt-2 w-48 align-middle"
          >
            <router-link
              to="/article"
              class="block px-4 py-2 text-gray-600 hover:text-[#ff6e84] whitespace-nowrap"
            >
              Article Details
            </router-link>
            <div class="dropdown-divider my-1 bg-gray-200"></div>
            <router-link
              to="/terms"
              class="block px-4 py-2 text-gray-600 hover:text-[#ff6e84] whitespace-nowrap"
            >
              Terms & Conditions
            </router-link>
            <div class="dropdown-divider my-1 bg-gray-200"></div>
            <router-link
              to="/privacy"
              class="block px-4 py-2 text-gray-600 hover:text-[#ff6e84] whitespace-nowrap"
            >
              Privacy Policy
            </router-link>
          </div>
        </div>
  
        <router-link
          to="/download"
          :class="[activeLink === 'download' ? 'text-[#ff6e84]' : 'text-gray-600', 'text-sm font-semibold hover:text-[#ff6e84] transition-colors duration-[800ms] ease-in-out px-2.5']"
          @click="setActiveLink('download')"
        >
          Download
        </router-link>
  
        <!-- Social Icons Section -->
        <div class="social-icons ml-5 flex space-x-4">          <a
            href="#apple"
            class="fab fa-apple text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
          ></a>
          <a
            href="#android"
            class="fab fa-android text-xl cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
          ></a>
        </div>
      </nav>
  
      <!-- Hamburger Menu for Mobile -->
      <div
        v-if="isMenuOpen"
        class="fixed top-[50px] right-0 w-full h-full bg-white z-20 shadow-lg transform transition-transform duration-300 ease-in-out"
        :class="{'translate-x-full': !isMenuOpen}"
      >
        <div class="flex flex-col items-start p-6 space-y-4">
          <router-link
            to="/home"
            :class="['text-[#ff6e84] text-lg font-semibold']"
            @click="setActiveLink('home')"
          >
            Home
          </router-link>
          <router-link
            to="/features"
            :class="['text-[#ff6e84] text-lg font-semibold']"
            @click="setActiveLink('features')"
          >
            Features
          </router-link>
          <router-link
            to="/details"
            :class="['text-[#ff6e84] text-lg font-semibold']"
            @click="setActiveLink('details')"
          >
            Details
          </router-link>
          <router-link
            to="/pricing"
            :class="['text-[#ff6e84] text-lg font-semibold']"
            @click="setActiveLink('pricing')"
          >
            Pricing
          </router-link>
          <router-link
            to="/download"
            :class="['text-[#ff6e84] text-lg font-semibold']"
            @click="setActiveLink('download')"
          >
            Download
          </router-link>
          <div class="flex ">
            <a
            href="#"
            class="text-[#ff6e84] text-lg font-semibold"
            @click="toggleDropdown"
          >
            Drop
          </a>
          </div>
          <div v-if="dropdownOpen">
            <router-link to="/article" class="text-gray-600">Article Details</router-link>
            <router-link to="/terms" class="text-gray-600">Terms & Conditions</router-link>
            <router-link to="/privacy" class="text-gray-600">Privacy Policy</router-link>
          </div>
        </div>
  
        <!-- Social Icons Section for Mobile -->
        <div class="social-icons ml-5 flex space-x-4 mt-6">
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
  
      <!-- Hamburger Icon -->
      <div class="lg:hidden fixed top-2 right-4 z-30">
        <img
          src="../public/navbar/download.svg"
          alt="Hamburger Menu"
          @click="toggleMenu"
          class="cursor-pointer bg-center bg-[length:100%_100%] w-6 h-8"
        />
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
  
  const isMenuOpen = ref(false) // This controls the mobile menu visibility
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const setActiveLink = (link: string) => {
    emit('setActiveLink', link)
  }
  
  const toggleDropdown = () => {
    emit('toggleDropdown')
  }
  </script>
  
  <style scoped>
  @media (max-width: 1024px) {
    nav {
      display: none; 
    }
  
    .dropdown-menu {
      width: 100%;
      max-width: 200px;
    }
  }

  .dropdown-menu {
    background-color: #f1f9fc;
    /* background-color: rgba(197, 234, 249, 1); */
    color: #e5e7eb;
    border-radius: 8px;
    width: max-content;
    min-width: 170px;
    font-size: 15px;
    font-weight: 500;
  }
  
  .dropdown-divider {
    border-top: 1px solid gray;
  }
  
  /* Social Icons */
  .social-icons a {
    font-size: 1.5rem;
    color: #6366f1; /* Tailwind's indigo color */
  }
  
  .social-icons a:hover {
    color: #ff6e84; /* Custom hover color */
  }
  
  @media (max-width: 1024px) {
    .social-icons {
      margin-top: 1rem;
    }
  }
  </style>
  