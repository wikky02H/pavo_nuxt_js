<template>
  <div
    :class="['navbar', isScrolled ? 'scrolled' : 'fixed-top top-nav-collapse']"
    class="fixed left-0 right-0 pt-[1.6rem] bg-transparent z-10 transition-all ease-in-out flex justify-center"
  >
    <div
      class="container px-4 sm:px-8 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap w-full"
    >
      <div
        class="navbar-img inline-block text-xl whitespace-nowrap hover:no-underline focus:no-underline"
      >
        <img
          src="../assets/images/navbarLogo.png"
          alt="Logo"
          class="h-[2rem]"
        />
      </div>

      <div>
        <div class="flex items-left">
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
    </div>
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
@media (min-width: 1024px) {
  .navbar.top-nav-collapse {
    padding-top: 1.45rem;
    padding-bottom: 0.5rem;
    background: rgba(197, 234, 249, 1);
  }
}

.navbar {
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding-top: 0.2rem !important;
  padding-bottom: 0.2rem !important;
  background-color: #f1f9fc;
}
.navbar-img {
  vertical-align: middle;
}
@media (max-width: 1024px) {
  .navbar {
    background-color: transparent;
    flex-wrap: nowrap;
    justify-content: start;
    padding-left: 0;
    padding-right: 0;
    padding-top: 1.75rem;
  }
  .navbar-img {
    margin-left: 32px;
    vertical-align: middle;
  }
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  .navbar {
    position: relative;
    background-color: #f1f9fc;
    padding: 0.5rem 1rem;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 0.75rem;
    transition: all 0.2s ease;
  }
  @media (max-width: 768px) {
    .navbar {
      position: fixed;
    }
  }
}
</style>
