<template>
  <!-- Hero Section -->
  <section class="relative w-full h-screen overflow-hidden font-poppins">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>
    <div class="absolute inset-0 bg-white/70 backdrop-blur-md z-[-2]"></div>
    <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

    <!-- Container -->
    <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
      <!-- Main Content -->
      <div class="flex-grow flex items-center justify-center text-center">
        <div class="max-w-2xl mx-auto text-red-800">
          <h1 class="text-2xl sm:text-3xl font-semibold leading-relaxed mb-6">
            Produk-produk Glatino dirancang untuk menghadirkan keamanan dan kenyamanan maksimal bagi rumah dan bangunan modern.
          </h1>

          <!-- Badges -->
          <div class="flex gap-4 justify-center items-center mb-6">
            <img src="/assets/index/badge-premium.png" class="w-16 h-16" />
            <img src="/assets/index/badge-best.png" class="w-16 h-16" />
            <img src="/assets/index/badge-10years.png" class="w-16 h-16" />
          </div>

          <button
            @click="scrollToProduct"
            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Product Catalog -->
  <div id="product-catalog">
    <section class="bg-white text-black py-16 px-4 sm:px-6 lg:px-12 font-poppins">
      <div class="max-w-full mx-auto">
        <h2 class="text-2xl font-bold mb-10 text-center text-red-700">Kategori Produk</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center pb-6 transition transform hover:scale-[1.02]"
          >
            <img :src="product.logo" alt="Logo" class="h-14 mt-4 mb-2" />
            <div class="w-full px-4">
              <img :src="product.image" :alt="product.title" class="w-full max-h-60 object-contain mx-auto" />
            </div>
            <div class="text-center px-4 mt-4">
              <h3 class="text-lg font-bold text-red-700">{{ product.title }}</h3>
              <p class="text-sm text-gray-600">{{ product.description }}</p>

              <NuxtLink
                :to="'/produk/' + product.slug"
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
  },
  {
    title: 'Mortise Lock',
    description: 'View all Mortise Lock products',
    slug: 'mortise-lock',
    image: new URL('@/assets/product/mortise-lock.png', import.meta.url).href,
    logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  },
  // {
  //   title: 'Cylinder',
  //   description: 'View all Cylinder products',
  //   slug: 'cylinder',
  //   image: new URL('@/assets/product/cylinder.png', import.meta.url).href,
  //   logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  // },
  // {
  //   title: 'Floor Hinge',
  //   description: 'View all Floor Hinge products',
  //   slug: 'floor-hinge',
  //   image: new URL('@/assets/product/floor-hinge.png', import.meta.url).href,
  //   logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  // },
  // {
  //   title: 'Patch Fitting',
  //   description: 'View all Patch Fitting products',
  //   slug: 'patch-fitting',
  //   image: new URL('@/assets/product/patch-fitting.png', import.meta.url).href,
  //   logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  // },
  {
    title: 'Pull Handle',
    description: 'View all Pull Handle products',
    slug: 'pull-handle',
    image: new URL('@/assets/product/patch-fitting.png', import.meta.url).href,
    logo: new URL('@/assets/product/GLATINO - RED - LOGO.png', import.meta.url).href,
  },
]
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
