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
          <li class="text-black font-semibold">Casement Lock</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Casement Lock</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino Casement Lock is a reliable and aesthetically pleasing locking solution for your windows.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <p class="capitalize text-sm sm:text-base">Color: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Available for Left (L) & Right (R)</p>            
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-rambuncis-casement-handle-pengunci-pegangan-jendela-material-aluminium-1730960389032281838?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Rambuncis-Casement-Handle-Pengunci-Pegangan-Jendela-Material-Aluminium-i.1442585495.27623743499?sp_atk=8adbb290-1a55-4f6b-93f3-2db7d565fa2c&xptdk=8adbb290-1a55-4f6b-93f3-2db7d565fa2c" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Warna -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedColorLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white cursor-zoom-in"
              @click="openZoom(selectedImage)"
            />
          </transition>

          <!-- Pilihan Warna -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
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
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Product Dimensions</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran Casement Lock"
            class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
            @click="openZoom(ukuranImage)"
          />
          <p class="text-sm text-gray-500 mt-4 text-center">*This image is only an illustration of the product dimensions</p>
        </div>
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

// Gambar produk
import beige from '/asset/product/alumunium-lock/casement-lock/beige.png'
import cokelat from '/asset/product/alumunium-lock/casement-lock/cokelat.png'
import cream from '/asset/product/alumunium-lock/casement-lock/cream.png'
import hitam from '/asset/product/alumunium-lock/casement-lock/hitam.png'
import putih from '/asset/product/alumunium-lock/casement-lock/putih.png'
import silver from '/asset/product/alumunium-lock/casement-lock/silver.png'

// Ukuran
import ukuranHitam from '/asset/product/alumunium-lock/casement-lock/ukuran-hitam.png'
import ukuranPutih from '/asset/product/alumunium-lock/casement-lock/ukuran-putih.png'

const colors = [
  { name: 'beige', label: 'Beige', hex: '#171D2B', image: beige, ukuran: ukuranHitam },
  { name: 'cokelat', label: 'Brown', hex: '#BDB080', image: cokelat, ukuran: ukuranHitam },
  { name: 'cream', label: 'Cream', hex: '#FFFDED', image: cream, ukuran: ukuranHitam },
  { name: 'hitam', label: 'Black', hex: '#1f1f1f', image: hitam, ukuran: ukuranHitam },
  { name: 'putih', label: 'White', hex: '#ffffff', image: putih, ukuran: ukuranHitam },
  { name: 'silver', label: 'Silver', hex: '#D3E1E3', image: silver, ukuran: ukuranHitam }
]

const selectedColor = ref(colors[0]!.name)

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

const selectedImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.image || ''
})

const ukuranImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.ukuran || ukuranHitam
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
  { slug: 'crescent-lock', name: 'Crescent Lock', image: '/asset/product/alumunium-lock/crescent-lock.png'},
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
  { slug: 'a7', name: 'A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Sliding Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Sliding Lock Kait Besar 41066', image: '/asset/product/alumunium-lock/41066.png' },
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