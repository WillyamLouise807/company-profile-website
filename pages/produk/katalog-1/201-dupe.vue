<template>
  <div class="bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-32 py-8 lg:py-12 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-gray-700 font-medium transition-colors">Product</RouterLink>
          </li>
          <li class="text-gray-400">/</li>
          <li>
            <RouterLink to="/produk/handle-roses" class="hover:underline text-gray-700 font-medium transition-colors">Handle Roses</RouterLink>
          </li>
          <li class="text-gray-400">/</li>
          <li class="text-gray-900 font-semibold">201</li>
        </ol>
      </nav>

      <!-- Main Product Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <!-- Product Information -->
        <div class="order-2 lg:order-1 space-y-8">
          <!-- Title & Description -->
          <div class="space-y-4">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Handle Roses 201
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed font-poppins">
              With a simple design and elegant color choices, the Glatino 201 door handle is the perfect choice
              to complement the look of your home's doors.
            </p>
          </div>

          <!-- Product Specifications -->
          <div class="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Product Specifications
            </h2>
            <div class="space-y-2">
              <p class="text-base font-medium text-gray-700">HR 201 Complete Set:</p>
              <ul class="space-y-1 text-gray-600 ml-4">
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Handle 2pcs</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cyl 65 mm (3 Component Keys)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Body lock 30 mm 1pcs Stainless Steel</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Cover key hole 2pcs</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Color: <span class="font-medium text-gray-800">{{ selectedColorLabel }}</span></span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Accessories Section -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <h3 class="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Included Accessories
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <div
                v-for="(accessory, index) in accessories"
                :key="index"
                class="group bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all cursor-zoom-in"
                @click="openZoom(accessory)"
              >
                <div class="aspect-square flex items-center justify-center mb-3">
                  <img
                    :src="accessory"
                    :alt="`Accessory ${index + 1}`"
                    class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <p class="text-xs text-center text-gray-500 font-medium">Component {{ index + 1 }}</p>
              </div>
            </div>
          </div>

          <!-- Marketplace -->
          <div class="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Available on Marketplace
            </h2>
            <div class="flex flex-wrap gap-4">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" 
                 class="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 hover:border-gray-300 transition-all group">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-8 h-8 object-contain" />
                <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tokopedia Store</span>
              </a>
              <a href="https://shopee.co.id/Glatino-Kepala-Handle-SS-201-Tarikan-Tanam-Pintu-Geser-Sliding-Door-Material-Aluminium-i.1442585495.28627348249" 
                 target="_blank" rel="noopener noreferrer" 
                 class="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 hover:border-gray-300 transition-all group">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-8 h-8 object-contain" />
                <span class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Shopee Store</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Product Gallery (Sticky) -->
        <div class="order-1 lg:order-2 space-y-6">
          <div class="lg:sticky lg:top-8 space-y-6">
            <!-- Main Image -->
            <div class="relative group">
              <transition name="fade" mode="out-in">
                <img
                  :key="selectedImage"
                  :src="selectedImage"
                  :alt="selectedColorLabel"
                  class="w-full aspect-square object-contain bg-gray-50 rounded-2xl border border-gray-200 cursor-zoom-in shadow-sm group-hover:shadow-lg transition-shadow"
                  @click="openZoom(selectedImage)"
                />
              </transition>
              <div class="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                <span class="text-sm font-medium text-gray-700">{{ selectedColorLabel }}</span>
              </div>
            </div>

            <!-- Color Selection -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900">Available Colors</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  v-for="(color, index) in colors"
                  :key="index"
                  class="group text-center border rounded-xl p-4 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  :class="{
                    'ring-2 ring-red-600 border-red-600 bg-red-50': selectedColor === color.name,
                    'border-gray-200 hover:border-gray-300 bg-white': selectedColor !== color.name
                  }"
                  @click="selectColor(color)"
                >
                  <div class="flex flex-col items-center space-y-2">
                    <div
                      class="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm"
                      :style="{ backgroundColor: color.hex }"
                    />
                    <p class="text-sm font-medium text-gray-700 capitalize">
                      {{ color.label }}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Quick Actions (Tambahan untuk sticky effect) -->
            <!-- <div class="hidden lg:block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h4 class="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div class="space-y-3">
                <button class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  View in Marketplace
                </button>
                <button class="w-full border border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share Product
                </button>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Product Dimensions -->
      <div class="border-t border-gray-200 pt-12">
        <div class="text-center mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Product Dimensions
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Precise measurements and technical specifications for professional installation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div
            v-for="(item, index) in dimensiImages"
            :key="index"
            class="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <img
              :src="item"
              alt="Product Dimensions"
              class="w-full aspect-square object-contain bg-gray-50 rounded-xl cursor-zoom-in group-hover:scale-105 transition-transform"
              @click="openZoom(item)"
            />
          </div>
        </div>

        <p class="text-sm text-gray-500 text-center bg-gray-50 rounded-xl py-3 px-6 mx-auto max-w-md">
          <svg class="w-4 h-4 inline mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Images are proportional size illustrations
        </p>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center"
        @click.self="closeZoom"
      >
        <!-- Close Button -->
        <button
          @click="closeZoom"
          class="absolute top-6 right-6 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors shadow-lg"
        >
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Zoom Controls -->
        <div class="absolute top-6 left-6 z-10 bg-white rounded-xl shadow-lg border border-gray-200 p-2 flex gap-1">
          <button
            @click="zoomIn"
            class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
            title="Zoom In"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>
          <button
            @click="zoomOut"
            class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
            title="Zoom Out"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
            </svg>
          </button>
          <button
            @click="resetZoom"
            class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
            title="Reset"
          >
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <!-- Zoom Level Indicator -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <span class="text-sm font-medium text-gray-700">{{ Math.round(zoomLevel * 100) }}%</span>
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

      <!-- Related Products -->
      <div class="border-t border-gray-200 pt-12 mt-16">
        <div class="text-center mb-8">
          <h2 class="text-2xl lg:text-3xl font-bold text-red-700 mb-4">
            Explore Our Complete Collection
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover other premium handle solutions in our catalog
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-1/${item.slug}`"
            class="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
          >
            <div class="aspect-square bg-gray-50 p-6 flex items-center justify-center">
              <img
                :src="item.image"
                :alt="item.name"
                class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div class="p-4 text-center">
              <h3 class="font-semibold text-red-600 group-hover:text-red-700 transition-colors">{{ item.name }}</h3>
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

import hitam from '/asset/product/door-lock/201/hitam.png'
import cokelat from '/asset/product/door-lock/201/cokelat.png'
import putih from '/asset/product/door-lock/201/putih.png'
import snss from '/asset/product/door-lock/201/sn-ss.png'

const colors = [
  { name: 'hitam', label: 'Black', hex: '#1f1f1f', image: hitam },
  { name: 'cokelat', label: 'Brown', hex: '#8B4513', image: cokelat },
  { name: 'putih', label: 'White', hex: '#eeeeee', image: putih },
  { name: 'sn-ss', label: 'SS', hex: '#bdc3c7', image: snss }
]

const selectedColor = ref(colors[0]!.name)
const selectedImage = ref(colors[0]!.image)

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
  selectedImage.value = color.image
}

/* ===== ACCESSORIES ===== */
const accessories = [
  '/asset/product/door-lock/201/aksesoris-1.png',
  '/asset/product/door-lock/201/aksesoris-2.png',
  '/asset/product/door-lock/201/aksesoris-3.png',
  '/asset/product/door-lock/201/aksesoris-4.png',
  '/asset/product/door-lock/201/aksesoris-5.png',
  '/asset/product/door-lock/201/aksesoris-6.png',
]

/* ===== DIMENSI ===== */
const dimensiImages = [
  '/asset/product/door-lock/201/ukuran-1.png',
  '/asset/product/door-lock/201/ukuran-2.png',
  '/asset/product/door-lock/201/ukuran-3.png'
]

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

// Links to other products in the same catalog
const katalogLinks = [
  { slug: '202', name: 'Set 202', image: '/asset/product/door-lock/202.png' },
  { slug: '820', name: 'Set 820', image: '/asset/product/door-lock/820.png' },
  { slug: 'handle-only', name: 'Handle Only', image: '/asset/product/door-lock/handle-only.png' },
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