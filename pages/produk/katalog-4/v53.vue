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
          <li class="text-black font-semibold">FH-53</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Floor Hinge FH-53</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino FH-53 series floor hinges are the ideal solution for heavy doors that require stable and secure movement. With a complete, one-piece design, this product simplifies installation and provides extra durability and security for the door opening and closing system.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>
            <p class="capitalize text-sm sm:text-base">View: {{ selectedViewLabel }}</p>            
            <p class="capitalize text-sm sm:text-base">Size (L x W x H): 253 x 103 x 0</p>
            <p class="capitalize text-sm sm:text-base">Door Weight: 70 - 80 kgs</p>
            <p class="capitalize text-sm sm:text-base">Diameter Cylinder: 36mm Double Cylinder</p>
            <p class="capitalize text-sm sm:text-base">Max Door Width: 900mm</p>
            <p class="capitalize text-sm sm:text-base">Cover Material: SS 201 (1.0mm thick)</p>
            <p class="capitalize text-sm sm:text-base">Open Angle: 90° with wooden fitting</p>
            <p class="capitalize text-sm sm:text-base">Cement thickness: Iron 1.2mm (Outer Container)</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Available in Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Floor-Hinge-V53-V84-Set-Engsel-lantai-Material-Aluminium-Anti-Karat-i.1442585495.24290665306?sp_atk=9f703df0-2611-42d2-989a-cede323bc4c8&xptdk=9f703df0-2611-42d2-989a-cede323bc4c8" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
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
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Product Dimensions</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran Floor Hinge v53"
            class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
            @click="toggleZoom"
          />
          <p class="text-sm text-gray-500 mt-4 text-center">*This image is for illustration purposes only</p>
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
            alt="Zoomed Ukuran Floor Hinge v53"
            class="w-full object-contain"
          />
        </div>
      </div>

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
            <NuxtLink
              v-for="item in katalogLinks"
              :key="item.slug"
              :to="`/produk/katalog-4/${item.slug}`"
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
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

import luar from '/asset/product/floor-hinge/v53/luar.png'
import dalam from '/asset/product/floor-hinge/v53/dalam.png'
import ukuran from '/asset/product/floor-hinge/v53/ukuran-hitam.png'

const views = [
  { name: 'depan', label: 'Front', image: luar },
  { name: 'belakang', label: 'Back', image: dalam }
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

const katalogLinks = [
  // { slug: 'v53', name: 'Set V53', image: '/asset/product/floor-hinge/v53.png' },
  { slug: 'v84', name: 'Set FH-84', image: '/asset/product/floor-hinge/v84.png' },
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
