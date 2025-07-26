<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="absolute inset-0 bg-white/70 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-red-700 text-sm opacity-90 pt-36">
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-600">Cylinder</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Cylinder Series</h1>
            <p class="text-base sm:text-lg text-gray-700">
              Solusi kunci silinder inovatif yang dirancang untuk daya tahan, keamanan, dan kemudahan instalasi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Produk Cylinder -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Produk Cylinder</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in cylinderProducts"
            :key="index"
            class="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
          >
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-64 object-contain p-4 bg-white"
            />
            <div class="p-6 text-gray-800">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-sm text-gray-600 mb-4">{{ product.description }}</p>
              <NuxtLink 
                :to="`/produk/katalog-3/${product.slug}`"
                class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex items-center transition"
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

    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import bgImage from '@/assets/product/cylinder/cylinder-banner.png';
import FooterComponent from '@/components/footer.vue';

const cylinderProducts = [
  {
    id: 1,
    name: "CY65155",
    description: "Cylinder Pro Kunci Tabung Pengaman Material Aluminium",
    slug: "65155",
    image: new URL('@/assets/product/cylinder/65155.png', import.meta.url).href
  },
  {
    id: 2,
    name: "CY6515-ET",
    description: "Cylinder Pro Kunci Tabung Pengaman Material Aluminium",
    slug: "65155-et",
    image: new URL('@/assets/product/cylinder/65155-et.png', import.meta.url).href
  },
  {
    id: 3,
    name: "GLT-810",
    description: "Cylinder Pro Kunci Tabung Pengaman Material Aluminium",
    slug: "810",
    image: new URL('@/assets/product/cylinder/810.png', import.meta.url).href
  },
  {
    id: 4,
    name: "GLT-811",
    description: "Cylinder Pro Kunci Tabung Pengaman Material Aluminium",
    slug: "811",
    image: new URL('@/assets/product/cylinder/811.png', import.meta.url).href
  },
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
