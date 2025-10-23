<template>
  <div class="bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li><RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink></li>
          <li>/</li>
          <li><RouterLink to="/produk/alumunium-lock" class="hover:underline text-black font-medium">Alumunium Lock</RouterLink></li>
          <li>/</li>
          <li class="text-black font-semibold">41066</li>
        </ol>
      </nav>

      <!-- Product Section -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Handle 41066</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Handle 41066 adalah handle aluminium elegan dengan desain modern dan kokoh. Cocok untuk berbagai kebutuhan pintu dan jendela aluminium.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="text-sm sm:text-base">Model: 41066</p>
            <p class="text-sm sm:text-base">Material: Aluminium</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-set-kunci-pintu-aluminium-premium-sliding-door-swing-door-aluminium-anti-karat-1730966994543478510?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Set-Kunci-Pintu-Sliding-Door-Swing-Door-Material-Aluminium-i.1442585495.27276513651?sp_atk=adecdcc1-92bc-4781-b6a2-42acd1950a45&xptdk=adecdcc1-92bc-4781-b6a2-42acd1950a45" target="_blank" class="hover:scale-105 transition-transform">
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
          <div class="grid grid-cols-4 gap-4">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="selectedImage = image"
              class="rounded-xl cursor-pointer border-2 h-48"
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
            alt="Ukuran 41066"
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
import FooterComponent from '@/components/footer.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Galeri Gambar
import gambar1 from '/asset/product/alumunium-lock/41066/gambar-1.png'
import gambar2 from '/asset/product/alumunium-lock/41066/gambar-2.png'
import gambar3 from '/asset/product/alumunium-lock/41066/gambar-3.png'
import gambar4 from '/asset/product/alumunium-lock/41066/gambar-4.png'

// Gambar ukuran
import ukuranHitam from '/asset/product/alumunium-lock/41066/ukuran-hitam.png'
// import ukuranPutih from '/asset/product/alumunium-lock/41066/ukuran-putih.png' // Jika diperlukan

const images = [gambar1, gambar2, gambar3, gambar4]
const selectedImage = ref(images[0])
const ukuranImage = ukuranHitam

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  // { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
  { slug: 'a7', name: 'A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: '/asset/product/alumunium-lock/butt-hinge-h.png' },
  { slug: 'engsel-piano', name: 'Engsel Piano', image: '/asset/product/alumunium-lock/engsel-piano.png' },
  { slug: 'engsel-salon', name: 'Engsel Salon', image: '/asset/product/alumunium-lock/engsel-salon.png' }
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
