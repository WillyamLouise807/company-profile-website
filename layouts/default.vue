<template>
  <header class="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50 text-xs sm:text-sm md:text-base font-poppins">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2 min-w-0">
        <img src="/assets/Header Navbar/company_logo.png" alt="Logo" class="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
        <span class="font-bold truncate text-red-600 text-xs sm:text-sm md:text-base lg:text-lg">
          PT Global Bestindo Jaya
        </span>
      </NuxtLink>

      <!-- Desktop/Tablet Menu -->
      <nav class="hidden sm:flex flex-wrap items-center space-x-2 sm:space-x-4 font-medium text-xs sm:text-sm md:text-base">
        <NuxtLink
          to="/"
          @click.prevent="scrollToTop"
          :class="[activeSection === 'home' && route.path === '/' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/"
          @click.prevent="scrollToAbout"
          :class="[activeSection === 'about' && route.path === '/' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          About Us
        </NuxtLink>
        <NuxtLink
          to="/product"
          @click="closeMenus"
          :class="[route.path.startsWith('/product') || route.path.startsWith('/produk') ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          Product
        </NuxtLink>
        <NuxtLink
          to="/team"
          @click="closeMenus"
          :class="[route.path === '/team' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          Team
        </NuxtLink>
        <NuxtLink
          to="/contact"
          @click="closeMenus"
          :class="[route.path === '/contact' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
        >
          Contact
        </NuxtLink>

        <!-- Online Store Dropdown -->
        <div class="relative" @click="toggleStoreDropdown">
          <button class="ml-2 bg-red-700 hover:bg-red-800 text-white px-3 py-2 rounded-md transition font-semibold flex items-center text-xs sm:text-sm md:text-base">
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

      <!-- Burger Menu Toggle (Mobile only) -->
      <button @click="isOpen = !isOpen" class="sm:hidden text-white focus:outline-none">
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

    <!-- Mobile Menu (only visible on small screens) -->
    <div v-if="isOpen" class="sm:hidden bg-black px-4 pb-4 space-y-2 text-sm">
      <NuxtLink
        to="/"
        class="block"
        @click.prevent="scrollToTop"
        :class="[activeSection === 'home' && route.path === '/' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/"
        class="block"
        @click.prevent="scrollToAbout"
        :class="[activeSection === 'about' && route.path === '/' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        About Us
      </NuxtLink>
      <NuxtLink
        to="/product"
        class="block"
        @click="closeMenus"
        :class="[route.path.startsWith('/product') || route.path.startsWith('/produk') ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        Product
      </NuxtLink>
      <NuxtLink
        to="/team"
        class="block"
        @click="closeMenus"
        :class="[route.path === '/team' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        Team
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="block"
        @click="closeMenus"
        :class="[route.path === '/contact' ? 'text-red-600 font-bold' : 'hover:text-red-500']"
      >
        Contact
      </NuxtLink>

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
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
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
      nextTick(() => {
        const interval = setInterval(() => {
          const about = document.getElementById('about-gbj')
          if (about) {
            about.scrollIntoView({ behavior: 'smooth' })
            clearInterval(interval)
          }
        }, 100)
        setTimeout(() => clearInterval(interval), 2000)
      })
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

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>