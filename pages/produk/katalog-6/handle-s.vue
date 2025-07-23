<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
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
          <li class="text-black font-semibold">Handle S</li>
        </ol>
      </nav>

      <!-- Product Section -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle S</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Pull Handle Shower Glatino PHS 2050 hadir dengan material stainless steel berkualitas dan finishing kilap tebal yang elegan. Desainnya cocok untuk kebutuhan kamar mandi modern, memberikan kesan bersih dan mewah sekaligus daya tahan tinggi terhadap karat dan kelembapan.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: 25 x 150 mm</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Finishing Stainless</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: 200 x 500 mm</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: 150 x 450 mm</p>
            <p class="capitalize text-sm sm:text-base">Kelengkapan: 1 pasang handle & sekrup pemasangan</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a
                href="https://www.tokopedia.com/glatino-official-store/glatino-pull-handle-shower-pintu-kaca-premium-anti-karat-material-aluminium-hight-quality-1731013723433174766?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key="
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition-transform"
              >
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a
                href="https://shopee.co.id/Glatino-Pull-Handle-Shower-Pintu-Tarik-Kaca-Stainlees-Materian-Aluminium-i.1442585495.29376758047?sp_atk=df5357bd-6648-45a4-88e7-882b131171eb&xptdk=df5357bd-6648-45a4-88e7-882b131171eb"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition-transform"
              >
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
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Warna -->
          <div class="grid grid-cols-2 gap-4 w-full">
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
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex justify-center">
          <img
            :src="currentUkuranImage"
            alt="Dimensi Handle S"
            class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
            @click="zoomImage(currentUkuranImage)"
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
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/footer.vue'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

import hitam from '@/assets/product/pull-handle/handle-s/hitam.png'
import snss from '@/assets/product/pull-handle/handle-s/sn-ss.png'

import ukuranHitam from '@/assets/product/pull-handle/handle-s/ukuran-hitam.png'
import ukuranPutih from '@/assets/product/pull-handle/handle-s/ukuran-putih.png'

const colors = [
  {
    name: 'hitam',
    label: 'Hitam',
    hex: '#1f1f1f',
    image: hitam,
    ukuran: ukuranHitam
  },
  {
    name: 'sn',
    label: 'SN/SS',
    hex: '#cccccc',
    image: snss,
    ukuran: ukuranHitam // gunakan ukuranPutih jika ada versi berbeda
  }
]

const selectedColor = ref(colors[0]?.name ?? '')

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

const selectedImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.image || ''
})

const currentUkuranImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.ukuran || ukuranHitam
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
