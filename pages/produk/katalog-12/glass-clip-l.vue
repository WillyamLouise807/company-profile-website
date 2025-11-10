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
          <li class="text-black font-semibold">Glass Clip L</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Glass Clip L</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Glass Clip L berfungsi untuk menghubungkan panel kaca dengan rangka aluminium atau besi, 
            memberikan kekuatan dan tampilan yang rapi. Tersedia dalam dua warna elegan untuk menyesuaikan desain Anda.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>            
            <p class="capitalize text-sm sm:text-base">Tipe: L</p>
            <p class="capitalize text-sm sm:text-base">Material: Stainless Steel SUS 304</p>
            <p class="capitalize text-sm sm:text-base">Finishing: Kilap (Polished Chrome)</p>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Ketebalan Bahan: 4 mm</p>
            <p class="capitalize text-sm sm:text-base">Kapasitas Kaca: 8–10 mm</p>
            <p class="capitalize text-sm sm:text-base">Fitur: Tahan karat, anti gores, anti korosi, dan pintu kembali otomatis saat terbuka ±25–30°</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Engsel-Shower-Stainlees-Pintu-Kaca-Kamar-Mandi-Anti-Karat-i.1442585495.24841555472" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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

          <!-- Pilihan Warna -->
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
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
      <div class="mt-14 border-t border-gray-200 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
          Dimensi Produk
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="/asset/product/accessories/glass-clip-l/ukuran-1.png"
            alt="Ukuran 1"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                  w-full sm:w-3/4 md:w-1/2 
                  h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/accessories/glass-clip-l/ukuran-1.png')"
          />
          <img
            src="/asset/product/accessories/glass-clip-l/ukuran-2.png"
            alt="Ukuran 2"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                  w-full sm:w-3/4 md:w-1/2 
                  h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/accessories/glass-clip-l/ukuran-2.png')"
          />
        </div>
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
        <p class="text-sm text-gray-500 mt-4 text-center">
          *Gambar hanya ilustrasi ukuran secara proporsional
        </p>
      
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
import FooterComponent from '@/components/footer.vue'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

// Gambar produk
import hitam from '/asset/product/accessories/glass-clip-l/hitam.png'
import sn from '/asset/product/accessories/glass-clip-l/sn.png'

// Ukuran
import ukuranHitam from '/asset/product/accessories/glass-clip-l/ukuran-hitam.png'

const colors = [
  { name: 'hitam', label: 'Hitam', hex: '#1f1f1f', image: hitam, ukuran: ukuranHitam },
  { name: 'sn', label: 'SN', hex: '#c0c0c0', image: sn, ukuran: ukuranHitam }
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

const katalogLinks = [
  { slug: 'glass-to-wall', name: 'Glass To Wall', image: '/asset/product/accessories/glass-to-wall.png' },
  { slug: 'glass-to-glass', name: 'Glass To Glass', image: '/asset/product/accessories/glass-to-glass.png' },
  // { slug: 'glass-clip-l', name: 'Glass Clip L', image: '/asset/product/accessories/glass-clip-l.png' },
  { slug: 'glass-clip-p', name: 'Glass Clip P', image: '/asset/product/accessories/glass-clip-p.png' },
  { slug: 'glass-clip-u', name: 'Glass Clip U', image: '/asset/product/accessories/glass-clip-u.png' },
  { slug: 'glass-suction', name: 'Glass Suction', image: '/asset/product/accessories/glass-suction.png' },
  { slug: 'rivet', name: 'Rivet', image: '/asset/product/accessories/rivet.png' },
  { slug: 'mohair', name: 'Mohair', image: '/asset/product/accessories/mohair.png' },
  { slug: 'camlock', name: 'Camlock', image: '/asset/product/accessories/camlock.png' },
  { slug: 'silicone', name: 'Silicone', image: '/asset/product/accessories/silicone.png' },
  { slug: 'tembak-silicone', name: 'Tembak Silicone', image: '/asset/product/accessories/tembak-silicone.png' },
  { slug: 'rell-laci-fe', name: 'Rell Laci FE', image: '/asset/product/accessories/rell-laci-fe.png' },
  { slug: 'bracket-ikan', name: 'Bracket Ikan', image: '/asset/product/accessories/bracket-ikan.png' }
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
