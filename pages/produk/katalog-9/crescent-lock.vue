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
            <RouterLink to="/produk/alumunium-lock" class="hover:underline text-black font-medium">Aluminium Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Crescent Lock</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Crescent Lock</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino Crescent Lock provides additional security for your windows. Made from high-quality aluminum, it's available in a variety of colors to match your home's aesthetic.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <p class="capitalize text-sm sm:text-base">Color: {{ selectedColorLabel }}</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Pilihan Warna -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedColorLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Pilihan Warna -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="group cursor-pointer text-center border rounded-xl p-3 transition hover:shadow-md"
              :class="{
                'ring-2 ring-red-600 border-red-600': selectedColor === color.name,
                'border-gray-700': selectedColor !== color.name
              }"
              @click="selectColor(color)"
            >
              <div class="w-8 h-8 mx-auto rounded-full border" :style="{ backgroundColor: color.hex }" />
              <p class="text-xs mt-2 font-medium capitalize group-hover:text-red-600">
                {{ color.label }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- DIMENSI (DIUBAH: 2 GAMBAR) -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
          Product Dimensions
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="/asset/product/alumunium-lock/crescent-lock/ukuran-1.png"
            alt="Ukuran Crescent Lock 1"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                   w-full sm:w-3/4 md:w-1/2 
                   h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/alumunium-lock/crescent-lock/ukuran-1.png')"
          />
          <img
            src="/asset/product/alumunium-lock/crescent-lock/ukuran-2.png"
            alt="Ukuran Crescent Lock 2"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                   w-full sm:w-3/4 md:w-1/2 
                   h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/alumunium-lock/crescent-lock/ukuran-2.png')"
          />
        </div>

        <p class="text-sm text-gray-500 mt-4 text-center">
          *Image is only an illustration of the product dimensions
        </p>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="closeZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img :src="zoomImage" alt="Zoomed" class="w-full object-contain" />
        </div>
      </div>

      <!-- Link Produk Lain -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">
          SEE OUR OTHER PRODUCT IN THIS CATALOG
        </h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 px-4 sm:px-6 lg:px-8">
            <NuxtLink
              v-for="item in katalogLinks"
              :key="item.slug"
              :to="`/produk/katalog-9/${item.slug}`"
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
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

import beige from '/asset/product/alumunium-lock/crescent-lock/beige.png'
import cokelat from '/asset/product/alumunium-lock/crescent-lock/cokelat.png'
import hitam from '/asset/product/alumunium-lock/crescent-lock/hitam.png'
import putih from '/asset/product/alumunium-lock/crescent-lock/putih.png'
import silver from '/asset/product/alumunium-lock/crescent-lock/silver.png'

const colors = [
  { name: 'beige', label: 'Beige', hex: '#171D2B', image: beige },
  { name: 'cokelat', label: 'Brown', hex: '#BDB080', image: cokelat },
  { name: 'hitam', label: 'Black', hex: '#1f1f1f', image: hitam },
  { name: 'putih', label: 'White', hex: '#ffffff', image: putih },
  { name: 'silver', label: 'Silver', hex: '#D3E1E3', image: silver }
]

const selectedColor = ref(colors[0]!.name)
const selectedImage = computed(() => colors.find(c => c.name === selectedColor.value)?.image || '')
const selectedColorLabel = computed(() => colors.find(c => c.name === selectedColor.value)?.label || '')

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
}

// Zoom logic (KHUSUS DIMENSI)
const isZoomOpen = ref(false)
const zoomImage = ref('')

function openZoom(image: string) {
  zoomImage.value = image
  isZoomOpen.value = true
}

function closeZoom() {
  isZoomOpen.value = false
}

const katalogLinks = [
  { slug: 'casement-lock', name: 'Casement Lock', image: '/asset/product/alumunium-lock/casement-lock.png'},
  // { slug: 'crescent-lock', name: 'Crescent Lock', image: '/asset/product/alumunium-lock/crescent-lock.png'},
  { slug: 'a7', name: 'Sliding Lock A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'zinc', name: 'Flush Handle  zinc', image: '/asset/product/alumunium-lock/zinc.png' },
  { slug: 'alumunium', name: 'Flush Handle  Aluminium', image: '/asset/product/alumunium-lock/alumunium.png' },
  { slug: 'ss-201', name: 'Flush Handle 201', image: '/asset/product/alumunium-lock/ss-201.png' },
  { slug: 'flushbolt', name: 'Flush Handle Flushbolt', image: '/asset/product/alumunium-lock/flushbolt.png' }, 
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: '/asset/product/alumunium-lock/butt-hinge-h.png' },
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
  // { slug: 'engsel-piano', name: 'Engsel Piano', image: '/asset/product/alumunium-lock/engsel-piano.png' },
  // { slug: 'engsel-salon', name: 'Engsel Salon', image: '/asset/product/alumunium-lock/engsel-salon.png' },
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
