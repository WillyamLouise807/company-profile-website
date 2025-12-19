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
            <RouterLink to="/produk/accessories" class="hover:underline text-black font-medium">Accessories</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Engsel Salon</li>
        </ol>
      </nav>

      <!-- Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Engsel Salon</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Engsel aluminium model salon, tersedia dalam 4 pilihan warna elegan dengan desain modern.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColor.label }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: 1 buah</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: Engsel Salon</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-engsel-salon-9-inch-atau-engsel-penahan-sikutan-jendela-lipat-material-aluminium-anti-karat-1730972977255319278?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/mall/search?keyword=salon&shop=1442585495" target="_blank" rel="noopener noreferrer">
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
              :alt="selectedColor.label"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Pilihan Warna -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div
              v-for="color in colors"
              :key="color.name"
              class="group cursor-pointer text-center border rounded-xl p-3 transition hover:shadow-md"
              :class="{ 'ring-2 ring-red-600 border-red-600': selectedColor.name === color.name }"
              @click="selectColor(color)"
            >
              <div class="w-8 h-8 mx-auto rounded-full border" :style="{ backgroundColor: color.hex }" />
              <p class="text-xs mt-2 font-medium capitalize group-hover:text-red-600">{{ color.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Dimensi"
            class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
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
          <img :src="ukuranImage" alt="Zoomed Ukuran" class="w-full object-contain" />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4 sm:px-6 lg:px-8">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-12/${item.slug}`"
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
import { ref, computed } from 'vue'

type ColorName = 'hitam' | 'putih' | 'cokelat' | 'beige'

interface ColorOption {
  name: ColorName
  label: string
  hex: string
}

const colors: ColorOption[] = [
  { name: 'hitam', label: 'Hitam', hex: '#000' },
  { name: 'putih', label: 'Putih', hex: '#fff' },
  { name: 'cokelat', label: 'Cokelat', hex: '#5d4037' },
  { name: 'beige', label: 'Beige', hex: '#f5f5dc' },
]

const images: Record<ColorName, string> = {
  hitam: '/asset/product/accessories/engsel-salon/hitam.png',
  putih: '/asset/product/accessories/engsel-salon/putih.png',
  cokelat: '/asset/product/accessories/engsel-salon/ss.png',
  beige: '/asset/product/accessories/engsel-salon/beige.png',
}

const ukuranImage = '/asset/product/accessories/engsel-salon/ukuran-hitam.png'
const selectedColor = ref<ColorOption>(colors[0]!)
const isZoomOpen = ref(false)

const selectedImage = computed(() => images[selectedColor.value.name])

const selectColor = (color: ColorOption) => {
  selectedColor.value = color
}

const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: 'glass-to-wall', name: 'Shower Hinger 90°', image: '/asset/product/accessories/glass-to-wall.png' },
  { slug: 'glass-to-glass', name: 'Shower Hinger 180°', image: '/asset/product/accessories/glass-to-glass.png' },
  { slug: 'glass-clip-l', name: 'Glass Clip L', image: '/asset/product/accessories/glass-clip-l.png' },
  { slug: 'glass-clip-p', name: 'Glass Clip Persegi', image: '/asset/product/accessories/glass-clip-p.png' },
  { slug: 'glass-clip-u', name: 'Glass Clip U', image: '/asset/product/accessories/glass-clip-u.png' },
  { slug: 'glass-suction', name: 'Glass Suction Plate', image: '/asset/product/accessories/glass-suction.png' },
  { slug: 'handle-bamboo', name: 'Handle Bamboo', image: '/asset/product/accessories/handle-bamboo.png' },  
  { slug: 'handle-swing', name: 'Handle Swing', image: '/asset/product/accessories/handle-swing.png' },
  { slug: 'bracket-ikan', name: 'Bracket Ikan', image: '/asset/product/accessories/bracket-ikan.png' },
  { slug: 'rivet', name: 'Aluminium Blind Rivet', image: '/asset/product/accessories/rivet.png' },
  { slug: 'roller-shutter-lock', name: 'Roller Shutter Lock', image: '/asset/product/accessories/roller-shutter-lock.png' },
  // { slug: 'engsel-salon', name: 'Engsel Salon', image: '/asset/product/accessories/engsel-salon.png' },
  { slug: 'silicone', name: 'Silicone Acetoxy', image: '/asset/product/accessories/silicone.png' },
  { slug: 'tembak-silicone', name: 'Silicone Gun', image: '/asset/product/accessories/tembak-silicone.png' },
  { slug: 'silicone-sausage-neutral', name: 'Silicone Sausage Neutral', image: '/asset/product/accessories/silicone-sosis.png' },
  { slug: 'silicone-gun-sosis', name: 'Silicone Gun Sosis', image: '/asset/product/accessories/silicone-gun-sosis.png' },
  { slug: 'mohair', name: 'Karet Mohair Big', image: '/asset/product/accessories/mohair.png' },
  { slug: 'engsel-piano-stainless', name: 'Engsel Piano Stainless', image: '/asset/product/accessories/engsel-piano-stainless.png' },  
  { slug: 'engsel-piano-iron', name: 'Engsel Piano Iron', image: '/asset/product/accessories/engsel-piano-iron.png' },
  { slug: 'camlock', name: 'Camlock', image: '/asset/product/accessories/camlock.png' },   
  { slug: 'rell-laci-fe', name: 'Rell Laci FE 30 NB', image: '/asset/product/accessories/rell-laci-fe.png' },
  { slug: 'rell-laci-fe-slowmo', name: 'Rell Laci FE 37 Black', image: '/asset/product/accessories/rell-laci-fe-slowmo.png' },
  { slug: 'engsel-sendok-mini', name: 'Engsel Sendok Mini', image: '/asset/product/accessories/engsel-sendok-mini.png' },
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>