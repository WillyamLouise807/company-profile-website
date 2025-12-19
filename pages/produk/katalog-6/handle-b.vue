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
            <RouterLink to="/produk/pull-handle" class="hover:underline text-black font-medium">Pull Handle</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Pull Handle Bulat</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle Bulat</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Pull Handle Glatino Model B dirancang dengan bentuk ergonomis dan material aluminium finishing stainless. Handle ini cocok digunakan untuk berbagai jenis pintu kaca, aluminium maupun kayu dengan tampilan elegan dan kekuatan maksimal.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ sizeLabels[selectedSize] }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Finishing Stainless</p>
            <p class="capitalize text-sm sm:text-base">Model: Pull Handle Type B</p>
            <p class="capitalize text-sm sm:text-base">Kelengkapan: 1 Pasang Handle, Baut Panjang, Kunci L</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
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
          <div class="grid grid-cols-3 w-full gap-4 mt-4 justify-start">
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
            src="/asset/product/pull-handle/handle-b/ukuran-hitam.png"
            alt="Dimensi Handle B"
            class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
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
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img :src="zoomedImage" alt="Zoomed" class="w-full object-contain" />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4 sm:px-6 lg:px-8">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-6/${item.slug}`"
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
import { ref, computed } from 'vue'

import ukuranImage from '/asset/product/pull-handle/handle-b/ukuran-hitam.png'

import hitam321 from '/asset/product/pull-handle/handle-b/hitam-321.png'
import hitam322 from '/asset/product/pull-handle/handle-b/hitam-322.png'
import hitam323 from '/asset/product/pull-handle/handle-b/hitam-323.png'
import hitam324 from '/asset/product/pull-handle/handle-b/hitam-324.png'
import hitam325 from '/asset/product/pull-handle/handle-b/hitam-325.png'
import hitam326 from '/asset/product/pull-handle/handle-b/hitam-326.png'

import putih321 from '/asset/product/pull-handle/handle-b/putih-321.png'
import putih322 from '/asset/product/pull-handle/handle-b/putih-322.png'
import putih323 from '/asset/product/pull-handle/handle-b/putih-323.png'
import putih324 from '/asset/product/pull-handle/handle-b/putih-324.png'
import putih325 from '/asset/product/pull-handle/handle-b/putih-325.png'
import putih326 from '/asset/product/pull-handle/handle-b/putih-326.png'

import sn321 from '/asset/product/pull-handle/handle-b/sn-ss-321.png'
import sn322 from '/asset/product/pull-handle/handle-b/sn-ss-322.png'
import sn323 from '/asset/product/pull-handle/handle-b/sn-ss-323.png'
import sn324 from '/asset/product/pull-handle/handle-b/sn-ss-324.png'
import sn325 from '/asset/product/pull-handle/handle-b/sn-ss-325.png'
import sn326 from '/asset/product/pull-handle/handle-b/sn-ss-326.png'

const colors = [
  {
    name: 'hitam',
    label: 'Hitam',
    hex: '#1f1f1f',
    images: {
      '321': hitam321,
      '322': hitam322,
      '323': hitam323,
      '324': hitam324,
      '325': hitam325,
      '326': hitam326
    }
  },
  {
    name: 'putih',
    label: 'Putih',
    hex: '#eeeeee',
    images: {
      '321': putih321,
      '322': putih322,
      '323': putih323,
      '324': putih324,
      '325': putih325,
      '326': putih326
    }
  },
  {
    name: 'sn',
    label: 'SN/SS',
    hex: '#cccccc',
    images: {
      '321': sn321,
      '322': sn322,
      '323': sn323,
      '324': sn324,
      '325': sn325,
      '326': sn326
    }
  }
]

const sizes = ['321', '322', '323', '324', '325', '326'] as const
const selectedColor = ref(colors[0]?.name ?? '')
const selectedSize = ref<typeof sizes[number]>('321')

const sizeLabels: Record<string, string> = {
  '321': '30 x 300cc x 450 cc',
  '322': '32 x 350cc x 500 cc',
  '323': '32 x 400cc x 600 cc',
  '324': '32 x 600cc x 800 cc',
  '325': '32 x 800cc x 1000 cc',
  '326': '32 x 1000cc x 1200 cc'
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

const katalogLinks = [
{ slug: 'handle-c', name: 'Pull Handle C', image: '/asset/product/pull-handle/handle-c.png'},
  { slug: 'handle-p', name: 'Pull Handle P', image: '/asset/product/pull-handle/handle-p.png'},
  { slug: 'handle-d', name: 'Pull Handle D', image: '/asset/product/pull-handle/handle-d.png'},
  { slug: 'handle-s', name: 'Pull Handle S', image: '/asset/product/pull-handle/handle-s.png'},
  // { slug: 'handle-b', name: 'Pull Handle B', image: '/asset/product/pull-handle/handle-b.png'},
  { slug: 'handle-h', name: 'Pull Handle H', image: '/asset/product/pull-handle/handle-h.png'},
  { slug: 'handle-21', name: 'Pull Handle 21 SS', image: '/asset/product/pull-handle/handle-21.png'},
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