<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/mortise-lock" class="hover:underline text-black font-medium">Mortise Lock</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">909</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Mortise Lock 909</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Mortise lock Glatino dirancang untuk memberikan keamanan maksimal dengan tampilan yang tetap rapi dan modern. Menggunakan bahan aluminium premium yang kokoh, produk ini cocok digunakan untuk berbagai jenis pintu dengan kebutuhan penguncian yang presisi dan tahan lama.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>          
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Jenis: Mortise Lock</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Premium</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: BL Perol 30mm + CYL 65mm</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-mortise-lock-body-perol-cylinder-material-aluminium-premium-anti-karat-1731013661260154606?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Set-Mortise-Lock-Body-Perol-Cylinder-Material-Aluminium-i.1442585495.29626773379?sp_atk=a53c9c2e-8b96-4aee-92c7-af1f8dd11340&xptdk=a53c9c2e-8b96-4aee-92c7-af1f8dd11340" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar -->
        <div class="space-y-6 flex flex-col items-center">
          <img
            :src="productImage"
            alt="Mortise Lock 909"
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
            alt="Ukuran Door Lock 909"
            class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
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
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            :src="ukuranImage"
            alt="Zoomed Ukuran Door Lock 909"
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
import { ref } from 'vue'

import hitam from '@/assets/product/mortise-lock/909/hitam.png'
import ukuran from '@/assets/product/mortise-lock/909/ukuran-hitam.png'

const productImage = hitam
const ukuranImage = ukuran

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
