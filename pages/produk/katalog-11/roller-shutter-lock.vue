<template>
  <div class="bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li><RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink></li>
          <li>/</li>
          <li><RouterLink to="/produk/flush-handle" class="hover:underline text-black font-medium">Flush Handle</RouterLink></li>
          <li>/</li>
          <li class="text-black font-semibold">Roller Shutter Lock</li>
        </ol>
      </nav>

      <!-- Product Section -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Roller Shutter Lock</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Handle 41054 adalah handle aluminium elegan dengan desain modern dan kKunci Tengah Manual Glatino dirancang untuk pintu rana rol dengan sistem penguncian praktis dan aman. Ringan, ramah pengguna, serta cocok untuk penggunaan tugas berat.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="text-sm sm:text-base">Brand: Glatino</p>
            <p class="text-sm sm:text-base">Jenis: Kunci Tengah Rana Rol Manual</p>
            <p class="text-sm sm:text-base">Material: Baja + Aksesoris</p>
            <p class="text-sm sm:text-base">Kelengkapan: 2 Kunci & Aksesoris (batang datar baja tidak termasuk)</p>
            <p class="text-sm sm:text-base">Pemasangan: Menggunakan paku keling pada bilah pintu</p>
            <p class="text-sm sm:text-base">Kompatibilitas: Sebagian besar pintu rana rol</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-roller-shutter-lock-center-lock-material-aluminium-anti-karat-harga-terjangkau-1730973244951267054?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Roller-Shutter-Lock-Center-lock-Material-Aluminium-Anti-Karat-i.1442585495.28577349970?sp_atk=20c44abf-2e82-4eaf-a674-204be013d5d0&xptdk=20c44abf-2e82-4eaf-a674-204be013d5d0" target="_blank" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Galeri Gambar -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              alt="Gambar Produk"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Galeri Thumbnail -->
          <div class="grid grid-cols-3 gap-4 w-full">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="selectedImage = image"
              class="rounded-xl cursor-pointer border-2"
              :class="{
                'border-red-600': selectedImage === image,
                'border-transparent': selectedImage !== image
              }"
            />
          </div>
        </div>
      </div>

      <!-- Dimensi Produk -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran 41054"
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
            :to="`/produk/katalog-11/${item.slug}`"
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
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Galeri Gambar
import gambar1 from '/asset/product/flush-handle/roller-shutter-lock/gambar-1.png'
import gambar2 from '/asset/product/flush-handle/roller-shutter-lock/gambar-2.png'
import gambar3 from '/asset/product/flush-handle/roller-shutter-lock/gambar-3.png'

// Gambar ukuran
import ukuranHitam from '/asset/product/flush-handle/roller-shutter-lock/ukuran-hitam.png'
// import ukuranPutih from '/asset/product/flush-handle/roller-shutter-lock/ukuran-putih.png' // Jika diperlukan

const images = [gambar1, gambar2, gambar3]
const selectedImage = ref(images[0])
const ukuranImage = ukuranHitam

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
{ slug: 'zinc', name: 'Set zinc', image: '/asset/product/flush-handle/zinc.png' },
  { slug: 'alumunium', name: 'Set aluminium', image: '/asset/product/flush-handle/alumunium.png' },
  { slug: 'ss-201', name: 'SS 201', image: '/asset/product/flush-handle/ss-201.png' },
  // { slug: 'roller-shutter-lock', name: 'Set roller shutter', image: '/asset/product/flush-handle/roller-shutter-lock.png' },
  { slug: 'handle-swing', name: 'Handle Swing', image: '/asset/product/flush-handle/handle-swing.png' },
  { slug: 'handle-bambu', name: 'Set Handle Bambu', image: '/asset/product/flush-handle/handle-bambu.png' },
];
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
