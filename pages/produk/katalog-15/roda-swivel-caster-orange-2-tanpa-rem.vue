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
            <RouterLink to="/produk/roller-caster" class="hover:underline text-black font-medium">Roller Caster</RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Roda Swivel Caster Orange 2" Tanpa Rem</li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Roda Swivel Caster Orange 2" Tanpa Rem</h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Roda karet berkualitas tinggi untuk berbagai aplikasi industri dan komersial, menawarkan daya tahan, traksi, dan performa optimal tanpa sistem rem.
          </p>

          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Deskripsi Produk:</h2>
            <p class="capitalize text-sm sm:text-base">Brand: Glatino</p>
            <p class="capitalize text-sm sm:text-base">Jenis: Tanpa Rem Swivel</p>            
            <p class="capitalize text-sm sm:text-base">Material: PVC</p>
            <p class="capitalize text-sm sm:text-base">Dimensi: 2 Inch</p>            
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">Tersedia di Marketplace:</h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a href="https://www.tokopedia.com/glatino-official-store" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/tokopedia 1.png" alt="Tokopedia" class="w-14 sm:w-16" />
              </a>
              <a href="https://shopee.co.id/glatino.official" target="_blank" rel="noopener noreferrer" class="hover:scale-105 transition-transform">
                <img src="/asset/product/shopee 1.png" alt="Shopee" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Gambar Produk -->
        <div class="flex justify-center items-center w-full">
          <img
            src="/asset/product/roller-caster/roda-swivel-caster-orange-2-tanpa-rem.png"
            alt="Roda Pintu Lipat 360"
            class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
          />
        </div>
      </div>

      <!-- Dimensi -->
      <!-- <div class="mt-14 border-t border-gray-700 pt-10">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-center md:text-left">Dimensi Produk</h2>
        <div class="flex flex-col items-center">
          <img
            src="/asset/product/alumunium-lock/ss-201/ukuran-hitam.png"
            alt="Ukuran Patch Fitting PT-10"
            class="rounded-xl shadow-md max-w-xl w-full bg-white p-4 cursor-zoom-in"
            @click="toggleZoom"
          />
          <p class="text-sm text-gray-500 mt-4 text-center">*Gambar hanya ilustrasi ukuran secara proporsional</p>
        </div>
      </div> -->

      <!-- Zoom Modal -->
      <!-- <div
        v-if="isZoomOpen"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl w-full">
          <img
            src="/asset/product/alumunium-lock/ss-201/ukuran-hitam.png"
            alt="Zoomed Ukuran Patch Fitting PT-10"
            class="w-full object-contain"
          />
        </div>
      </div> -->

      <!-- Link Produk Lain di Katalog Sama -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">SEE OUR OTHER PRODUCT IN THIS CATALOG</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            <NuxtLink
              v-for="item in katalogLinks"
              :key="item.slug"
              :to="`/produk/katalog-15/${item.slug}`"
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

const isZoomOpen = ref(false)
function toggleZoom() {
  isZoomOpen.value = !isZoomOpen.value
}

const katalogLinks = [
  { slug: 'roda-gepeng-rubber-2-tanpa-rem', name: 'Roda Gepeng Rubber 2" Tanpa Rem', image: '/asset/product/roller-caster/roda-gepeng-rubber-2-tanpa-rem.png' },
  { slug: 'roda-gepeng-rubber-2-dengan-rem', name: 'Roda Gepeng Rubber 2" Dengan Rem', image: '/asset/product/roller-caster/roda-gepeng-rubber-2-dengan-rem.png' },
  { slug: 'roda-rc-2-bulat', name: 'Roda RC 2" Bulat', image: '/asset/product/roller-caster/roda-rc-2-bulat.png' },
  { slug: 'roda-gepeng-red-pp-2-tanpa-rem', name: 'Roda Gepeng Red PP 2" Tanpa Rem', image: '/asset/product/roller-caster/roda-gepeng-red-pp-2-tanpa-rem.png' },
  { slug: 'roda-gepeng-red-pp-2-dengan-rem', name: 'Roda Gepeng Red PP 2" Dengan Rem', image: '/asset/product/roller-caster/roda-gepeng-red-pp-2-dengan-rem.png' },
  { slug: 'roda-gepeng-nylon-2-tanpa-rem', name: 'Roda Gepeng Nylon 2" Tanpa Rem', image: '/asset/product/roller-caster/roda-gepeng-nylon-2-tanpa-rem.png' },
  { slug: 'roda-gepeng-nylon-2-dengan-rem', name: 'Roda Gepeng Nylon 2" Dengan Rem', image: '/asset/product/roller-caster/roda-gepeng-nylon-2-dengan-rem.png' },
  { slug: 'roda-gepeng-white-pp-3-tanpa-rem', name: 'Roda Gepeng White PP 3" Tanpa Rem', image: '/asset/product/roller-caster/roda-gepeng-white-pp-3-tanpa-rem.png' },
  { slug: 'roda-gepeng-white-pp-3-dengan-rem', name: 'Roda Gepeng White PP 3" Dengan Rem', image: '/asset/product/roller-caster/roda-gepeng-white-pp-3-dengan-rem.png' },
  { slug: 'roda-gepeng-rubber-3-tanpa-rem', name: 'Roda Gepeng Rubber 3" Tanpa Rem', image: '/asset/product/roller-caster/roda-gepeng-rubber-3-tanpa-rem.png' },
  { slug: 'roda-gepeng-rubber-3-dengan-rem', name: 'Roda Gepeng Rubber 3" Dengan Rem', image: '/asset/product/roller-caster/roda-gepeng-rubber-3-dengan-rem.png' },  
  { slug: 'roda-fixed-caster-orange-2-tanpa-rem', name: 'Roda Fixed Caster Orange 2" Tanpa Rem', image: '/asset/product/roller-caster/roda-fixed-caster-orange-2-tanpa-rem.png' },  
  // { slug: 'roda-swivel-caster-orange-2-tanpa-rem', name: 'Roda Swivel Caster Orange 2" Tanpa Rem', image: '/asset/product/roller-caster/roda-swivel-caster-orange-2-tanpa-rem.png' },
  { slug: 'roda-swivel-caster-orange-2-dengan-rem', name: 'Roda Swivel Caster Orange 2" Dengan Rem', image: '/asset/product/roller-caster/roda-swivel-caster-orange-2-dengan-rem.png' },
];
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
