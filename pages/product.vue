<template>
  <!-- Hero Section -->
  <section class="relative w-full h-screen flex items-center justify-center text-center overflow-hidden font-poppins">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-[-2]"></div>
    <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-[#1A1A1A]"></div>

    <!-- Text Content -->
    <div class="relative z-10 px-4 max-w-4xl text-white font-poppins">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
        Produk-produk Glatino dirancang untuk menghadirkan keamanan dan kenyamanan maksimal bagi rumah dan bangunan modern.
      </h1>
      <button
        @click="scrollToProduct"
        class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition">
        See More
      </button>
    </div>
  </section>

  <!-- Product Catalog -->
  <div id="product-catalog">
    <section class="bg-[#1A1A1A] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-black rounded-xl overflow-hidden shadow-md flex flex-col items-center pb-6 transition transform hover:scale-[1.02]"
          >
            <img :src="product.logo" alt="Logo" class="h-20 w-auto mt-4 mb-2" />
            <div class="w-full px-4">
              <img :src="product.image" :alt="product.title" class="w-full max-h-64 object-contain mx-auto" />
            </div>
            <div class="text-center px-4 mt-4">
              <h3 class="text-lg text-white font-bold">{{ product.title }}</h3>
              <p class="text-sm text-white">{{ product.description }}</p>

              <!-- 🟢 Link ke halaman detail -->
              <NuxtLink
                 :to="`/product/${product.slug}`"
                class="mt-4 bg-red-600 text-white text-sm px-5 py-2 rounded-full hover:bg-red-800 transition inline-block"
              >
                Product List
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <FooterComponent />
</template>

<script setup lang="ts">
import bgImage from '@/assets/product/bg-awal.jpg'
import FooterComponent from '../components/footer.vue'

const scrollToProduct = () => {
  const el = document.getElementById('product-catalog')
  el?.scrollIntoView({ behavior: 'smooth' })
}

const products = [
  {
    title: 'Door Lock',
    description: 'View all Door Lock products',
    slug: 'door-lock',
    image: new URL('@/assets/product/Door-Lock.png', import.meta.url).href,
    logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
    route: '/product/door-lock',
  },
  {
    title: 'Smart Lock',
    description: 'View all Smart Lock products',
    slug: 'smart-lock',
    image: new URL('@/assets/product/Door-Lock.png', import.meta.url).href,
    logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  },
  {
    title: 'Smart Home',
    description: 'View all Smart Home products',
    slug: 'smart-home',
    image: new URL('@/assets/product/Door-Lock.png', import.meta.url).href,
    logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  },
]
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
