<template>
  <div>
    <nav v-if="!isMenuOpen" class="flex">
      <nuxt-link
        to="#home"
        :class="[
          activeLink === 'home' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] lg:p-[10px]',
        ]"
        @click="setActiveLink('home')"
      >
        {{ getLinkText('Home', 12) }}
      </nuxt-link>
      <nuxt-link
        to="#features"
        :class="[
          activeLink === 'features' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] lg:p-[10px]',
        ]"
        @click="setActiveLink('features')"
      >
        <!-- Features -->
        {{ getLinkText('Features', 13) }}
      </nuxt-link>
      <nuxt-link
        to="#details"
        :class="[
          activeLink === 'details' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] lg:p-[10px]',
        ]"
        @click="setActiveLink('details')"
      >
        {{ getLinkText('Details', 14) }}
      </nuxt-link>
      <nuxt-link
        to="#pricing"
        :class="[
          activeLink === 'pricing' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
          'text-[14px] font-semibold transition-colors duration-[800ms] ease-in-out hover:text-[#ff6e84] lg:p-[10px]',
        ]"
        @click="setActiveLink('pricing')"
      >
        <!-- Pricing -->
        {{ getLinkText('Pricing', 15) }}
      </nuxt-link>

      <div class="relative">
        <a
          href="#"
          :class="[
            activeLink === 'drop' ? 'text-[#ff6e84]' : 'text-[#6b747b]',
            'dropdown-toggle text-[14px] font-semibold transition-colors duration-300 ease-in-out hover:text-[#ff6e84] flex items-center space-x-1 lg:p-[10px]',
          ]"
          @click="toggleDropdown"
        >
          {{ getLinkText('Drop', 16) }}
          <!-- <img
            src="../assets/images/downArrow1.svg"
            class="h-3 text-[#ff6e84] ml-1"
            alt="Dropdown Arrow"
          /> -->
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
          <!-- <div class="dropdown-divider my-1 bg-gray-200"></div> -->
          <nuxt-link
            to="#terms"
            class="block px-4 py-2 text-[#6b747b] hover:text-[#ff6e84] whitespace-nowrap"
          >
            Terms & Conditions
          </nuxt-link>
          <!-- <div class="dropdown-divider my-1 bg-gray-200"></div> -->
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
          'text-[14px] font-semibold hover:text-[#ff6e84] transition-colors duration-[800ms] ease-in-out lg:p-[10px]',
        ]"
        @click="setActiveLink('download')"
      >
        {{ getLinkText('Download', 17) }}
      </nuxt-link>

      <!-- <div class="social-icons flex space-x-3 mt-[-1px] lg:p-[13px]">
        <a
          href="#apple"
          class="fab fa-apple text-[4px] cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>
        <a
          href="#android"
          class="fab fa-android text-xs cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        >
      </a>
      </div> -->
      <span class="social-icons flex gap-2 items-center lg:ml-[14px]">
        <a
          href="#apple"
          class="fab fa-apple !text-[1.3rem] cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
        ></a>

        <a
          href="#android"
          class="fab fa-android !text-[1.3rem] cursor-pointer text-indigo-600 hover:text-[#ff6e84]"
          style="font-size: 14px"
        ></a>
      </span>
    </nav>

    <div
      v-if="isMenuOpen"
      class="fixed top-[49px] ld:top-[50px] right-0 w-full h-full bg-[#f1f9fc] z-20 shadow-lg transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-full': !isMenuOpen }"
    >
      <div class="flex flex-col items-start pt-4 pr-0 pb-0 pl-5 space-y-[12px]">
        <nuxt-link
          to="#home"
          :class="[
            'text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold',
          ]"
          @click="closeMenuAndSetActiveLink('home')"
        >
          {{ getLinkText('Home', 12) }}
        </nuxt-link>
        <nuxt-link
          to="#features"
          :class="[
            'text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold',
          ]"
          @click="closeMenuAndSetActiveLink('features')"
        >
          {{ getLinkText('Features', 13) }}
        </nuxt-link>
        <nuxt-link
          to="#details"
          :class="[
            'text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold',
          ]"
          @click="closeMenuAndSetActiveLink('details')"
        >
          {{ getLinkText('Details', 14) }}
        </nuxt-link>
        <nuxt-link
          to="#pricing"
          :class="[
            'text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold',
          ]"
          @click="closeMenuAndSetActiveLink('pricing')"
        >
          {{ getLinkText('Pricing', 15) }}
        </nuxt-link>
        <nuxt-link
          to="#download"
          :class="[
            'text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold',
          ]"
          @click="closeMenuAndSetActiveLink('download')"
        >
          {{ getLinkText('Download', 17) }}
        </nuxt-link>

        <div class="flex items-center">
          <a
            href="#"
            class="text-[#6b747b] hover:text-[#ff6e84] text-[14px] font-semibold flex items-center space-x-1"
            @click="toggleDropdown"
          >
            <span>{{ getLinkText('Drop', 16) }}</span>
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

      <div class="flex items-center">
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
    </div>

    <div class="lg:hidden fixed top-2 right-4 z-30">
      <img
        src="../public/navbar/download.svg"
        alt="Hamburger Menu"
        @click="toggleMenu"
        class="cursor-pointer bg-center bg-[length:100%_100%] w-6 h-8"
      />
    </div>
    <!-- <div>
      <a
        href="#home"
        v-show="showScrollToTop"
        @click.prevent="scrollToTop"
        class="fixed bottom-3 right-2 bg-[rgb(52,62,72)] p-2 rounded-full shadow-md hover:bg-black transition-colors duration-300 flex items-center justify-center"
      >
        <img src="/features/up-arrow.png" alt="Up Arrow" class="upArrow" />
      </a>
    </div> -->
    <div>
      <a
        href="#home"
        v-show="showScrollToTop"
        @click.prevent="scrollToTop"
        class="fixed bottom-[0.75rem] right-3 bg-[rgb(52,62,72)] p-3 rounded-full shadow-md hover:bg-black transition-colors duration-300 flex items-center justify-center w-[2.65rem] h-[2.6rem]"
      >
        <img src="/features/up-arrow.png" alt="Up Arrow" class="upArrow" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { GetMenuListApi } from '~/services/home'
import type { TMenus } from '~/types/api-data-type'
import { getMenusData } from '~/utils/common'

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
  GetMenuListData()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const HeaderList = ref<TMenus[]>([])

async function GetMenuListData() {
  const { data = null, status = 500 } = await GetMenuListApi()

  if (status == 200) {
    HeaderList.value = getMenusData(data)
  } else {
    HeaderList.value = []
  }
}
const getLinkText = (name: string, id: number) => {
  return computed(() => {
    return HeaderList.value.length > 0 &&
      HeaderList.value.some((item) => item.name === name && item.id === id)
      ? name
      : name
  })
}
</script>

<style scoped>
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
  color: #ff6e84;
}
.upArrow {
  width: 100%;
  height: 95%;
  object-fit: contain;
}
a[v-show='showScrollToTop'] {
  display: block;
  width: 50px;
  height: 50px;
}
a[v-show='showScrollToTop']:hover {
  background-color: #ff1d60;
}
@media (max-width: 1024px) {
  .social-icons {
    gap: 12;
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
.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: '';
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
</style>
