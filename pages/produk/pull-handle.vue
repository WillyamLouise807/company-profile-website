<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background --> 
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="absolute inset-0 bg-white/70 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-red-700 text-sm opacity-90 pt-20 sm:pt-28 md:pt-36">
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-600">Pull Handle</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Pull Handle Series</h1>
            <p class="text-base sm:text-lg text-gray-700">
              Koleksi handle tarik berkualitas tinggi dengan desain ergonomis dan bahan tahan lama untuk berbagai jenis pintu.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Produk Pull Handle -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Produk Pull Handle</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in pullHandleProducts"
            :key="index"
            class="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition transform hover:scale-[1.02]"
          >
            <img 
              :src="product.image" 
              :alt="product.name" 
              class="w-full h-64 object-contain p-4 bg-white"
            />
            <div class="p-6 text-gray-800">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-sm text-gray-600 mb-4">{{ product.description }}</p>
              <NuxtLink 
                :to="`/produk/katalog-6/${product.slug}`"
                class="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-flex items-center transition"
              >
                Detail Produk
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
// ✅ Ganti nama array jadi relevan
import bgImage from '@/assets/product/pull-handle/pull-handle-banner.png';
import FooterComponent from '@/components/footer.vue'

const pullHandleProducts = [
{
  id: 1,
  name: "Handle C",
  description: "Handle tarik model C bahan aluminium tahan karat",
  slug: "handle-c",
  image: "/asset/product/pull-handle/handle-c.png"
},
{
  id: 2,
  name: "Handle Pisang",
  description: "Handle tarik model Pisang bahan aluminium berkualitas",
  slug: "handle-p",
  image: "/asset/product/pull-handle/handle-p.png"
},
{
  id: 3,
  name: "Handle D",
  description: "Handle tarik model D bahan aluminium berkualitas",
  slug: "handle-d",
  image: "/asset/product/pull-handle/handle-d.png"
},
{
  id: 4,
  name: "Handle Shower",
  description: "Handle tarik model S bahan aluminium berkualitas",
  slug: "handle-s",
  image: "/asset/product/pull-handle/handle-s.png"
},
{
  id: 5,
  name: "Handle H Bulat",
  description: "Handle tarik model B bahan aluminium berkualitas",
  slug: "handle-b",
  image: "/asset/product/pull-handle/handle-b.png"
},
{
  id: 6,
  name: "Handle H Hollow",
  description: "Handle tarik model H bahan aluminium berkualitas",
  slug: "handle-h",
  image: "/asset/product/pull-handle/handle-h.png"
},
{
  id: 7,
  name: "Handle 21 SS",
  description: "Handle tarik model 21 bahan aluminium berkualitas",
  slug: "handle-21",
  image: "/asset/product/pull-handle/handle-21.png"
}
  // Tambahkan kembali produk lainnya di sini jika dibutuhkan.
]
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
