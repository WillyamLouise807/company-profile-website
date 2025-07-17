<template>
  <div class="bg-black">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-white">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-white font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/door-lock" class="hover:underline text-white font-medium">Door Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-white font-semibold">939</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Door Lock 939</h1>
          <p class="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
            Handle pintu Glatino AL/GLT 939 dirancang khusus untuk profil aluminium 9055. Dengan material stainless steel pada face plate dan silinder berbahan zinc alloy, set ini menawarkan ketahanan dan keamanan yang seimbang, cocok untuk kebutuhan rumah maupun ruang kerja.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedColorLabel }}</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Material: Face Plate Stainless Steel</p>
            <p class="capitalize text-sm sm:text-base">Cylinder: Zinc Alloy + 3 Anak Kunci Komputer</p>
            <p class="capitalize text-sm sm:text-base">Type: AL/GLT 939</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-glt-939-luxlock-set-kunci-pintu-material-aluminium-anti-karat-1731487235139405550?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-GLT-939-Luxlock-Set-Kunci-Pintu-Material-Aluminium-Anti-Karat-i.1442585495.28772754108?sp_atk=a121f7e4-2146-445f-b9d8-036b33184585&xptdk=a121f7e4-2146-445f-b9d8-036b33184585" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Pilihan Warna -->
        <div class="space-y-6 flex flex-col items-center">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedColorLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-[#1a1a1a]"
            />
          </transition>

          <!-- Warna -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="group cursor-pointer text-center border rounded-xl p-3 transition hover:shadow-md"
              :class="{
                'ring-2 ring-red-600 border-red-600': selectedColor === color.name,
                'border-gray-700': selectedColor !== color.name
              }"
              @click="selectColor(color)"
            >
              <div
                class="w-8 h-8 mx-auto rounded-full border"
                :style="{ backgroundColor: color.hex }"
              />
              <p class="text-xs mt-2 font-medium capitalize group-hover:text-red-600">
                {{ color.label }}
              </p>
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
            alt="Ukuran Door Lock 939"
            class="rounded-xl shadow-md max-w-xl w-full bg-[#1a1a1a] p-4 cursor-zoom-in"
            @click="toggleZoom"
          />
          <p class="text-sm text-gray-400 mt-4 text-center">*Gambar hanya ilustrasi ukuran secara proporsional</p>
        </div>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-[#111] p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            :src="ukuranImage"
            alt="Zoomed Ukuran Door Lock 939"
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

import hitam from '@/assets/product/door-lock/939/hitam.png'
import cokelat from '@/assets/product/door-lock/939/cokelat.png'
import putih from '@/assets/product/door-lock/939/putih.png'
import snss from '@/assets/product/door-lock/939/sn-ss.png'
import ukuran from '@/assets/product/door-lock/939/ukuran-putih.png'

const colors = [
  { name: 'hitam', label: 'Hitam', hex: '#1f1f1f', image: hitam },
  { name: 'cokelat', label: 'Cokelat', hex: '#8B4513', image: cokelat },
  { name: 'putih', label: 'Putih', hex: '#eeeeee', image: putih },
  { name: 'sn-ss', label: 'Stainless Steel / Satin Nickel', hex: '#bdc3c7', image: snss }
]

const selectedColor = ref(colors[0].name)
const selectedImage = ref(colors[0].image)
const ukuranImage = ukuran

const selectedColorLabel = computed(() => {
  return colors.find(c => c.name === selectedColor.value)?.label || ''
})

function selectColor(color: typeof colors[number]) {
  selectedColor.value = color.name
  selectedImage.value = color.image
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
