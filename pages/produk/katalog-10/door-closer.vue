<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">
              Product
            </RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/door-closer" class="hover:underline text-black font-medium">
              Door Closer
            </RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Door Closer</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Door Closer
          </h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino Door Closer is designed to provide extra comfort and security for your door.
            With its automatic closing mechanism, this product helps maintain room temperature,
            reduces noise, and increases security in a practical way.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">
              Product Description:
            </h2>
            <p class="capitalize text-sm sm:text-base">Door Weight Max: 40kg</p>
            <p class="capitalize text-sm sm:text-base">Type: Hold Open</p>
            <p class="capitalize text-sm sm:text-base">
              Color: {{ selectedColorLabel }}
            </p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">
              Available on Marketplace:
            </h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a
                href="https://www.tokopedia.com/glatino-official-store"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition-transform"
              >
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a
                href="https://shopee.co.id/glatino.official"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition-transform"
              >
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
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="group cursor-pointer text-center border rounded-xl p-3 transition hover:shadow-md"
              :class="{
                'ring-2 ring-red-600 border-red-600': selectedColor === color.name,
                'border-gray-300': selectedColor !== color.name
              }"
              @click="selectColor(color)"
            >
              <div
                class="w-8 h-8 mx-auto rounded-full border"
                :style="{ backgroundColor: color.hex }"
              />
              <p class="text-xs mt-2 font-medium capitalize group-hover:text-red-600">
                {{ color.label }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-200 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
          Product Dimensions
        </h2>

        <div class="flex justify-center">
          <img
            src="/asset/product/door-closer/ukuran.png"
            alt="Ukuran Door Closer"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain
                   w-full sm:w-3/4 md:w-2/3 lg:w-1/2
                   h-64 sm:h-72 md:h-80 lg:h-96"
            @click="openZoom()"
          />
        </div>

        <p class="text-sm text-gray-500 mt-4 text-center">
          *This image is only an illustration of the product dimensions
        </p>
      </div>

      <!-- Zoom Modal (FIXED) -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="closeZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-5xl w-full">
          <img
            v-if="zoomImage"
            :src="zoomImage"
            alt="Zoomed Ukuran Door Closer"
            class="w-full max-h-[80vh] object-contain"
          />
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

import hitam from '/asset/product/door-closer/hitam.png'
import cokelat from '/asset/product/door-closer/cokelat.png'
import putih from '/asset/product/door-closer/putih.png'
import silver from '/asset/product/door-closer/silver.png'

const colors = [
  { name: 'hitam', label: 'Black', hex: '#1f1f1f', image: hitam },
  { name: 'cokelat', label: 'Brown', hex: '#402916', image: cokelat },
  { name: 'putih', label: 'White', hex: '#eeeeee', image: putih },
  { name: 'silver', label: 'Silver', hex: '#bdc3c7', image: silver }
]

const selectedColor = ref(colors[0]?.name)
const selectedImage = ref(colors[0]?.image)

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
  selectedImage.value = color.image
}

/* ZOOM FIX */
const isZoomOpen = ref(false)
const zoomImage = ref('/asset/product/door-closer/ukuran.png')

function openZoom() {
  zoomImage.value = '/asset/product/door-closer/ukuran.png'
  isZoomOpen.value = true
}

function closeZoom() {
  isZoomOpen.value = false
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
