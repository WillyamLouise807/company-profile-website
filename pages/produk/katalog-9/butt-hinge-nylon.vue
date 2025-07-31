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
          <li class="text-black font-semibold">Butt Hinge Nylon</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Butt Hinge Nylon</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Engsel aluminium berkualitas dengan lapisan nylon tahan lama, tersedia dalam 4 warna dan 2 ukuran.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColor.label }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ selectedSize }}"</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Tipe: Butt Hinge Nylon</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Pilihan -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="`${selectedColor.label} ${selectedSize} Inch`"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Pilihan Warna -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full">
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

          <!-- Pilihan Ukuran -->
          <div class="flex gap-4">
            <button
              v-for="size in sizes"
              :key="size"
              class="px-4 py-2 border rounded-lg text-sm font-medium"
              :class="{
                'bg-red-600 text-white border-red-600': selectedSize === size,
                'border-gray-300 hover:border-gray-600': selectedSize !== size
              }"
              @click="selectSize(size)"
            >
              {{ size }} Inch
            </button>
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

<script setup>
import { ref, computed } from 'vue'

// Data warna dan ukuran
const colors = [
  { name: 'hitam', label: 'Hitam', hex: '#000' },
  { name: 'putih', label: 'Putih', hex: '#fff' },
  { name: 'cokelat', label: 'Cokelat', hex: '#5d4037' },
  { name: 'silver', label: 'Silver', hex: '#ccc' },
]

const sizes = ['3', '4']

// Variasi gambar
const images = {
  'hitam-3': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/hitam-3inch.png', import.meta.url).href,
  'hitam-4': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/hitam-4inch.png', import.meta.url).href,
  'putih-3': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/putih-3inch.png', import.meta.url).href,
  'putih-4': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/putih-4inch.png', import.meta.url).href,
  'cokelat-3': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/cokelat-3inch.png', import.meta.url).href,
  'cokelat-4': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/cokelat-4inch.png', import.meta.url).href,
  'silver-3': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/silver-3inch.png', import.meta.url).href,
  'silver-4': new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/silver-4inch.png', import.meta.url).href,
}

// Gunakan satu gambar ukuran saja
const ukuranImage = computed(() =>
  new URL('@/assets/product/alumunium-lock/butt-hinge-nylon/ukuran-hitam.png', import.meta.url).href
)

// State
const selectedColor = ref(colors[0])
const selectedSize = ref(sizes[0])
const isZoomOpen = ref(false)

// Gambar produk berdasarkan pilihan
const selectedImage = computed(() => {
  return images[`${selectedColor.value.name}-${selectedSize.value}`]
})

// Event handlers
const selectColor = (color) => {
  selectedColor.value = color
}

const selectSize = (size) => {
  selectedSize.value = size
}

const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: '41054', name: 'Swing Lock 41054', image: new URL('@/assets/product/alumunium-lock/41054.png', import.meta.url).href },
  { slug: '41055', name: 'Swing Lock 41055', image: new URL('@/assets/product/alumunium-lock/41055.png', import.meta.url).href },
  { slug: '41066', name: 'Swing Lock 41066', image: new URL('@/assets/product/alumunium-lock/41066.png', import.meta.url).href },
  { slug: 'a7', name: 'A7', image: new URL('@/assets/product/alumunium-lock/a7.png', import.meta.url).href },
  // { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: new URL('@/assets/product/alumunium-lock/butt-hinge-nylon.png', import.meta.url).href },
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
</style>
