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
            <RouterLink to="/produk/sliding-rail" class="hover:underline text-black font-medium">Sliding Rail</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Aluminium</li>
        </ol>
      </nav>

      <!-- Product Section -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Sliding Rail Aluminium
          </h1>

          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            An aluminium rail used to support sliding movement, allowing smooth and stable operation.
          </p>

          <!-- Variant Selector -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Type:</label>
            <select
              v-model="selectedVariant"
              class="border rounded-lg px-3 py-2 w-full sm:w-60"
            >
              <option
                v-for="item in variants"
                :key="item.code"
                :value="item"
              >
                {{ item.type }}
              </option>
            </select>
          </div>

          <!-- Product Description -->
          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>

            <p class="capitalize text-sm sm:text-base">
              Material: <span class="font-semibold">Aluminium</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Code: <span class="font-semibold">{{ selectedVariant.code }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Type: <span class="font-semibold">{{ selectedVariant.type }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Track: <span class="font-semibold">{{ selectedVariant.track }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Bracket: <span class="font-semibold">{{ selectedVariant.bracket }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Capacity Max: <span class="font-semibold">{{ selectedVariant.capacity }}</span>
            </p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available in Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a
                href="https://www.tokopedia.com/glatino-official-store"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img src="/asset/product/tokopedia 1.png" class="w-14 sm:w-16" />
              </a>
              <a
                href="https://shopee.co.id/Glatino-GLT-Rel-Pintu-Geser-Sliding-Rail-Material-Aluminium-1-6-3-Meter-i.1442585495.28623371180"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img src="/asset/product/shopee 1.png" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white cursor-zoom-in"
              @click="openZoom(selectedImage)"
            />
          </transition>

          <!-- Thumbnail -->
          <div class="grid grid-cols-3 gap-4">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="selectedImage = image"
              class="rounded-xl cursor-pointer border-2 h-48 object-contain cursor-zoom-in"
              :class="{
                'border-red-600': selectedImage === image,
                'border-transparent': selectedImage !== image
              }"
              @dblclick="openZoom(image)"
            />
          </div>
        </div>
      </div>

      <!-- Advanced Zoom Modal (persis sama seperti 201.vue) -->
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

      <!-- Katalog -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">
          SEE OUR OTHER PRODUCT IN THIS CATALOG
        </h2>
        <div class="flex justify-center">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-13/${item.slug}`"
            class="block bg-white rounded-xl border shadow-sm hover:shadow-md transition w-44"
          >
            <img :src="item.image" class="w-full h-32 object-contain bg-white" />
            <div class="bg-gray-50 text-center py-4 text-red-600 font-semibold text-sm">
              {{ item.name }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import FooterComponent from '@/components/footer.vue'

// Images
import produk1 from '/asset/product/sliding-rail/aluminium/produk-1.png'
import produk2 from '/asset/product/sliding-rail/aluminium/produk-2.png'
import produk3 from '/asset/product/sliding-rail/aluminium/produk-3.png'

const images = [produk1, produk2, produk3]
const selectedImage = ref(images[0]!)

// Product Variants
const variants = [
  { code: 'GLT - A2', type: 'A2', track: '1600 MM', bracket: '4 PCS', capacity: '80 KG' },
  { code: 'GLT - A3', type: 'A3', track: '1800 MM', bracket: '4 PCS', capacity: '80 KG' },
  { code: 'GLT - A4', type: 'A4', track: '2100 MM', bracket: '5 PCS', capacity: '80 KG' },
  { code: 'GLT - A5', type: 'A5', track: '2400 MM', bracket: '6 PCS', capacity: '80 KG' },
  { code: 'GLT - A6', type: 'A6', track: '3000 MM', bracket: '7 PCS', capacity: '100 KG' }
]

const selectedVariant = ref(variants[0]!)

/* ===== ZOOM FUNCTIONALITY (persis sama seperti 201.vue) ===== */
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
  { slug: 'galvanis', name: 'Galvanis', image: '/asset/product/sliding-rail/galvanis.png' }
]
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