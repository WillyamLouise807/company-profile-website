<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/door-closer" class="hover:underline text-black font-medium">Door Closer</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Door Closer</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Door Closer</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Door Closer Glatino dirancang untuk memberikan kenyamanan dan keamanan ekstra pada pintu Anda. Dengan mekanisme penutup otomatis, produk ini membantu menjaga suhu ruangan, mengurangi kebisingan, dan meningkatkan keamanan secara praktis.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: Door Closer</p>
            <p class="capitalize text-sm sm:text-base">Kapasitas Beban: 40-65 kg</p>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Fungsi: Penutup pintu otomatis untuk menghemat energi, meningkatkan keamanan, mengurangi kebisingan, dan memberi kenyamanan penggunaan</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-glt-201-premiumcloser-kunci-pintu-set-handle-material-aluminium-1731487588150839022?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-GLT-201-Elan-Series-Set-Kunci-Pintu-Hight-Quality-Material-Aluminium-i.1442585495.26372729275?sp_atk=a07343d7-2cc8-4561-91fe-a127df6ebdec&xptdk=a07343d7-2cc8-4561-91fe-a127df6ebdec" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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

          <!-- Warna -->
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
          Dimensi Produk
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="/asset/product/door-closer/ukuran-hitam-1.png"
            alt="Ukuran 1"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                  w-full sm:w-3/4 md:w-1/2 
                  h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/door-closer/ukuran-hitam-1.png')"
          />
          <img
            src="/asset/product/door-closer/ukuran-hitam-2.png"
            alt="Ukuran 2"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                  w-full sm:w-3/4 md:w-1/2 
                  h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/door-closer/ukuran-hitam-2.png')"
          />
        </div>

        <p class="text-sm text-gray-500 mt-4 text-center">
          *Gambar hanya ilustrasi ukuran secara proporsional
        </p>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="closeZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            :src="zoomImage"
            alt="Zoomed Ukuran Door closer 201"
            class="w-full object-contain"
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
  { name: 'hitam', label: 'Hitam', hex: '#1f1f1f', image: hitam },
  { name: 'cokelat', label: 'Cokelat', hex: '#8B4513', image: cokelat },
  { name: 'putih', label: 'Putih', hex: '#eeeeee', image: putih },
  { name: 'silver', label: 'Silver', hex: '#bdc3c7', image: silver }
]

const selectedColor = ref(colors[0]?.name ?? '')
const selectedImage = ref(colors[0]?.image ?? '')

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
  selectedImage.value = color.image
}

// Zoom logic
const isZoomOpen = ref(false)
const zoomImage = ref('')

function openZoom(image: string) {
  zoomImage.value = image
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
