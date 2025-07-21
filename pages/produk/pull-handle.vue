<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-black"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-white text-sm opacity-80 pt-20 sm:pt-28 md:pt-36">
          <NuxtLink to="/product" class="hover:underline">Product</NuxtLink> / <span>Pull Handle</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-white transform -translate-y-6 ">
            <h1 class="text-2xl sm:text-3xl font-semibold leading-relaxed mb-6">Pull Handle Series</h1>
            <p class="text-lg">Koleksi handle tarik berkualitas tinggi dengan desain ergonomis dan bahan tahan lama untuk berbagai jenis pintu.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Produk dalam Kategori -->
      <section class="py-16 px-4 sm:px-6 lg:px-12 bg-black">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-2xl font-bold mb-8 text-center text-white">Produk Pull Handle</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div 
              v-for="(product, index) in floorHingeProduts"
              :key="index"
              class="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg hover:shadow-red-900/50 transition transform hover:scale-[1.02]"
            >
              <img 
                :src="product.image" 
                :alt="product.name" 
                class="w-full h-64 object-contain p-4"
              />
              <div class="p-6 text-white">
                <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
                <p class="text-gray-400 mb-4">{{ product.description }}</p>
                <NuxtLink 
                  :to="`/produk/katalog-6/${product.slug}`"
                  class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex items-center"
                >
                  Detail Produk
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>   
  <FooterComponent />
</template>

<script lang="ts" setup>
// PERBAIKAN IMPORT GAMBAR
import bgImage from '@/assets/product/pull-handle/pull-handle-banner.png';
import FooterComponent from '@/components/footer.vue'

const floorHingeProduts = [
  {
    id: 1,
    name: "Handle C",
    description: "Set Engsel lantai Material Aluminium Anti Karat",
    slug: "handle-c",
    image: new URL('@/assets/product/pull-handle/handle-c.png', import.meta.url).href
  },
  {
    id: 2,
    name: "Handle P",
    description: "Set Engsel lantai Material Aluminium Anti Karat",
    slug: "handle-p",
    image: new URL('@/assets/product/pull-handle/handle-p.png', import.meta.url).href
  },
  // {
  //   id: 3,
  //   name: "PT-24",
  //   description: "Set Engsel lantai Material Aluminium Anti Karat",
  //   slug: "pt-24",
  //   image: new URL('@/assets/product/pull-handle/pt-24.png', import.meta.url).href
  // },
  // {
  //   id: 4,
  //   name: "PT-30",
  //   description: "Set Engsel lantai Material Aluminium Anti Karat",
  //   slug: "pt-30",
  //   image: new URL('@/assets/product/pull-handle/pt-30.png', import.meta.url).href
  // },
  // {
  //   id: 5,
  //   name: "PT-40",
  //   description: "Set Engsel lantai Material Aluminium Anti Karat",
  //   slug: "pt-40",
  //   image: new URL('@/assets/product/pull-handle/pt-40.png', import.meta.url).href
  // },
  // {
  //   id: 6,
  //   name: "PT-50",
  //   description: "Set Engsel lantai Material Aluminium Anti Karat",
  //   slug: "pt-50",
  //   image: new URL('@/assets/product/pull-handle/pt-50.png', import.meta.url).href
  // },
]
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>