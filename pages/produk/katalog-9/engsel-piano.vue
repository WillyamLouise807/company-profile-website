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
            <RouterLink to="/produk/alumunium-lock" class="hover:underline text-black font-medium">Alumunium Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Engsel Piano</li>
        </ol>
      </nav>

      <!-- Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Engsel Piano</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Engsel panjang model piano, cocok untuk aplikasi yang memerlukan sambungan lurus dan stabil. 
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Ukuran: 1.8 m</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: Engsel Piano</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-engsel-piano-stainlees-bahan-aluminium-premium-anti-karat-panjang-180-cm-1730968751764768494?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Engsel-Piano-Stainlees-Panjang-180Cm-Material-Aluminium-i.1442585495.28576388144?sp_atk=a02b44e0-8c98-4413-b894-ebb4ed8287e0&xptdk=a02b44e0-8c98-4413-b894-ebb4ed8287e0https://shopee.co.id/Glatino-Engsel-Piano-Stainlees-Panjang-180Cm-Material-Aluminium-i.1442585495.28576388144?sp_atk=a02b44e0-8c98-4413-b894-ebb4ed8287e0&xptdk=a02b44e0-8c98-4413-b894-ebb4ed8287e0" target="_blank" rel="noopener noreferrer">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="activeImage"
              :src="activeImage"
              :alt="isOpen ? 'Engsel Terbuka' : 'Engsel Tertutup'"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Tombol toggle gambar -->
          <div class="flex gap-4">
            <button
              class="px-4 py-2 border rounded-lg text-sm font-medium"
              :class="{
                'bg-red-600 text-white border-red-600': isOpen,
                'border-gray-300 hover:border-gray-600': !isOpen
              }"
              @click="isOpen = true"
            >
              Terbuka
            </button>
            <button
              class="px-4 py-2 border rounded-lg text-sm font-medium"
              :class="{
                'bg-red-600 text-white border-red-600': !isOpen,
                'border-gray-300 hover:border-gray-600': isOpen
              }"
              @click="isOpen = false"
            >
              Tertutup
            </button>
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Dimensi"
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
          <img :src="ukuranImage" alt="Zoomed Ukuran" class="w-full object-contain" />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4 sm:px-6 lg:px-8">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-9/${item.slug}`"
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
import { ref, computed } from 'vue'

const imageTerbuka = new URL('/asset/product/alumunium-lock/engsel-piano/terbuka.png', import.meta.url).href
const imageTertutup = new URL('/asset/product/alumunium-lock/engsel-piano/tertutup.png', import.meta.url).href
const ukuranImage = new URL('/asset/product/alumunium-lock/engsel-piano/ukuran-hitam.png', import.meta.url).href

const isOpen = ref(true)
const isZoomOpen = ref(false)

const activeImage = computed(() => (isOpen.value ? imageTerbuka : imageTertutup))

const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
  { slug: 'a7', name: 'A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: '/asset/product/alumunium-lock/butt-hinge-h.png' },
  // { slug: 'engsel-piano', name: 'Engsel Piano', image: '/asset/product/alumunium-lock/engsel-piano.png' },
  { slug: 'engsel-salon', name: 'Engsel Salon', image: '/asset/product/alumunium-lock/engsel-salon.png' }
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>