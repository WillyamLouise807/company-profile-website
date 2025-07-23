<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/pull-handle" class="hover:underline text-black font-medium">Pull Handle</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Handle P</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle P</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Pull Handle Glatino Model C hadir dengan desain ergonomis dan finishing stainless yang elegan. Cocok digunakan pada pintu aluminium, kaca, maupun kayu, handle ini menawarkan kemudahan penggunaan serta tampilan yang rapi dan modern.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ sizeLabels[selectedSize] }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Finishing Stainless</p>
            <p class="capitalize text-sm sm:text-base">Model: Pull Handle Type P</p>
            <p class="capitalize text-sm sm:text-base">Kelengkapan: 1 Pasang Handle, Baut Panjang, Kunci L</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Pilihan -->
        <div class="space-y-6 flex flex-col items-center">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedColorLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Warna -->
          <div class="grid grid-cols-3 gap-4 w-full">
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

          <!-- Ukuran -->
          <div class="flex flex-wrap gap-4 mt-4 justify-start">
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'px-4 py-2 border rounded-lg text-sm font-semibold',
                selectedSize === size
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-gray-100 text-red-700 border-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ sizeLabels[size] }}
            </button>
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex justify-center">
          <img
            src="@/assets/product/pull-handle/handle-p/ukuran-hitam.png"
            alt="Dimensi Handle P"
            class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
            @click="zoomImage(currentUkuranImage)"
          />
        </div>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img :src="zoomedImage" alt="Zoomed" class="w-full object-contain" />
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

const currentUkuranImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.ukuran || ukuranHitam
})

// Import semua gambar kombinasi warna & ukuran
import hitam30 from '@/assets/product/pull-handle/handle-p/hitam-30.png'
import hitam35 from '@/assets/product/pull-handle/handle-p/hitam-35.png'
import hitam251 from '@/assets/product/pull-handle/handle-p/hitam-251.png'
import hitam252 from '@/assets/product/pull-handle/handle-p/hitam-252.png'

import putih30 from '@/assets/product/pull-handle/handle-p/putih-30.png'
import putih35 from '@/assets/product/pull-handle/handle-p/putih-35.png'
import putih251 from '@/assets/product/pull-handle/handle-p/putih-251.png'
import putih252 from '@/assets/product/pull-handle/handle-p/putih-252.png'

import sn30 from '@/assets/product/pull-handle/handle-p/sn-ss-30.png'
import sn35 from '@/assets/product/pull-handle/handle-p/sn-ss-35.png'
import sn251 from '@/assets/product/pull-handle/handle-p/sn-ss-251.png'
import sn252 from '@/assets/product/pull-handle/handle-p/sn-ss-252.png'

import ukuranHitam from '@/assets/product/pull-handle/handle-p/ukuran-hitam.png'
import ukuranPutih from '@/assets/product/pull-handle/handle-p/ukuran-putih.png'

const colors = [
  {
    name: 'hitam',
    label: 'Hitam',
    hex: '#1f1f1f',
    images: {
      '251': hitam251,
      '252': hitam252,
      '30': hitam30,
      '35': hitam35
    },
    ukuran: ukuranHitam
  },
  {
    name: 'putih',
    label: 'Putih',
    hex: '#eeeeee',
    images: {
      '251': putih251,
      '252': putih252,
      '30': putih30,
      '35': putih35
    },
    ukuran: ukuranPutih
  },
  {
    name: 'sn',
    label: 'SN/SS',
    hex: '#cccccc',
    images: {
      '251': sn251,
      '252': sn252,
      '30': sn30,
      '35': sn35
    },
    ukuran: ukuranHitam // pakai ukuran hitam juga untuk SN
  }
]

const sizes = ['251', '252', '30', '35'] as const
const selectedColor = ref(colors[0]?.name ?? '')
const selectedSize = ref<typeof sizes[number]>('252')

const sizeLabels: Record<string, string> = {
  '251': '25 x 300 mm',
  '252': '25 x 350 mm',
  '30': '30 x 300 mm',
  '35': '35 x 350 mm'
}

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

const selectedImage = computed(() => {
  const color = colors.find(c => c.name === selectedColor.value)
  return color?.images[selectedSize.value] || ''
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
}

const isZoomOpen = ref(false)
const zoomedImage = ref('')
function toggleZoom() {
  isZoomOpen.value = false
}
function zoomImage(src: string) {
  zoomedImage.value = src
  isZoomOpen.value = true
}
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