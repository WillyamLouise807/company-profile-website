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
            <RouterLink to="/produk/alumunium-lock" class="hover:underline text-black font-medium">Alumunium Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">A7</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">A7 Lock</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            A7 Lock adalah kunci aluminium berkualitas tinggi yang dirancang untuk keamanan dan estetika. Tersedia dalam lima warna elegan dan bahan kokoh.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: A7 Alumunium Lock</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
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
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
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
            alt="Ukuran A7"
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
            :to="`/produk/katalog-9/${item.slug}`"
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
import beige from '@/assets/product/alumunium-lock/a7/beige.png'
import cokelat from '@/assets/product/alumunium-lock/a7/cokelat.png'
import hitam from '@/assets/product/alumunium-lock/a7/hitam.png'
import putih from '@/assets/product/alumunium-lock/a7/putih.png'
import ss from '@/assets/product/alumunium-lock/a7/ss.png'

// Ukuran
import ukuranHitam from '@/assets/product/alumunium-lock/a7/ukuran-hitam.png'
import ukuranPutih from '@/assets/product/alumunium-lock/a7/ukuran-putih.png'

const colors = [
  { name: 'beige', label: 'Beige', hex: '#f5f5dc', image: beige, ukuran: ukuranPutih },
  { name: 'cokelat', label: 'Cokelat', hex: '#8b4513', image: cokelat, ukuran: ukuranPutih },
  { name: 'hitam', label: 'Hitam', hex: '#1f1f1f', image: hitam, ukuran: ukuranHitam },
  { name: 'putih', label: 'Putih', hex: '#ffffff', image: putih, ukuran: ukuranPutih },
  { name: 'ss', label: 'SS', hex: '#c0c0c0', image: ss, ukuran: ukuranPutih }
]

const selectedColor = ref(colors[0]!.name)

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

const selectedImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.image || ''
})

const ukuranImage = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.ukuran || ukuranPutih
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
}

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: '41054', name: 'Swing Lock 41054', image: new URL('@/assets/product/alumunium-lock/41054.png', import.meta.url).href },
  { slug: '41055', name: 'Swing Lock 41055', image: new URL('@/assets/product/alumunium-lock/41055.png', import.meta.url).href },
  { slug: '41066', name: 'Swing Lock 41066', image: new URL('@/assets/product/alumunium-lock/41066.png', import.meta.url).href },
  // { slug: 'a7', name: 'A7', image: new URL('@/assets/product/alumunium-lock/a7.png', import.meta.url).href },
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: new URL('@/assets/product/alumunium-lock/butt-hinge-nylon.png', import.meta.url).href },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: new URL('@/assets/product/alumunium-lock/butt-hinge-ss.png', import.meta.url).href },
  { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: new URL('@/assets/product/alumunium-lock/butt-hinge-h.png', import.meta.url).href },
  { slug: 'engsel-piano', name: 'Engsel Piano', image: new URL('@/assets/product/alumunium-lock/engsel-piano.png', import.meta.url).href },
  { slug: 'engsel-salon', name: 'Engsel Piano', image: new URL('@/assets/product/alumunium-lock/engsel-salon.png', import.meta.url).href },
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
