<template>
  <!-- Hero Section Kategori -->
  <section class="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-[-2]"></div>
    <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-[#1A1A1A]"></div>

    <div class="relative z-10 px-4 max-w-4xl text-white">
      <h1 class="text-2xl sm:text-4xl font-bold mb-4">Door Lock Series</h1>
      <p class="text-lg">Koleksi lengkap kunci pintu premium dengan teknologi terkini</p>
    </div>
  </section>

  <!-- Daftar Produk dalam Kategori -->
    <section class="py-16 px-4 sm:px-6 lg:px-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-bold mb-8 text-center">Produk Door Lock</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in doorLockProducts"
            :key="index"
            class="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-red-900/50 transition-all"
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
                :to="`/produk/${product.slug}`"
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
</template>

<script lang="ts" setup>
// PERBAIKAN IMPORT GAMBAR
import bgImage from '@/assets/product/door-lock/door-lock-banner.jpg';

// Gambar Jenis Produk - ada 9
import doorLock201 from '@/assets/product/door-lock/201.png';
import doorLock202 from '@/assets/product/door-lock/202.png';

const doorLockProducts = [
  {
    id: 1,
    name: "Mortise Lock GL-201",
    description: "Kunci pintu dengan sistem mortise tingkat tinggi",
    slug: "mortise-lock-gl200",
    image: doorLock201
  },
  {
    id: 2,
    name: "Digital Smart Lock 202",
    description: "Kunci digital dengan fitur fingerprint dan PIN",
    slug: "smart-lock-x5",
    image: doorLock202
  },
  {
    id: 3,
    name: "Cylinder Lock Pro",
    description: "Kunci silinder dengan keamanan tingkat tinggi",
    slug: "cylinder-lock-pro",
    image: new URL('@/assets/product/door-lock/cylinder-lock.jpg', import.meta.url).href
  },
  {
    id: 4,
    name: "Handle Lock Series",
    description: "Gagang pintu dengan sistem penguncian terintegrasi",
    slug: "handle-lock-series",
    image: new URL('@/assets/product/door-lock/handle-lock.jpg', import.meta.url).href
  },
  {
    id: 5,
    name: "Multi-point Locking System",
    description: "Sistem penguncian multi titik untuk keamanan maksimal",
    slug: "multi-point-lock",
    image: new URL('@/assets/product/door-lock/multi-point.jpg', import.meta.url).href
  },
  {
    id: 6,
    name: "Smart Lock WiFi Edition",
    description: "Kontrol pintu melalui smartphone dari mana saja",
    slug: "smart-lock-wifi",
    image: new URL('@/assets/product/door-lock/smart-wifi.jpg', import.meta.url).href
  }
]
</script>

<style>

</style>