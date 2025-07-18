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
            <RouterLink to="/produk/cylinder" class="hover:underline text-white font-medium">Cylinder</RouterLink>
          </li>
          <li>/</li>
          <li class="text-white font-semibold">811</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Cylinder 811</h1>
          <p class="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
            Cylinder Lock Tabung dari Glatino dirancang untuk memberikan perlindungan optimal dengan fitur keamanan tinggi seperti anti-pick dan anti-drill. Terbuat dari aluminium premium dengan finishing chrome, produk ini cocok untuk berbagai kebutuhan penguncian, baik rumah tinggal maupun ruang komersial.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>          
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Jenis: Cylinder Lock Tabung</p>
            <p class="capitalize text-sm sm:text-base">Material: Aluminium Premium</p>
            <p class="capitalize text-sm sm:text-base">Finishing: Chrome</p>
            <p class="capitalize text-sm sm:text-base">Kunci: 3 Anak Kunci</p>
            <p class="capitalize text-sm sm:text-base">Jumlah Pin: 5 pin, 6 pin</p>
            <p class="capitalize text-sm sm:text-base">Tipe Kunci: Putar (Turnkey)</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store/glatino-cylinder-pro-kunci-tabung-pengaman-bahan-aluminium-anti-karat-harga-terjangkau-1730966763212343022?extParam=src%3Dshop%26whid%3D18402450&aff_unique_id=&channel=others&chain_key=" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/Glatino-Cylinder-Pro-Kunci-Tabung-Pengaman-Material-Aluminium-i.1442585495.29675790039?sp_atk=820b6c40-f5dc-4964-b993-41f7754e80df&xptdk=820b6c40-f5dc-4964-b993-41f7754e80df" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="@/assets/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar -->
        <div class="space-y-6 flex flex-col items-center">
          <img
            :src="productImage"
            alt="Mortise Lock 808"
            class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-[#1a1a1a]"
          />
        </div>
      </div>

      <!-- Dimensi -->
      <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            :src="ukuranImage"
            alt="Ukuran Door Lock 808"
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
            alt="Zoomed Ukuran Door Lock 808"
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

import hitam from '@/assets/product/cylinder/811/hitam.png'
import ukuran from '@/assets/product/cylinder/811/ukuran-putih.png'

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
