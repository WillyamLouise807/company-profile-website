<template>
  <header class="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <img src="C:\Users\Admin\company-profile-website\assets\Header Navbar\company_logo.png" alt="Logo" class="w-10 h-10 object-contain" />
        <span class="font-bold text-sm sm:text-base md:text-lg text-red-600">PT Global Bestindo Jaya</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-6 font-medium">
        <NuxtLink to="/" class="hover:text-red-500" exact-active-class="text-red-600 font-bold">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-red-500" exact-active-class="text-red-600 font-bold">About</NuxtLink>
        <NuxtLink to="/product" class="hover:text-red-500" exact-active-class="text-red-600 font-bold">Product</NuxtLink>
        <NuxtLink to="/team" class="hover:text-red-500" exact-active-class="text-red-600 font-bold">Team</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-red-500" exact-active-class="text-red-600 font-bold">Contact</NuxtLink>

        <!-- Shopee Button -->
        <a
          href="https://shopee.co.id/glatino.official?entryPoint=ShopBySearch&searchKeyword=glatino%20official"
          target="_blank"
          rel="noopener"
          class="ml-4 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition font-semibold"
        >
          Online Store
        </a>
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
    <div v-if="isOpen" class="md:hidden bg-black px-4 pb-4 space-y-2">
      <NuxtLink to="/" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold">Home</NuxtLink>
      <NuxtLink to="/about" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold">About</NuxtLink>
      <NuxtLink to="/product" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold">Product</NuxtLink>
      <NuxtLink to="/team" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold">Team</NuxtLink>
      <NuxtLink to="/contact" class="block hover:text-red-500" exact-active-class="text-red-600 font-bold">Contact</NuxtLink>
      <a
        href="https://shopee.co.id/glatino.official?entryPoint=ShopBySearch&searchKeyword=glatino%20official"
        target="_blank"
        rel="noopener"
        class="block bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md mt-2 text-center font-semibold"
      >
        Online Store
      </a>
    </div>
  </header>

  <!-- Main Content: padding top untuk offset fixed header -->
  <main class="">
    <slot />
  </main>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
