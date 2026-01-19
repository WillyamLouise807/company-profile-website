<template>
 <div class="bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">

      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li><RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink></li>
          <li>/</li>
          <li><RouterLink to="/produk/pull-handle" class="hover:underline text-black font-medium">Pull Handle</RouterLink></li>
          <li>/</li>
          <li class="text-black font-semibold">Pull Handle 21 SS</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pull Handle 21 SS</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino Pull Handle type 21 with SN/SS finish provides an elegant and sturdy touch to your aluminum, wood, or glass door.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <!-- <p class="capitalize text-sm sm:text-base">Color: {{ selectedColorLabel }}</p> -->
            <p class="capitalize text-sm sm:text-base">Size: {{ selectedSizeLabel }}</p>            
            <p class="capitalize text-sm sm:text-base">Material: Stainless Steel SUS 201</p>            
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available on Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar -->
        <div class="space-y-6 flex flex-col items-center">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedColorLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Product Dimensions</h2>
        <div class="flex justify-center">
          <img
            :src="currentUkuranImage"
            alt="Product Dimensions Handle 21"
            class="rounded-xl shadow-md max-w-md w-full bg-white p-4 cursor-zoom-in"
            @click="zoomImage(currentUkuranImage)"
          />
        </div>
      </div>

      <!-- Zoom Modal -->
      <div v-if="isZoomOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" @click.self="toggleZoom">
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img :src="zoomedImage" alt="Zoomed" class="w-full object-contain" />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-4 sm:px-6 lg:px-8">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-6/${item.slug}`"
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
import { ref } from 'vue'

// Hanya satu warna dan satu ukuran
import productImage from '/asset/product/pull-handle/handle-21/sn-ss.png'
import ukuranImage from '/asset/product/pull-handle/handle-21/ukuran-hitam.png' // jika memang sama

const selectedColorLabel = 'SN/SS'
const selectedSizeLabel = '20 × 170 MM'

const selectedImage = ref(productImage)
const currentUkuranImage = ref(ukuranImage)

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
{ slug: 'handle-c', name: 'Pull Handle C', image: '/asset/product/pull-handle/handle-c.png'},
  { slug: 'handle-p', name: 'Pull Handle P', image: '/asset/product/pull-handle/handle-p.png'},
  { slug: 'handle-d', name: 'Pull Handle D', image: '/asset/product/pull-handle/handle-d.png'},
  { slug: 'handle-s', name: 'Pull Handle S', image: '/asset/product/pull-handle/handle-s.png'},
  { slug: 'handle-b', name: 'Pull Handle Bulat', image: '/asset/product/pull-handle/handle-b.png'},
  { slug: 'handle-h', name: 'Pull Handle H', image: '/asset/product/pull-handle/handle-h.png'},
  // { slug: 'handle-21', name: 'Pull Handle 21 SS', image: '/asset/product/pull-handle/handle-21.png'},
];
</script>

<style>

</style>