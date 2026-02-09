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
            The Glatino Model B Pull Handle is ergonomically designed and made of stainless steel.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <p class="capitalize text-sm sm:text-base">Color: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Size:</p>                
            <p class="capitalize text-sm sm:text-base">- PHB-3245: 32 × 300cc × 450cc</p>
            <p class="capitalize text-sm sm:text-base">- PHB-3250: 32 × 350cc × 500cc</p>
            <p class="capitalize text-sm sm:text-base">- PHB-3260: 32 × 400cc × 600cc</p>
            <p class="capitalize text-sm sm:text-base">- PHB-3280: 32 × 600cc × 800cc</p>
            <p class="capitalize text-sm sm:text-base">- PHB-32100: 32 × 800cc × 1000cc</p>
            <p class="capitalize text-sm sm:text-base">- PHB-32120: 32 × 1000cc × 1200cc</p>                       
            <!-- <p class="capitalize text-sm sm:text-base">Size: {{ sizeLabels[selectedSize] }}</p>         -->
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
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
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white cursor-zoom-in"
              @click="openZoom(selectedImage)"
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
          <!-- <div class="grid grid-cols-3 w-full gap-4 mt-4 justify-start">
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
          </div> -->
        </div>
      </div>

      <!-- Dimensi -->
      <!-- <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Product Dimensions</h2>
        <div class="flex justify-center">
          <img
            src="/asset/product/pull-handle/handle-b/ukuran-hitam.png"
            alt="Dimensi Handle B"
            class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
            @click="openZoom(ukuranImage)"
          />
        </div>
      </div> -->

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center"
        @click.self="closeZoom"
      >
        <!-- Close Button -->
        <button
          @click="closeZoom"
          class="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-100 transition"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Zoom Controls -->
        <div class="absolute top-4 left-4 z-10 bg-gray-100 rounded-lg shadow-lg p-2 flex gap-2">
          <button
            @click="zoomIn"
            class="p-2 hover:bg-gray-100 rounded transition"
            title="Zoom In"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
          <button
            @click="zoomOut"
            class="p-2 hover:bg-gray-100 rounded transition"
            title="Zoom Out"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button>
          <button
            @click="resetZoom"
            class="p-2 hover:bg-gray-100 rounded transition"
            title="Reset"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <!-- Zoom Level Indicator -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-gray-100 rounded-full px-4 py-2 shadow-lg">
          <span class="text-sm font-medium">{{ Math.round(zoomLevel * 100) }}%</span>
        </div>

        <!-- Image Container -->
        <div 
          ref="zoomContainer"
          class="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag"
          @wheel.prevent="handleWheel"
          @click="handleImageClick"
        >
          <img
            ref="zoomImageElement"
            :src="zoomImage"
            alt="Zoom View"
            class="select-none pointer-events-none max-w-full max-h-full object-contain"
            :style="{
              transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`,
              transformOrigin: 'center center',
              transition: isAnimating ? 'transform 0.3s ease-out' : 'none'
            }"
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
    label: 'Black',
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
    label: 'White',
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
    label: 'PSS+SSS',
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

/* ===== ZOOM FUNCTIONALITY ===== */
const isZoomOpen = ref(false)
const zoomImage = ref('')
const zoomLevel = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartY = ref(0)
const lastTranslateX = ref(0)
const lastTranslateY = ref(0)
const isAnimating = ref(false)
const zoomContainer = ref<HTMLElement | null>(null)
const zoomImageElement = ref<HTMLImageElement | null>(null)

function openZoom(img: string) {
  zoomImage.value = img
  isZoomOpen.value = true
  resetZoom()
}

function closeZoom() {
  isZoomOpen.value = false
  resetZoom()
}

function resetZoom() {
  isAnimating.value = true
  zoomLevel.value = 1
  translateX.value = 0
  translateY.value = 0
  lastTranslateX.value = 0
  lastTranslateY.value = 0
  isDragging.value = false
  
  setTimeout(() => {
    isAnimating.value = false
  }, 300)
}

function zoomIn() {
  isAnimating.value = true
  zoomLevel.value = Math.min(zoomLevel.value + 0.5, 5)
  
  setTimeout(() => {
    isAnimating.value = false
  }, 300)
}

function zoomOut() {
  isAnimating.value = true
  zoomLevel.value = Math.max(zoomLevel.value - 0.5, 1)
  
  if (zoomLevel.value === 1) {
    translateX.value = 0
    translateY.value = 0
    lastTranslateX.value = 0
    lastTranslateY.value = 0
  }
  
  setTimeout(() => {
    isAnimating.value = false
  }, 300)
}

function handleImageClick(e: MouseEvent) {
  // Prevent closing modal when clicking image
  e.stopPropagation()
  
  // Double zoom on click
  if (zoomLevel.value < 2) {
    isAnimating.value = true
    zoomLevel.value = 2
    
    setTimeout(() => {
      isAnimating.value = false
    }, 300)
  }
}

function handleWheel(e: WheelEvent) {
  e.preventDefault()
  
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  isAnimating.value = false
  zoomLevel.value = Math.max(1, Math.min(5, zoomLevel.value + delta))
  
  if (zoomLevel.value === 1) {
    translateX.value = 0
    translateY.value = 0
    lastTranslateX.value = 0
    lastTranslateY.value = 0
  }
}

function startDrag(e: MouseEvent) {
  if (zoomLevel.value <= 1) return
  
  isDragging.value = true
  dragStartX.value = e.clientX - lastTranslateX.value
  dragStartY.value = e.clientY - lastTranslateY.value
  isAnimating.value = false
}

function drag(e: MouseEvent) {
  if (!isDragging.value || zoomLevel.value <= 1) return
  
  const newX = e.clientX - dragStartX.value
  const newY = e.clientY - dragStartY.value
  
  // Add boundaries to prevent dragging too far
  const maxTranslate = 500 * zoomLevel.value
  
  translateX.value = Math.max(-maxTranslate, Math.min(maxTranslate, newX))
  translateY.value = Math.max(-maxTranslate, Math.min(maxTranslate, newY))
}

function stopDrag() {
  if (isDragging.value) {
    lastTranslateX.value = translateX.value
    lastTranslateY.value = translateY.value
  }
  isDragging.value = false
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