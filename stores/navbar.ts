// stores/navbar.ts
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    activeLink: 'home',
    dropdownOpen: false,
  }),
  actions: {
    setActiveLink(link: string) {
      this.activeLink = link;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
})
