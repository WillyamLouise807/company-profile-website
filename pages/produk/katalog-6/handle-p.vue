<template>
  <div class="bg-black">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-white">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-white font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/pull-handle" class="hover:underline text-white font-medium">Pull Handle</RouterLink>
          </li>
          <li>/</li>
          <li class="text-white font-semibold">Handle C</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle C</h1>
          <p class="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
            Pull Handle Glatino Model C hadir dengan desain ergonomis dan finishing stainless yang elegan. Cocok digunakan pada pintu aluminium, kaca, maupun kayu, handle ini menawarkan kemudahan penggunaan serta tampilan yang rapi dan modern.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ sizeLabels[selectedSize] }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Finishing Stainless</p>
            <p class="capitalize text-sm sm:text-base">Model: Pull Handle Type C</p>
            <p class="capitalize text-sm sm:text-base">Kelengkapan: 1 Pasang Handle, Baut Panjang, Kunci L</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-[#1a1a1a]"
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
          <div class="flex flex-wrap gap-4 mt-4 justify-center">
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'px-4 py-2 border rounded-lg text-sm font-semibold',
                selectedSize === size
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
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
            src="@/assets/product/pull-handle/handle-c/ukuran-putih.png"
            alt="Dimensi Handle C"
            class="rounded-xl shadow-md max-w-md w-full bg-[#1a1a1a] p-4 cursor-zoom-in"
            @click="zoomImage(ukuranImage)"
          />
        </div>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-[#111] p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
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

// Import semua gambar kombinasi warna & ukuran
import hitam25 from '@/assets/product/pull-handle/handle-c/hitam-25.png'
import hitam321 from '@/assets/product/pull-handle/handle-c/hitam-321.png'
import hitam322 from '@/assets/product/pull-handle/handle-c/hitam-322.png'
import hitam323 from '@/assets/product/pull-handle/handle-c/hitam-323.png'
import hitam324 from '@/assets/product/pull-handle/handle-c/hitam-324.png'

import putih25 from '@/assets/product/pull-handle/handle-c/putih-25.png'
import putih321 from '@/assets/product/pull-handle/handle-c/putih-321.png'
import putih322 from '@/assets/product/pull-handle/handle-c/putih-322.png'
import putih323 from '@/assets/product/pull-handle/handle-c/putih-323.png'
import putih324 from '@/assets/product/pull-handle/handle-c/putih-324.png'

import sn25 from '@/assets/product/pull-handle/handle-c/sn-ss-25.png'
import sn321 from '@/assets/product/pull-handle/handle-c/sn-ss-321.png'
import sn322 from '@/assets/product/pull-handle/handle-c/sn-ss-322.png'
import sn323 from '@/assets/product/pull-handle/handle-c/sn-ss-323.png'
import sn324 from '@/assets/product/pull-handle/handle-c/sn-ss-324.png'

import ukuranImage from '@/assets/product/pull-handle/handle-c/ukuran-putih.png'

const colors = [
  {
    name: 'hitam',
    label: 'Hitam',
    hex: '#1f1f1f',
    images: {
      '25': hitam25,
      '321': hitam321,
      '322': hitam322,
      '323': hitam323,
      '324': hitam324
    }
  },
  {
    name: 'putih',
    label: 'Putih',
    hex: '#eeeeee',
    images: {
      '25': putih25,
      '321': putih321,
      '322': putih322,
      '323': putih323,
      '324': putih324
    }
  },
  {
    name: 'sn',
    label: 'SN/SS',
    hex: '#cccccc',
    images: {
      '25': sn25,
      '321': sn321,
      '322': sn322,
      '323': sn323,
      '324': sn324
    }
  }
]

const sizes = ['25', '321', '322', '323', '324'] as const
const selectedColor = ref(colors[0].name)
const selectedSize = ref<typeof sizes[number]>('321')

const sizeLabels: Record<string, string> = {
  '25': '25 x 200 mm',
  '321': '32 x 300 mm',
  '322': '32 x 350 mm',
  '323': '32 x 400 mm',
  '324': '32 x 600 mm'
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