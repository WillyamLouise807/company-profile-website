<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-gray-900">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-gray-700 font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/door-lock" class="hover:underline text-gray-700 font-medium">Door Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">989</li>
        </ol>
      </nav>

      <!-- Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-black">Door Lock 989</h1>
          <p class="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
            Glatino AL/GLT 989 dirancang sebagai solusi handle set lengkap untuk pintu aluminium atau kayu minimalis. Dilengkapi silinder dan 3 anak kunci, produk ini memberikan kemudahan dalam penggunaan serta keamanan yang andal untuk berbagai jenis ruangan.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base text-gray-800">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base text-gray-800">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base text-gray-800">Material: Stainless Steel</p>
            <p class="capitalize text-sm sm:text-base text-gray-800">Cylinder: Dilengkapi 3 Anak Kunci</p>
            <p class="capitalize text-sm sm:text-base text-gray-800">Type: AL/GLT 989 WH / NB</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3 text-gray-900">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-glt-989-lockexpert-set-kunci-pintu-premium-material-aluminium-anti-karat-1730953809704421102" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-GLT-989-LockExpert-Set-Kunci-Pintu-Material-Aluminium-Anti-Karat-i.1442585495.26572826327" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Warna -->
        <div class="space-y-6 flex flex-col items-center">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedColorLabel"
              class="rounded-2xl shadow-md w-full aspect-video object-contain bg-gray-100"
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
      <div class="mt-14 border-t border-gray-300 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left text-gray-900">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran Door Lock 989"
            class="rounded-xl shadow-md max-w-xl w-full bg-gray-100 p-4 cursor-zoom-in"
            @click="toggleZoom"
          />
          <p class="text-sm text-gray-500 mt-4 text-center">*Gambar hanya ilustrasi ukuran secara proporsional</p>
        </div>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            :src="ukuranImage"
            alt="Zoomed Ukuran Door Lock 989"
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

import hitam from '@/assets/product/door-lock/989/hitam.png'
import cokelat from '@/assets/product/door-lock/989/cokelat.png'
import putih from '@/assets/product/door-lock/989/putih.png'
import snss from '@/assets/product/door-lock/989/sn-ss.png'
import ukuran from '@/assets/product/door-lock/989/ukuran-hitam.png'

const colors = [
  { name: 'hitam', label: 'Hitam', hex: '#1f1f1f', image: hitam },
  { name: 'cokelat', label: 'Cokelat', hex: '#8B4513', image: cokelat },
  { name: 'putih', label: 'Putih', hex: '#eeeeee', image: putih },
  { name: 'sn-ss', label: 'Stainless Steel / Satin Nickel', hex: '#bdc3c7', image: snss }
]

const selectedColor = ref(colors[0]?.name ?? '')
const selectedImage = ref(colors[0]?.image ?? '')
const ukuranImage = ukuran

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
  selectedImage.value = color.image
}

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
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