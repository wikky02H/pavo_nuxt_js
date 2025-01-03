<template>
  <div
    :class="['navbar', { scrolled: isScrolled }]"
    class="flex justify-between items-center fixed left-0 right-0 p-2 pt-[1.6rem] bg-transparent z-10 w-full transition-all ease-in-out"
  >
    <div class="navbar-img lg:pl-2 lg:pt-[4px]">
      <img src="../assets/images/navbarLogo.png" alt="Logo" class="h-8" />
    </div>
    <div class="flex items-center mr-20 lg:mr-[4.2rem]">
      <NavbarLinks
        :activeLink="navbarStore.activeLink"
        :dropdownOpen="navbarStore.dropdownOpen"
        @setActiveLink="setActiveLink"
        @toggleDropdown="toggleDropdown"
      />
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavbarStore } from '../stores/navbar'
import NavbarLinks from './NavbarLinks.vue'

const navbarStore = useNavbarStore()

const isScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

const setActiveLink = (link: string) => {
  navbarStore.setActiveLink(link)
}

const toggleDropdown = () => {
  navbarStore.toggleDropdown()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #f1f9fc;
}
.navbar-img{
  /* ml-14; */
  margin-left: 72px;
  vertical-align: middle;
}
@media (max-width: 1024px) {
  .navbar {
      background-color: #f1f9fc;
      padding:8px 0 8px 0;
  }
  .navbar-img{
    margin-left: 32px;
    vertical-align: middle;
  }
}
</style>
