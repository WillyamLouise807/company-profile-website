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
            <RouterLink to="/produk/door-lock" class="hover:underline text-black font-medium">Door Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">902</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Door Lock 902</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Kunci pintu kamar mandi Glatino hadir dengan material stainless steel yang tahan karat, menjadikannya pilihan ideal untuk area lembap seperti kamar mandi. Sudah lengkap dalam satu set, produk ini hanya perlu dirakit dan langsung siap dipasang.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ selectedSize }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Stainless Steel</p>
            <p class="capitalize text-sm sm:text-base">Kelengkapan: 1 Set Perlu Dirakit & Siap Pasang</p>
            <p class="capitalize text-sm sm:text-base">Type 902</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Bathroom-Buddy-902-Kunci-Kamar-mandi-Material-Aluminium-Anti-Karat-i.1442585495.28825492512?sp_atk=adcd4877-f6ad-4a04-99bf-d46a45dc84d9&xptdk=adcd4877-f6ad-4a04-99bf-d46a45dc84d9" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
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
              <div
                class="w-8 h-8 mx-auto rounded-full border"
                :style="{ backgroundColor: color.hex }"
              />
              <p class="text-xs mt-2 font-medium capitalize group-hover:text-red-600">
                {{ color.label }}
              </p>
            </div>
          </div>

          <!-- Ukuran -->
          <div class="flex gap-4 mt-4">
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'px-4 py-2 border rounded-lg text-sm font-semibold',
                selectedSize === size
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              ]"
            >
              Ukuran {{ size }}
            </button>
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in ukuranImages"
            :key="index"
            class="flex flex-col items-center"
          >
            <img
              :src="item.src"
              :alt="'Ukuran ' + item.label"
              class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
              @click="zoomImage(item.src)"
            />
            <p class="text-sm text-gray-400 mt-2 text-center">*Ukuran {{ item.label }}</p>
          </div>
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
            :src="zoomedImage"
            alt="Zoomed Ukuran Door Lock 902"
            class="w-full object-contain"
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
            :to="`/produk/katalog-1/${item.slug}`"
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

// Gambar produk
import hitam25 from '/asset/product/door-lock/902/hitam-25.png'
import hitam30 from '/asset/product/door-lock/902/hitam-30.png'
import beige25 from '/asset/product/door-lock/902/beige-25.png'
import beige30 from '/asset/product/door-lock/902/beige-30.png'
import putih25 from '/asset/product/door-lock/902/putih-25.png'
import putih30 from '/asset/product/door-lock/902/putih-30.png'

// Gambar dimensi
import ukuran25 from '/asset/product/door-lock/902/ukuran-hitam.png'
import ukuran30 from '/asset/product/door-lock/902/ukuran-hitam.png'

// Warna & gambar berdasarkan ukuran
const colors = [
  {
    name: 'hitam',
    label: 'Hitam',
    hex: '#1f1f1f',
    images: { '25': hitam25, '30': hitam30 }
  },
  {
    name: 'beige',
    label: 'Beige',
    hex: '#8B4513',
    images: { '25': beige25, '30': beige30 }
  },
  {
    name: 'putih',
    label: 'Putih',
    hex: '#eeeeee',
    images: { '25': putih25, '30': putih30 }
  }
]

const selectedColor = ref(colors[0]?.name ?? '')
const selectedSize = ref<'25' | '30'>('30')
const sizes = ['25', '30'] as const

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

// Dimensi produk
const ukuranImages = [
  { label: '25', src: ukuran25 },
  { label: '30', src: ukuran30 }
]

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
  { slug: '839', name: 'Set 839', image: '/asset/product/door-lock/839.png' },
  { slug: '939', name: 'Set 939', image: '/asset/product/door-lock/939.png' },
  { slug: '989', name: 'Set 989', image: '/asset/product/door-lock/989.png' },  
  { slug: 'expanda', name: 'Set Expanda', image: '/asset/product/door-lock/expanda.png' },
  { slug: '802', name: 'Set 802', image: '/asset/product/door-lock/802.png' },
  // { slug: '902', name: 'Set 902', image: '/asset/product/door-lock/902.png' }
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
