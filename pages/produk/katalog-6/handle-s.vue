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
          <li class="text-black font-semibold">Handle Shower</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle Shower</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Pull Handle Shower Glatino PHS 2050 hadir dengan material stainless steel berkualitas dan finishing kilap tebal yang elegan. Desainnya cocok untuk kebutuhan kamar mandi modern, memberikan kesan bersih dan mewah sekaligus daya tahan tinggi terhadap karat dan kelembapan.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ sizeLabels[selectedSize] }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Finishing Stainless</p>
            <p class="capitalize text-sm sm:text-base">Model: Pull Handle Type S</p>
            <p class="capitalize text-sm sm:text-base">Kelengkapan: 1 Pasang Handle, Baut Panjang, Kunci L</p>
          </div>

          <!-- Marketplace -->
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
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a
                href="https://shopee.co.id/Glatino-Pull-Handle-Shower-Pintu-Tarik-Kaca-Stainlees-Materian-Aluminium-i.1442585495.29376758047?sp_atk=df5357bd-6648-45a4-88e7-882b131171eb&xptdk=df5357bd-6648-45a4-88e7-882b131171eb"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition-transform"
              >
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

          <!-- Ukuran -->
          <div class="grid grid-cols-2 w-full gap-4 mt-4 justify-start">
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
            :src="currentUkuranImage"
            alt="Dimensi Handle D"
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

import hitam1545 from '/asset/product/pull-handle/handle-s/hitam-1545.png'
import hitam2050 from '/asset/product/pull-handle/handle-s/hitam-2050.png'
import sn1545 from '/asset/product/pull-handle/handle-s/sn-ss-1545.png'
import sn2050 from '/asset/product/pull-handle/handle-s/sn-ss-2050.png'

import ukuranHitam from '/asset/product/pull-handle/handle-s/ukuran-hitam.png'
import ukuranPutih from '/asset/product/pull-handle/handle-s/ukuran-putih.png'

const sizes = ['1545', '2050'] as const
const sizeLabels: Record<string, string> = {
  '1545': '25 x 150cc x 450cc',
  '2050': '25 x 200cc x 500cc'
}

const colors = [
  {
    name: 'hitam',
    label: 'Hitam',
    hex: '#1f1f1f',
    images: {
      '1545': hitam1545,
      '2050': hitam2050
    },
    ukuran: ukuranHitam
  },
  {
    name: 'sn',
    label: 'SN/SS',
    hex: '#cccccc',
    images: {
      '1545': sn1545,
      '2050': sn2050
    },
    ukuran: ukuranHitam // Bisa disesuaikan jika SN punya gambar khusus
  }
]

const selectedColor = ref(colors[0]?.name ?? '')
const selectedSize = ref<typeof sizes[number]>('1545')

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

const selectedImage = computed(() => {
  const color = colors.find(c => c.name === selectedColor.value)
  return color?.images[selectedSize.value] || ''
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

const katalogLinks = [
  { slug: 'handle-c', name: 'Handle C', image: '/asset/product/pull-handle/handle-c.png'},
  { slug: 'handle-p', name: 'Handle P', image: '/asset/product/pull-handle/handle-p.png'},
  { slug: 'handle-d', name: 'Handle D', image: '/asset/product/pull-handle/handle-d.png'},
  // { slug: 'handle-s', name: 'Handle S', image: '/asset/product/pull-handle/handle-s.png'},
  { slug: 'handle-b', name: 'Handle B', image: '/asset/product/pull-handle/handle-b.png'},
  { slug: 'handle-h', name: 'Handle H', image: '/asset/product/pull-handle/handle-h.png'},
  { slug: 'handle-21', name: 'Handle 21', image: '/asset/product/pull-handle/handle-21.png'},
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
