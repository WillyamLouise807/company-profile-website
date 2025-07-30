<template>
  <div class="bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/engsel-casement" class="hover:underline text-black font-medium">Engsel Casement</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Nylon</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Engsel Nylon</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Engsel Casement Glatino berbahan nylon dirancang untuk memberikan kemudahan dalam membuka dan menutup jendela atau pintu dengan lancar dan aman. Tersedia dalam ukuran 8 inch hingga 24 inch, cocok digunakan untuk berbagai jenis kusen dan desain interior.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: Engsel Casement</p>
            <p class="capitalize text-sm sm:text-base">Material: Nylon</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: 8” - 24”</p>
            <p class="capitalize text-sm sm:text-base">Penggunaan: Jendela dan Pintu Aluminium / Kayu</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Engsel-CasementPro-Material-Nylon-Series-Steel-Penyangga-Jendela-Pintu-430-i.1442585495.28173482764?sp_atk=0cb135e7-f7d2-4550-b151-44b2bbfd45f8&xptdk=0cb135e7-f7d2-4550-b151-44b2bbfd45f8" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar Produk -->
        <div class="flex justify-center items-center w-full">
          <img
            src="@/assets/product/engsel-casement/nylon/produk.png"
            alt="Patch Fitting nylon"
            class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
          />
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 nylon">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            src="@/assets/product/engsel-casement/nylon/ukuran-hitam.png"
            alt="Ukuran Patch Fitting nylon"
            class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
            @click="toggleZoom"
          />
          <p class="text-sm text-gray-500 mt-4 text-center">*Gambar hanya ilustrasi ukuran secara proporsional</p>
        </div>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            src="@/assets/product/engsel-casement/nylon/ukuran-hitam.png"
            alt="Zoomed Ukuran Patch Fitting nylon"
            class="w-full object-contain"
          />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <NuxtLink
              v-for="item in katalogLinks"
              :key="item.slug"
              :to="`/produk/katalog-7/${item.slug}`"
              class="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden w-40 sm:w-44"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-32 object-contain mx-auto transition-transform duration-300 group-hover:scale-105 bg-white"
              />
              <div class="bg-gray-50 text-center py-4 px-2">
                <div class="text-red-600 font-semibold text-sm">{{ item.name }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/footer.vue'
import { ref } from 'vue'

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  // { slug: 'nylon', name: 'Nylon', image: new URL('@/assets/product/engsel-casement/nylon.png', import.meta.url).href },
  { slug: 'kuningan', name: 'Kuningan', image: new URL('@/assets/product/engsel-casement/kuningan.png', import.meta.url).href },
  { slug: '2-profile', name: '2 Profile', image: new URL('@/assets/product/engsel-casement/2-profile.png', import.meta.url).href },
];
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
