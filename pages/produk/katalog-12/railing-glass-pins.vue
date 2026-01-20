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
          <li class="text-black font-semibold">Road Glass Connector</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Road Glass Connector</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Road Glass Connector is designed to connect glass panels to rods or pipes, providing a secure and stylish solution for various applications. Made from high-quality materials, it ensures durability and a sleek appearance.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <p class="capitalize text-sm sm:text-base">Material: SS304</p>
            <p class="capitalize text-sm sm:text-base">Color: PSS</p>            
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar Produk -->
        <div class="flex justify-center items-center w-full">
          <img
            src="/asset/product/accessories/railing-glass-pins/produk.png"
            alt="Accessories Glass To Wall"
            class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
          />
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-200 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
          Product Dimensions
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="/asset/product/accessories/railing-glass-pins/ukuran.png"
            alt="Ukuran 1"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                  w-full sm:w-3/4 md:w-1/2 
                  h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/accessories/railing-glass-pins/ukuran.png')"
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
        *This image is only an illustration of the product dimensions
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
import { ref } from 'vue'

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
  { slug: 'glass-to-wall', name: 'Shower Hinger 90°', image: '/asset/product/accessories/glass-to-wall.png' },
  { slug: 'glass-to-glass', name: 'Shower Hinger 180°', image: '/asset/product/accessories/glass-to-glass.png' },
  { slug: 'glass-clip-l', name: 'Glass Clip L', image: '/asset/product/accessories/glass-clip-l.png' },
  // { slug: 'glass-clip-p', name: 'Glass Clip Persegi', image: '/asset/product/accessories/glass-clip-p.png' },
  { slug: 'glass-clip-u', name: 'Glass Clip U', image: '/asset/product/accessories/glass-clip-u.png' },
  { slug: 'glass-suction', name: 'Glass Suction Plate', image: '/asset/product/accessories/glass-suction.png' },
  { slug: 'rod-glass-connector', name: 'Rod Glass Connector', image: '/asset/product/accessories/rod-glass-connector.png' },
  { slug: 'railing-glass-pins', name: 'Railing Glass Pins', image: '/asset/product/accessories/railing-glass-pins.png' },
  { slug: 'wall-rod-connector', name: 'Wall Rod Connector', image: '/asset/product/accessories/wall-rod-connector.png' },
  { slug: 'swivel-rod-connector', name: 'Swivel Rod Connector', image: '/asset/product/accessories/swivel-rod-connector.png' },
  { slug: 'corner-screen-single', name: 'Corner Screen Single', image: '/asset/product/accessories/corner-screen-single.png' },
  { slug: 'corner-screen-double', name: 'Corner Screen Double', image: '/asset/product/accessories/corner-screen-double.png' },
  { slug: 'handle-bamboo', name: 'Handle Bamboo', image: '/asset/product/accessories/handle-bamboo.png' },  
  { slug: 'handle-swing', name: 'Handle Swing', image: '/asset/product/accessories/handle-swing.png' },
  { slug: 'bracket-ikan', name: 'Bracket Ikan', image: '/asset/product/accessories/bracket-ikan.png' },
  { slug: 'rivet', name: 'Aluminium Blind Rivet', image: '/asset/product/accessories/rivet.png' },
  { slug: 'roller-shutter-lock', name: 'Roller Shutter Lock', image: '/asset/product/accessories/roller-shutter-lock.png' },
  { slug: 'engsel-salon', name: 'Engsel Salon', image: '/asset/product/accessories/engsel-salon.png' },
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

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
