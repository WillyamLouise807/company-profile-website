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
            Rambuncis Jendela Glatino 425 (4 Lubang) hadir sebagai solusi fungsional dan estetik untuk sistem buka-tutup jendela Anda. Terbuat dari aluminium 100%, produk ini kokoh, tahan lama, dan tersedia dalam berbagai warna elegan untuk menyesuaikan desain interior maupun eksterior rumah.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: Rambuncis Jendela 425 (4 Lubang)</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
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
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
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
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran Casement Lock"
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
  { name: 'beige', label: 'Beige', hex: '#f5f5dc', image: beige, ukuran: ukuranHitam },
  { name: 'cokelat', label: 'Cokelat', hex: '#8b4513', image: cokelat, ukuran: ukuranHitam },
  { name: 'cream', label: 'Cream', hex: '#fffdd0', image: cream, ukuran: ukuranHitam },
  { name: 'hitam', label: 'Hitam', hex: '#1f1f1f', image: hitam, ukuran: ukuranHitam },
  { name: 'putih', label: 'Putih', hex: '#ffffff', image: putih, ukuran: ukuranHitam },
  { name: 'silver', label: 'Silver', hex: '#c0c0c0', image: silver, ukuran: ukuranHitam }
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

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  // { slug: 'casement-lock', name: 'Casement Lock', image: '/asset/product/alumunium-lock/casement-lock.png'},
  { slug: 'crescent-lock', name: 'Crescent Lock', image: '/asset/product/alumunium-lock/crescent-lock.png'},
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
  { slug: 'a7', name: 'A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: '/asset/product/alumunium-lock/butt-hinge-h.png' },
  { slug: 'engsel-piano', name: 'Engsel Piano', image: '/asset/product/alumunium-lock/engsel-piano.png' },
  { slug: 'engsel-salon', name: 'Engsel Salon', image: '/asset/product/alumunium-lock/engsel-salon.png' }
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
