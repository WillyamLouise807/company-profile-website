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
            <RouterLink to="/produk/roller" class="hover:underline text-black font-medium">Roller</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Sliding Door 380</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Sliding Door 380</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Caster Roda 380 Glatino dirancang untuk memberikan mobilitas yang halus, aman, dan tahan lama pada berbagai peralatan atau furnitur. Dengan pilihan ukuran beragam dan kapasitas beban hingga 150 kg, caster ini hadir dengan fitur anti-selip dan anti-korosi, sehingga cocok digunakan di berbagai kondisi.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Jenis: Caster Roda (Tetap, Putar, atau Kombinasi)</p>
            <p class="capitalize text-sm sm:text-base">Diameter Roda: 50mm, 60mm, 75mm, 100mm</p>
            <p class="capitalize text-sm sm:text-base">Lebar Roda: 20mm, 25mm, 30mm</p>
            <p class="capitalize text-sm sm:text-base">Tinggi Caster: 50mm, 60mm, 75mm, 100mm</p>
            <p class="capitalize text-sm sm:text-base">Kapasitas Beban: 50kg, 100kg, 150kg</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-roller-caster-aluminium-bahan-roda-ppc-for-roda-untuk-troli-kursi-meja-etalase-grobak-trolley-furniture-roller-1730966481009477358?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Roller-Caster-Aluminium-Bahan-Roda-PPC-for-Roda-Untuk-Troli-Kursi-Meja-Etalase-Grobak-Trolley-Furniture-i.1442585495.27875800042" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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
      <div class="mt-14 border-t border-gray-200 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">
          Dimensi Produk
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="/asset/product/roller/sliding-door-380/ukuran-hitam.png"
            alt="Ukuran 1"
            class="rounded-xl shadow-md bg-white p-4 cursor-zoom-in object-contain 
                  w-full sm:w-3/4 md:w-1/2 
                  h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80"
            @click="openZoom('/asset/product/roller/sliding-door-380/ukuran-hitam.png')"
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

      <!-- Link Produk Lain -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <NuxtLink
              v-for="item in katalogLinks"
              :key="item.slug"
              :to="`/produk/katalog-14/${item.slug}`"
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
import { ref } from 'vue'

const images = [
  '/asset/product/roller/sliding-door-380/produk-1.png',
  '/asset/product/roller/sliding-door-380/produk-2.png',
  '/asset/product/roller/sliding-door-380/produk-3.png'
]

const selectedImage = ref(images[0])
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
  { slug: 'sliding-track', name: 'Sliding Track', image: '/asset/product/roller/sliding-track.png' },
  { slug: 'roda-pintu-lipat', name: 'Roda Pintu Lipat', image: '/asset/product/roller/roda-pintu-lipat.png' },
  { slug: 'showcase', name: 'Showcase', image: '/asset/product/roller/showcase.png' },
  // { slug: 'sliding-door-380', name: 'Sliding Door 380', image: '/asset/product/roller/sliding-door-380.png' },
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
