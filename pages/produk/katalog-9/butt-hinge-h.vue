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
          <li class="text-black font-semibold">Butt Hinge H</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Butt Hinge H</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Engsel aluminium model H berbahan stainless yang kokoh. Desain elegan untuk pintu modern.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Ukuran: 4 x 3 x 2 MM</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Stainless Material: SUS 201 SS</p>    
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Engsel-Stainlees-Sus-H-304-Material-Stainless-Hinge-Steel-i.1442585495.28625500839?sp_atk=32c410ef-bc32-4034-93b7-c0d4066b149d&xptdk=32c410ef-bc32-4034-93b7-c0d4066b149d" target="_blank" rel="noopener noreferrer">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <img
            :src="productImage"
            alt="Butt Hinge H"
            class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
          />
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


<script lang="ts" setup>
import { ref } from 'vue'

const productImage = '/asset/product/alumunium-lock/but-hinge-h/ss.png'
const ukuranImage = '/asset/product/alumunium-lock/but-hinge-h/ukuran-putih.png'

const isZoomOpen = ref(false)

const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: 'casement-lock', name: 'Casement Lock', image: '/asset/product/alumunium-lock/casement-lock.png'},
  { slug: 'crescent-lock', name: 'Crescent Lock', image: '/asset/product/alumunium-lock/crescent-lock.png'},
  { slug: 'a7', name: 'Sliding Lock A7', image: '/asset/product/alumunium-lock/a7.png' },
  { slug: 'zinc', name: 'Flush Handle  zinc', image: '/asset/product/alumunium-lock/zinc.png' },
  { slug: 'alumunium', name: 'Flush Handle  Aluminium', image: '/asset/product/alumunium-lock/alumunium.png' },
  { slug: 'ss-201', name: 'Flush Handle 201', image: '/asset/product/alumunium-lock/ss-201.png' },
  { slug: 'flushbolt', name: 'Flush Handle Flushbolt', image: '/asset/product/alumunium-lock/flushbolt.png' }, 
  { slug: 'butt-hinge-nylon', name: 'Butt Hinge Nylon', image: '/asset/product/alumunium-lock/butt-hinge-nylon.png' },
  { slug: 'butt-hinge-ss', name: 'Butt Hinge SS', image: '/asset/product/alumunium-lock/butt-hinge-ss.png' },
  // { slug: 'butt-hinge-h', name: 'Butt Hinge H', image: '/asset/product/alumunium-lock/butt-hinge-h.png' },
  { slug: '41054', name: 'Swing Lock 41054', image: '/asset/product/alumunium-lock/41054.png' },
  { slug: '41055', name: 'Swing Lock 41055', image: '/asset/product/alumunium-lock/41055.png' },
  { slug: '41066', name: 'Swing Lock 41066', image: '/asset/product/alumunium-lock/41066.png' },
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>