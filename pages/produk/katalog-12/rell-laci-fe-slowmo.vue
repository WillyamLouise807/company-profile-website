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
          <li class="text-black font-semibold">Rell Laci FE Slowmo</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Rell Laci FE Slowmo</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Rell Laci FE Slowmo adalah tarikan tanam yang dirancang khusus untuk pintu dorong atau sliding, laci, dan lemari. 
            Dengan desain yang simpel namun elegan, tarikan ini menjadi pelengkap sempurna untuk perabot rumah Anda.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Cold Rolled Steal</p>
            <p class="capitalize text-sm sm:text-base">Finish: 2 inc</p>
            <p class="capitalize text-sm sm:text-base">Thickness: 1.0 x 1.0 x 1.2 mm</p>

            <h2 class="text-lg sm:text-xl font-semibold mb-2">Ukuran:</h2>
            <p class="capitalize text-sm sm:text-base">- 250 mm</p>
            <p class="capitalize text-sm sm:text-base">- 300 mm</p> 
            <p class="capitalize text-sm sm:text-base">- 350 mm</p> 
            <p class="capitalize text-sm sm:text-base">- 400 mm</p>                        
            <p class="capitalize text-sm sm:text-base">- 450 mm</p>                            
            <p class="capitalize text-sm sm:text-base">- 500 mm</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-premium-handle-kepala-ss-201-tarikan-tanam-pintu-geser-sliding-door-premium-material-aluminium-1730967235252553454" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Kepala-Handle-SS-201-Tarikan-Tanam-Pintu-Geser-Sliding-Door-Material-Aluminium-i.1442585495.28627348249" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Galeri Gambar -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              alt="Camlock"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Thumbnail -->
          <div class="grid grid-cols-3 gap-4">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="selectedImage = image"
              class="rounded-xl cursor-pointer border-2 h-48 object-contain"
              :class="{
                'border-red-600': selectedImage === image,
                'border-transparent': selectedImage !== image
              }"
            />
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            src="/asset/product/accessories/rell-laci-fe-slowmo/ukuran-hitam.png"
            alt="Ukuran Rell Laci FE Slowmo"
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
          <img
            src="/asset/product/accessories/rell-laci-fe-slowmo/ukuran-hitam.png"
            alt="Zoomed Ukuran Rell Laci FE Slowmo"
            class="w-full object-contain"
          />
        </div>
      </div>

      <!-- Link Produk Lain -->
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
import { ref } from 'vue'

const images = [
  '/asset/product/accessories/rell-laci-fe-slowmo/produk-1.png',
  '/asset/product/accessories/rell-laci-fe-slowmo/produk-2.png',
  '/asset/product/accessories/rell-laci-fe-slowmo/produk-3.png'
]

const selectedImage = ref(images[0])
const isZoomOpen = ref(false)

function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: 'glass-to-wall', name: 'Glass To Wall', image: '/asset/product/accessories/glass-to-wall.png' },
  { slug: 'glass-to-glass', name: 'Glass To Glass', image: '/asset/product/accessories/glass-to-glass.png' },
  { slug: 'glass-clip-l', name: 'Glass Clip L', image: '/asset/product/accessories/glass-clip-l.png' },
  { slug: 'glass-clip-p', name: 'Glass Clip P', image: '/asset/product/accessories/glass-clip-p.png' },
  { slug: 'glass-clip-u', name: 'Glass Clip U', image: '/asset/product/accessories/glass-clip-u.png' },
  { slug: 'glass-suction', name: 'Glass Suction', image: '/asset/product/accessories/glass-suction.png' },
  { slug: 'rivet', name: 'Rivet', image: '/asset/product/accessories/rivet.png' },
  { slug: 'mohair', name: 'Mohair', image: '/asset/product/accessories/mohair.png' },
  { slug: 'camlock', name: 'Camlock', image: '/asset/product/accessories/camlock.png' },
  { slug: 'silicone', name: 'Silicone', image: '/asset/product/accessories/silicone.png' },
  { slug: 'tembak-silicone', name: 'Tembak Silicone', image: '/asset/product/accessories/tembak-silicone.png' },
    { slug: 'rell-laci-fe', name: 'Rell Laci FE', image: '/asset/product/accessories/rell-laci-fe.png' },
  // { slug: 'rell-laci-fe-slowmo', name: 'Rell Laci FE Slowmo', image: '/asset/product/accessories/rell-laci-fe-slowmo.png' },
  { slug: 'engsel-sendok-mini', name: 'Engsel Sendok Mini', image: '/asset/product/accessories/engsel-sendok-mini.png' }
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
