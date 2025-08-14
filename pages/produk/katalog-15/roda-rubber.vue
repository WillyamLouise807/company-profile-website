<template>
  <div class="bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/roller-caster" class="hover:underline text-black font-medium">Roller Caster</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Roda Rubber</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Roda Rubber</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Roda karet berkualitas tinggi yang tersedia dalam ukuran 2 inci dan 3 inci, dengan opsi
            <span class="font-semibold">dengan rem</span> atau <span class="font-semibold">tanpa rem</span>.
            Cocok untuk kebutuhan rumah tangga maupun industri ringan.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ selectedItem?.ukuran || '' }}</p>
            <p class="capitalize text-sm sm:text-base">Varian: {{ selectedItem?.varian || '' }}</p>
            <p class="capitalize text-sm sm:text-base">Bahan: Rubber</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
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

        <!-- Gambar & Pilihan Kombinasi -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              :alt="selectedLabel"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Grid Kombinasi (seperti warna di 201.vue) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="group cursor-pointer text-center border rounded-xl p-3 transition hover:shadow-md"
              :class="{
                'ring-2 ring-red-600 border-red-600': selectedKey === item.key,
                'border-gray-300': selectedKey !== item.key
              }"
              @click="selectItem(item)"
            >
              <!-- bisa thumbnail kecil biar mirip swatch -->
              <img :src="item.image" :alt="item.label" class="w-12 h-12 mx-auto object-contain" />
              <p class="text-xs mt-2 font-medium capitalize group-hover:text-red-600">
                {{ item.ukuran }}
              </p>
              <p class="text-[11px] text-gray-600">{{ item.varian }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- (Opsional) Section dimensi: tidak disertakan karena belum ada file ukuran -->
      <!-- Tambahkan bila sudah ada gambar ukuran -->
    </div>
  </div>

  <FooterComponent />
</template>

<script setup lang="ts">
import FooterComponent from '@/components/footer.vue'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

// Gambar
import img2Rem from '/asset/product/roller-caster/roda-rubber/2inch-dengan-rem.png'
import img2NoRem from '/asset/product/roller-caster/roda-rubber/2inch-tanpa-rem.png'
import img3Rem from '/asset/product/roller-caster/roda-rubber/3inch-dengan-rem.png'
import img3NoRem from '/asset/product/roller-caster/roda-rubber/3inch-tanpa-rem.png'

// Semua kombinasi ditaruh di satu grid (meniru "warna" di 201.vue)
const items = [
  { key: '2-rem', ukuran: '2 Inch', varian: 'Dengan Rem', label: '2 Inch - Dengan Rem', image: img2Rem },
  { key: '2-norem', ukuran: '2 Inch', varian: 'Tanpa Rem', label: '2 Inch - Tanpa Rem', image: img2NoRem },
  { key: '3-rem', ukuran: '3 Inch', varian: 'Dengan Rem', label: '3 Inch - Dengan Rem', image: img3Rem },
  { key: '3-norem', ukuran: '3 Inch', varian: 'Tanpa Rem', label: '3 Inch - Tanpa Rem', image: img3NoRem }
]

const selectedKey = ref(items[0]!.key)
const selectedItem = computed(() => items.find(i => i.key === selectedKey.value))
const selectedImage = computed(() => selectedItem.value?.image || '')
const selectedLabel = computed(() => selectedItem.value?.label || '')

function selectItem(item: typeof items[number]) {
  selectedKey.value = item.key
}
</script>

<style scoped>
.font-poppins { font-family: 'Poppins', sans-serif; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
