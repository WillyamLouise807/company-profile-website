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
          <li class="text-black font-semibold">Showcase</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Showcase</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Showcase adalah rel berkualitas tinggi yang dirancang khusus untuk pintu geser. 
            Dengan desain yang kuat dan tahan lama, rel ini memastikan pergerakan pintu yang lancar dan stabil.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
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

        <!-- Gambar & Pilihan Tampilan -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedViewLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Pilihan Tampilan -->
          <div class="grid grid-cols-2 gap-4 w-full">
            <div
              v-for="(view, index) in views"
              :key="index"
              class="group cursor-pointer text-center border rounded-xl p-3 transition hover:shadow-md"
              :class="{
                'ring-2 ring-red-600 border-red-600': selectedView === view.name,
                'border-gray-700': selectedView !== view.name
              }"
              @click="selectView(view)"
            >
              <div class="text-black text-sm font-semibold capitalize">
                {{ view.label }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          <div
            v-for="(item, index) in dimensiImages"
            :key="index"
            class="flex flex-col items-center"
          >
            <img
              :src="item.src"
              :alt="item.label"
              class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
              @click="openZoom(item.src)"
            />
            <p class="mt-2 text-sm font-medium text-gray-700">{{ item.label }}</p>
          </div>
        </div>

        <p class="text-sm text-gray-500 mt-6 text-center">
          *Gambar hanya ilustrasi ukuran secara proporsional
        </p>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            :src="zoomImage"
            :alt="`Zoomed ${selectedViewLabel}`"
            class="w-full object-contain"
          />
        </div>
      </div>

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
import { ref, computed } from 'vue'

import besar from '/asset/product/roller/showcase/besar.png'
import kecil from '/asset/product/roller/showcase/kecil.png'

const views = [
  { name: 'depan', label: 'Tampak Depan', image: besar },
  { name: 'belakang', label: 'Tampak Belakang', image: kecil }
]

const selectedView = ref(views[0]!.name)
const selectedImage = ref(views[0]!.image)

const selectedViewLabel = computed(() => {
  return views.find(v => v.name === selectedView.value)?.label || ''
})

function selectView(view: typeof views[number]) {
  selectedView.value = view.name
  selectedImage.value = view.image
}

// Zoom logic
const isZoomOpen = ref(false)
const zoomImage = ref('')

function openZoom(img: string) {
  zoomImage.value = img
  isZoomOpen.value = true
}

function toggleZoom() {
  isZoomOpen.value = false
}

const dimensiImages = [
  { src: '/asset/product/roller/showcase/ukuran-besar.png', label: 'Ukuran Besar' },
  { src: '/asset/product/roller/showcase/ukuran-kecil.png', label: 'Ukuran Kecil' }
]

const katalogLinks = [
  { slug: 'sliding-track', name: 'Sliding Track', image: '/asset/product/roller/sliding-track.png' },
  { slug: 'roda-pintu-lipat', name: 'Roda Pintu Lipat', image: '/asset/product/roller/roda-pintu-lipat.png' },
  // { slug: 'showcase', name: 'Showcase', image: '/asset/product/roller/showcase.png' },
  { slug: 'sliding-door-380', name: 'Sliding Door 380', image: '/asset/product/roller/sliding-door-380.png' },
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
