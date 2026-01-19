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
          <li class="text-black font-semibold">Butt Hinge SS</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Butt Hinge SS</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            High-quality stainless steel hinges are durable and rust-resistant. Available in two sizes.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>                       
            <p class="capitalize text-sm sm:text-base">Size: {{ selectedSize }}"</p>  
            <p class="text-sm sm:text-base">- 3 × 2.5 × 2 mm (3 Inch)</p>
            <p class="text-sm sm:text-base">- 4 × 3 × 2 mm (4 Inch)</p>            
            <p class="capitalize text-sm sm:text-base">- Material: Stainless Steel SUS 304 D</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a
                href="https://www.tokopedia.com/glatino-official-store/glatino-engsel-pintu-butt-hinge-stainless-steel-4-3-untuk-rumah-kualitas-premium-1730959960062789358"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a
                href="https://shopee.co.id/Glatino-Engsel-Pintu-Butt-Hinge-Stainless-Steel-4-3-Anti-Karat-Material-Aluminium-High-Quality-i.1442585495.29773360746"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Pilihan Ukuran -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="`Butt Hinge SS ${selectedSize} Inch`"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

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
      <div class="mt-14 border-t border-gray-200 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Product Dimensions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in ukuranImages"
            :key="index"
            class="flex flex-col items-center"
          >
            <img
              :src="item.src"
              :alt="'Ukuran ' + item.label"
              class="rounded-xl shadow-md max-w-md w-full p-4 cursor-zoom-in"
              @click="zoomImage(item.src)"
            />
            <p class="text-sm text-gray-500 mt-2 text-center">*Size {{ item.label }}</p>
          </div>
        </div>
      </div>

      <!-- Zoom -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            :src="zoomedImage"
            alt="Zoomed Ukuran Butt Hinge SS"
            class="w-full object-contain"
          />
        </div>
      </div>

      <!-- Katalog Produk Lain -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 px-4 sm:px-6 lg:px-8">
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

const sizes = ['3', '4']
const selectedSize = ref(sizes[0])
const isZoomOpen = ref(false)

// Gambar utama per ukuran
const images = {
  '3': '/asset/product/alumunium-lock/butt-hinge-ss/ss-3inch.png',
  '4': '/asset/product/alumunium-lock/butt-hinge-ss/ss-4inch.png',
}
const selectedImage = computed(() => images[selectedSize.value])

// Gambar dimensi (gunakan path langsung, karena di folder public)
const ukuranImages = [
  { label: '3 Inch', src: '/asset/product/alumunium-lock/butt-hinge-ss/ukuran-3inch.png' },
  { label: '4 Inch', src: '/asset/product/alumunium-lock/butt-hinge-ss/ukuran-4inch.png' }
]

const selectSize = (size) => {
  selectedSize.value = size
}

const zoomedImage = ref('')
const zoomImage = (src) => {
  zoomedImage.value = src
  isZoomOpen.value = true
}
const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
}

// Produk lain
const katalogLinks = [
  { slug: 'casement-lock', name: 'Casement Lock', image: '/asset/product/alumunium-lock/casement-lock.png'},
  { slug: 'crescent-lock', name: 'Crescent Lock', image: '/asset/product/alumunium-lock/crescent-lock.png'},
  { slug: 'a7', name: 'Sliding Lock A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'zinc', name: 'Flush Handle  zinc', image: '/asset/product/alumunium-lock/zinc.png' },
  { slug: 'alumunium', name: 'Flush Handle  Aluminium', image: '/asset/product/alumunium-lock/alumunium.png' },
  { slug: 'ss-201', name: 'Flush Handle 201', image: '/asset/product/alumunium-lock/ss-201.png' },
  { slug: 'flushbolt', name: 'Flush Handle Flushbolt', image: '/asset/product/alumunium-lock/flushbolt.png' }, 
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  // { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: '/asset/product/alumunium-lock/butt-hinge-h.png' },
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
