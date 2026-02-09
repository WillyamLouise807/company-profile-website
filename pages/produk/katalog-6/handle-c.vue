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
          <li class="text-black font-semibold">Pull Handle C</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle C</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino Model C Pull Handle features an ergonomic design and an elegant stainless steel finish.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <p class="capitalize text-sm sm:text-base">Color: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Size:</p>
            <p class="capitalize text-sm sm:text-base">- PHC-20: 25 × 300</p>
            <p class="capitalize text-sm sm:text-base">- PHC-30: 32 × 300</p>
            <p class="capitalize text-sm sm:text-base">- PHC-35: 32 × 300</p>
            <p class="capitalize text-sm sm:text-base">- PHC-40: 32 × 400</p>
            <p class="capitalize text-sm sm:text-base">- PHC-60: 32 × 600</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Premium-Pull-Handle-C-Stainless-Steel-Series-Bahan-Aluminium-Style-i.1442585495.24940411182?sp_atk=b948c7b4-7c4e-4542-aeb4-bbb1670ba4c9&xptdk=b948c7b4-7c4e-4542-aeb4-bbb1670ba4c9" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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
        </div>
      </div>

      <!-- Dimensi -->
      <!-- <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Product Dimensions</h2>
        <div class="flex justify-center">
          <img
            src="/asset/product/pull-handle/handle-c/ukuran-hitam.png"
            alt="Dimensi Handle C"
            class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
            @click="openZoom('/asset/product/pull-handle/handle-c/ukuran-hitam.png')"
          />
        </div>
        <p class="text-sm text-gray-500 mt-6 text-center">
          *The image is only an illustration of the proportional size.
        </p>
      </div> -->

      <!-- Advanced Zoom Modal -->
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

// Import semua gambar kombinasi warna & ukuran
import hitam25 from '/asset/product/pull-handle/handle-c/hitam-25.png'
import hitam321 from '/asset/product/pull-handle/handle-c/hitam-321.png'
import hitam322 from '/asset/product/pull-handle/handle-c/hitam-322.png'
import hitam323 from '/asset/product/pull-handle/handle-c/hitam-323.png'
import hitam324 from '/asset/product/pull-handle/handle-c/hitam-324.png'

import putih25 from '/asset/product/pull-handle/handle-c/putih-25.png'
import putih321 from '/asset/product/pull-handle/handle-c/putih-321.png'
import putih322 from '/asset/product/pull-handle/handle-c/putih-322.png'
import putih323 from '/asset/product/pull-handle/handle-c/putih-323.png'
import putih324 from '/asset/product/pull-handle/handle-c/putih-324.png'

import sn25 from '/asset/product/pull-handle/handle-c/sn-ss-25.png'
import sn321 from '/asset/product/pull-handle/handle-c/sn-ss-321.png'
import sn322 from '/asset/product/pull-handle/handle-c/sn-ss-322.png'
import sn323 from '/asset/product/pull-handle/handle-c/sn-ss-323.png'
import sn324 from '/asset/product/pull-handle/handle-c/sn-ss-324.png'

import ukuranImage from '/asset/product/pull-handle/handle-c/ukuran-hitam.png'

const colors = [
  {
    name: 'hitam',
    label: 'Black',
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
    label: 'White',
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
    label: 'PSS',
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
const selectedColor = ref(colors[0]?.name ?? '')
const selectedSize = ref<typeof sizes[number]>('321')

const sizeLabels: Record<string, string> = {
  '25': 'PHC-20: 25 x 200 cc',
  '321': 'PHC-30: 32 x 300 cc',
  '322': 'PHC-35: 32 x 350 cc',
  '323': 'PHC-40: 32 x 400 cc',
  '324': 'PHC-60: 32 x 600 cc'
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

/* ===== ADVANCED ZOOM FUNCTIONALITY (SAME AS 201.vue) ===== */
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
  { slug: 'handle-p', name: 'Pull Handle P', image: '/asset/product/pull-handle/handle-p.png'},
  { slug: 'handle-d', name: 'Pull Handle D', image: '/asset/product/pull-handle/handle-d.png'},
  { slug: 'handle-s', name: 'Pull Handle S', image: '/asset/product/pull-handle/handle-s.png'},
  { slug: 'handle-b', name: 'Pull Handle Bulat', image: '/asset/product/pull-handle/handle-b.png'},
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