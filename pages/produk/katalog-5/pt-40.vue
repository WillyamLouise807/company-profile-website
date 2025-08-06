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
            <RouterLink to="/produk/patch-fitting" class="hover:underline text-black font-medium">Patch Fitting</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">PT-40</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Patch Fitting PT-40</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Patch Fitting Glatino merupakan solusi praktis dan kokoh untuk sistem pemasangan kaca pada pintu, jendela, atau partisi. Dengan berbagai tipe yang tersedia, patch fitting ini dirancang untuk memberikan kekuatan, kestabilan, dan tampilan estetis pada instalasi kaca.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Jenis: Patch Fitting</p>
            <p class="capitalize text-sm sm:text-base">Tipe: PT-40 (Angle)</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Patch-Fitting-Alat-Penghubung-Kaca-Bahan-Aluminium-All-Type-PT10-PT24-i.1442585495.26274110618?sp_atk=b81d3124-174e-4d1a-b086-04b56f27c935&xptdk=b81d3124-174e-4d1a-b086-04b56f27c935" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar Produk -->
        <div class="flex justify-center items-center w-full">
          <img
            src="/asset/product/patch-fitting/pt-40/produk.png"
            alt="Patch Fitting PT-40"
            class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
          />
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-40">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            src="/asset/product/patch-fitting/pt-40/ukuran-hitam.png"
            alt="Ukuran Patch Fitting PT-40"
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
            src="/asset/product/patch-fitting/pt-40/ukuran-hitam.png"
            alt="Zoomed Ukuran Patch Fitting PT-40"
            class="w-full object-contain"
          />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4 sm:px-6 lg:px-8">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-5/${item.slug}`"
            class="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
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
  { slug: 'pt-10', name: 'Set PT-10', image: '/asset/product/patch-fitting/pt-10.png' },
  { slug: 'pt-20', name: 'Set PT-20', image: '/asset/product/patch-fitting/pt-20.png' },
  { slug: 'pt-24', name: 'Set PT-24', image: '/asset/product/patch-fitting/pt-24.png' },
  { slug: 'pt-30', name: 'Set PT-30', image: '/asset/product/patch-fitting/pt-30.png' },
  // { slug: 'pt-40', name: 'Set PT-40', image: '/asset/product/patch-fitting/pt-40.png' },
  { slug: 'pt-50', name: 'Set PT-50', image: '/asset/product/patch-fitting/pt-50.png' }
];
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
