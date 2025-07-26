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
            <RouterLink to="/produk/floor-hinge" class="hover:underline text-black font-medium">Floor Hinge</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">V84</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Floor Hinge V84</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Engsel lantai Glatino seri V84 hadir sebagai solusi ideal untuk pintu berat yang membutuhkan pergerakan stabil dan aman. Dengan desain komplit dalam satu set, produk ini memudahkan pemasangan serta memberikan daya tahan dan keamanan ekstra pada sistem buka tutup pintu.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Tampilan: {{ selectedViewLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Jenis: Floor Hinge (Engsel Lantai)</p>
            <p class="capitalize text-sm sm:text-base">Tipe: V84</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Floor-Hinge-V53-V84-Set-Engsel-lantai-Material-Aluminium-Anti-Karat-i.1442585495.24290665306?sp_atk=9f703df0-2611-42d2-989a-cede323bc4c8&xptdk=9f703df0-2611-42d2-989a-cede323bc4c8" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
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
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran Floor Hinge v84"
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
            :src="ukuranImage"
            alt="Zoomed Ukuran Floor Hinge v84"
            class="w-full object-contain"
          />
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

import luar from '@/assets/product/floor-hinge/v84/luar.png'
import dalam from '@/assets/product/floor-hinge/v84/dalam.png'
import ukuran from '@/assets/product/floor-hinge/v84/ukuran-hitam.png'

const views = [
  { name: 'depan', label: 'Tampak Depan', image: luar },
  { name: 'belakang', label: 'Tampak Belakang', image: dalam }
]

const selectedView = ref(views[0]!.name)
const selectedImage = ref(views[0]!.image)
const ukuranImage = ukuran

const selectedViewLabel = computed(() => {
  return views.find(v => v.name === selectedView.value)?.label || ''
})

function selectView(view: typeof views[number]) {
  selectedView.value = view.name
  selectedImage.value = view.image
}

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}
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
