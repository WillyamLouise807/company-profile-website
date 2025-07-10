<template>
  <header class="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50 text-[13px] sm:text-sm md:text-base">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="/assets/Header Navbar/company_logo.png" alt="Logo" class="w-10 h-10 object-contain" />
        <span class="font-bold text-sm sm:text-base md:text-lg text-red-600">PT Global Bestindo Jaya</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-4 font-medium text-[13px] sm:text-sm md:text-base">
        <NuxtLink
          to="/"
          @click.prevent="scrollToTop"
          :class="[activeSection === 'home' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/"
          @click.prevent="scrollToAbout"
          :class="[activeSection === 'about' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          About
        </NuxtLink>
        <NuxtLink to="/product" class="hover:text-red-500" exact-active-class="text-red-600 font-bold" @click="closeMenus">Product</NuxtLink>
        <NuxtLink to="/team" class="hover:text-red-500" exact-active-class="text-red-600 font-bold" @click="closeMenus">Team</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-red-500" exact-active-class="text-red-600 font-bold" @click="closeMenus">Contact</NuxtLink>

        <!-- Online Store Dropdown (Desktop) -->
        <div class="relative" @click="toggleStoreDropdown">
          <button class="ml-4 bg-red-700 hover:bg-red-800 text-white px-3 py-2 rounded-md transition font-semibold flex items-center text-sm md:text-base">
            Online Store
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-if="showStoreDropdown"
            class="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50"
          >
            <a href="https://shopee.co.id/glatino.official" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
              Shopee
            </a>
            <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
              Tokopedia
            </a>
          </div>
        </div>
      </nav>

      <!-- Mobile menu toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-white focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-black px-4 pb-4 space-y-2 text-sm">
      <NuxtLink
        to="/"
        class="block"
        @click.prevent="scrollToTop"
        :class="[activeSection === 'home' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/"
        class="block"
        @click.prevent="scrollToAbout"
        :class="[activeSection === 'about' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        About
      </NuxtLink>
      <NuxtLink to="/product" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold" @click="closeMenus">Product</NuxtLink>
      <NuxtLink to="/team" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold" @click="closeMenus">Team</NuxtLink>
      <NuxtLink to="/contact" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold" @click="closeMenus">Contact</NuxtLink>

      <!-- Online Store Dropdown (Mobile) -->
      <div class="relative">
        <button
          @click="toggleStoreDropdown"
          class="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md mt-2 text-center font-semibold flex justify-between items-center"
        >
          Online Store
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="showStoreDropdown" class="bg-white text-black rounded-md shadow mt-2">
          <a href="https://shopee.co.id/glatino.official" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
            Shopee
          </a>
          <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" class="block px-4 py-2 hover:bg-gray-100">
            Tokopedia
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <slot />
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const isOpen = ref(false)
const showStoreDropdown = ref(false)
const activeSection = ref('home')
const route = useRoute()
const router = useRouter()

const toggleStoreDropdown = () => {
  showStoreDropdown.value = !showStoreDropdown.value
}

const closeMenus = () => {
  isOpen.value = false
  showStoreDropdown.value = false
}

const scrollToTop = () => {
  closeMenus()
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

const scrollToAbout = () => {
  closeMenus()
  if (route.path === '/') {
    const about = document.getElementById('about-gbj')
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const about = document.getElementById('about-gbj')
        if (about) {
          about.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    })
  }
}

const handleScroll = () => {
  const about = document.getElementById('about-gbj')
  const scrollPos = window.scrollY + window.innerHeight / 2

  if (route.path === '/') {
    if (about && scrollPos >= about.offsetTop) {
      activeSection.value = 'about'
    } else {
      activeSection.value = 'home'
    }
  }
}

onMounted(() => {
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll)
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
