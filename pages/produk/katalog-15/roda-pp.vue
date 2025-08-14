<template>
  <div class="bg-white font-poppins text-black">
    <div class="container mx-auto px-4 sm:px-6 py-10 mt-10">
      
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/roller-caster" class="hover:underline text-black font-medium">Roller Caster</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Roda PP</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">

        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Roda PP</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Roda berbahan Polypropylene (PP) tersedia dalam berbagai warna dan ukuran.
            Pilihan varian dengan rem dan tanpa rem sesuai kebutuhan Anda.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Spesifikasi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Warna: {{ selectedVariant.label }}</p>
            <p class="capitalize text-sm sm:text-base">Ukuran: {{ selectedVariant.size }} Inch</p>
            <p class="capitalize text-sm sm:text-base">Varian: {{ selectedVariant.brake ? 'Dengan Rem' : 'Tanpa Rem' }}</p>
            <p class="capitalize text-sm sm:text-base">Bahan: Polypropylene (PP)</p>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar & Pilihan -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedVariant.image"
              :src="selectedVariant.image"
              :alt="`${selectedVariant.size} Inch - ${selectedVariant.label}`"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Pilihan Varian -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full">
            <div
              v-for="(variant, index) in variants"
              :key="index"
              @click="selectVariant(index)"
              :class="[
                'cursor-pointer p-2 rounded-lg border flex flex-col items-center transition',
                selectedIndex === index
                  ? 'border-red-600 ring-2 ring-red-600'
                  : 'border-gray-300 hover:border-gray-500'
              ]"
            >
              <img
                :src="variant.image"
                :alt="`${variant.size} Inch - ${variant.label}`"
                class="w-24 h-24 object-contain mb-2"
              />
              <span class="text-xs text-center leading-tight">
                {{ variant.label }} - {{ variant.size }}"
                <br />
                {{ variant.brake ? 'Dengan Rem' : 'Tanpa Rem' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import FooterComponent from '@/components/footer.vue'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

interface Variant {
  label: string
  size: number
  brake: boolean
  image: string
}

const variants: Variant[] = [
  { label: "Biasa", size: 2, brake: true, image: "/asset/product/roller-caster/roda-pp/2-inch-biasa-dengan-rem.png" },
  { label: "Merah", size: 2, brake: true, image: "/asset/product/roller-caster/roda-pp/2-inch-merah-dengan-rem.png" },
  { label: "Merah", size: 2, brake: false, image: "/asset/product/roller-caster/roda-pp/2-inch-merah-tanpa-rem.png" },
  { label: "Putih", size: 3, brake: true, image: "/asset/product/roller-caster/roda-pp/3-inch-putih-dengan-rem.png" },
  { label: "Putih", size: 3, brake: false, image: "/asset/product/roller-caster/roda-pp/3-inch-putih-tanpa-rem.png" }
]

const selectedIndex = ref(0)

const selectedVariant = computed<Variant>(() => {
  return variants[selectedIndex.value] ?? variants[0]!
})


function selectVariant(index: number) {
  selectedIndex.value = index
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
