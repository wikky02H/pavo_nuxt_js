<template>
  <div
    class="navbar flex justify-between items-center fixed top-4 left-0 right-0 p-4 bg-transparent z-10 w-full"
  >
    <div class="ml-14">
      <img src="../assets/images/navbarLogo.png" alt="Logo" class="h-8" />
    </div>
    <div class="flex items-center space-x-6 mr-20">
      <nav class="flex space-x-1">
        <router-link
          to="/home"
          :class="navbarStore.activeLink === 'home' ? 'text-[#ff6e84]' : 'text-gray-600'"
          class="text-base font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84]"
          @click="navbarStore.setActiveLink('home')"
        >
          Home
        </router-link>
        <router-link
          to="/features"
          :class="navbarStore.activeLink === 'features' ? 'text-[#ff6e84]' : 'text-gray-600'"
          class="text-base font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5"
          @click="navbarStore.setActiveLink('features')"
        >
          Features
        </router-link>
        <router-link
          to="/details"
          :class="navbarStore.activeLink === 'details' ? 'text-[#ff6e84]' : 'text-gray-600'"
          class="text-base font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5"
          @click="navbarStore.setActiveLink('details')"
        >
          Details
        </router-link>
        <router-link
          to="/pricing"
          :class="navbarStore.activeLink === 'pricing' ? 'text-[#ff6e84]' : 'text-gray-600'"
          class="text-base font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] px-2.5"
          @click="navbarStore.setActiveLink('pricing')"
        >
          Pricing
        </router-link>

        <div class="relative">
          <a
            href="#"
            :class="navbarStore.activeLink === 'drop' ? 'text-[#ff6e84]' : 'text-gray-600'"
            class="text-sm font-semibold transition-colors duration-300 ease-in-out hover:text-[#ff6e84] px-2.5 flex items-center space-x-1"
            @click="navbarStore.toggleDropdown"
          >
            Drop
            <img
              src="../assets/images/downArrow1.svg"
              class="w-4 h-4 text-[#ff6e84]"
              alt="Dropdown Arrow"
            />
          </a>
          <div
            v-if="navbarStore.dropdownOpen"
            class="dropdown-menu absolute bg-transparent shadow-lg rounded-lg mt-2 w-48 align-middle"
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
          :class="navbarStore.activeLink === 'download' ? 'text-[#ff6e84]' : 'text-gray-600'"
          class="text-base font-semibold hover:text-[#ff6e84] transition-colors duration-[800ms] ease-in-out px-2.5"
          @click="navbarStore.setActiveLink('download')"
        >
          Download
        </router-link>
      </nav>

      <div class="social-icons ml-5 flex space-x-4">
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

    <button
      class="lg:hidden text-xl text-gray-400 hover:text-black"
      type="button"
      data-toggle="offcanvas"
    >
      <span
        class="navbar-toggler-icon inline-block w-8 h-8 align-middle"
      ></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useNavbarStore } from '../stores/navbar'
const navbarStore = useNavbarStore()

onMounted(() => {
  console.log('Component mounted')
  console.log(navbarStore.activeLink) // Log after the component is mounted
})
</script>
<style scoped>
.dropdown-menu {
  background-color: rgba(
    197,
    234,
    249,
    1
  ); /* Optional: Adjust this background color */
  color: #e5e7eb;
  border-radius: 8px;
  width: max-content;
  min-width: 170px; /* Adjust width as needed */
  font-size: 15px;
  font-weight: 500;
}

.dropdown-divider {
  border-top: 1px solid gray; /* Light gray divider */
}
/* shadow-md */
</style>
