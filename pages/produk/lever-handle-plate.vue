<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background -->
      <!-- <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div> -->
      <div class="absolute inset-0 bg-white/70 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-red-700 text-sm opacity-90 pt-20 sm:pt-28 md:pt-36">
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-600">Lever Handle Plate</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Lever Handle Plate Series</h1>
            <p class="text-base sm:text-lg text-gray-700">Koleksi lengkap kunci pintu premium dengan teknologi terkini</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Produk dalam Kategori -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Produk Lever Handle Plate</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in doorLockProducts"
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
                :to="`/produk/katalog-1/${product.slug}`"
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
import bgImage from '@/assets/product/door-lock/door-lock-banner.jpg';
import FooterComponent from '@/components/footer.vue'

const doorLockProducts = [
  {
    id: 1,
    name: "GLT-839",
    description: "KeyPro Set Kunci Pintu Handle Premium Door Lock Aluminium",
    slug: "839",
    image: "/asset/product/door-lock/839.png"
  },
  {
    id: 2,
    name: "GLT-939",
    description: "Luxlock Full Set Kunci Pintu Material Aluminium Anti Karat",
    slug: "939",
    image: "/asset/product/door-lock/939.png"
  },
  {
    id: 3,
    name: "GLT-989",
    description: "LockExpert Set Kunci Pintu Premium Material Aluminium Anti Karat",
    slug: "989",
    image: "/asset/product/door-lock/989.png"
  },
  {
    id: 5,
    name: "Expanda",
    description: "Set Kunci Pintu Handle Kawat Nyamuk Type Door Loock Premium",
    slug: "expanda",
    image: "/asset/product/door-lock/expanda.png"
  },
  {
    id: 5,
    name: "802",
    description: "LockStyle Set Kunci Pintu Untuk Kamar Mandi Bahan Aluminium Anti Karat",
    slug: "802",
    image: "/asset/product/door-lock/802.png"
  },
  {
    id: 6,
    name: "902",
    description: "Bathroom Buddy Set Kunci Kamar mandi Material Aluminium Anti Karat",
    slug: "902",
    image: "/asset/product/door-lock/902.png"
  }
]
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>