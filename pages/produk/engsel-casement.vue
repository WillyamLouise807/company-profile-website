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
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-600">Engsel Casement</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Engsel Casement Series</h1>
            <p class="text-base sm:text-lg text-gray-700">
              Engsel berkualitas tinggi untuk jendela dan pintu casement, dengan daya tahan maksimal dan gerakan yang stabil.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Produk Engsel Casement -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Produk Engsel Casement</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in floorHingeProduts"
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
                :to="`/produk/katalog-7/${product.slug}`"
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
import bgImage from '@/assets/product/engsel-casement/engsel-casement-banner.png';
import FooterComponent from '@/components/footer.vue';

const floorHingeProduts = [
{
  id: 1,
  name: "Nylon",
  description: "Set Engsel lantai Material Aluminium Anti Karat",
  slug: "nylon",
  image: "/asset/product/engsel-casement/nylon.png"
},
{
  id: 2,
  name: "Kuningan",
  description: "Set Engsel lantai Material Aluminium Anti Karat",
  slug: "kuningan",
  image: "/asset/product/engsel-casement/kuningan.png"
},
{
  id: 3,
  name: "2 Profile",
  description: "Set Engsel lantai Material Aluminium Anti Karat",
  slug: "2-profile",
  image: "/asset/product/engsel-casement/2-profile.png"
}
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>