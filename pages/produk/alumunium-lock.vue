<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="absolute inset-0 bg-white/40 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-red-700 text-sm opacity-90 pt-20 sm:pt-28 md:pt-36">
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-600">Aluminium Lock</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Aluminium Lock Series</h1>
            <p class="text-base sm:text-lg text-gray-700">
              Premium locks engineered for aluminum window and door systems, delivering maximum security with a sleek design and durable construction
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Produk dalam Kategori -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Aluminium Lock Products</h2>

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
                :to="`/produk/katalog-9/${product.slug}`"
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
import bgImage from '/asset/product/alumunium-lock/alumunium-lock-banner.png';
import FooterComponent from '@/components/footer.vue';

const floorHingeProduts = [
  {
    id: 1,
    name: "Crescent Lock",
    description: "CL-GLT",
    slug: "crescent-lock",
    image: "/asset/product/alumunium-lock/crescent-lock.png"
  },
  {
    id: 2,
    name: "Casement Handle",
    description: "HT-8118",
    slug: "casement-lock",
    image: "/asset/product/alumunium-lock/casement-lock.png"
  },
  {
    id: 3,
    name: "Sliding Lock A7",
    description: "A7-GLT",
    slug: "a7",
    image: "/asset/product/alumunium-lock/a7.png"
  },
  {
    id: 4,
    name: "Flush Handle Zinc",
    description: "HCZP",
    slug: "zinc",
    image:'/asset/product/alumunium-lock/zinc.png'
  },
  {
    id: 5,
    name: "Flush Handle Aluminium",
    description: "FH-135",
    slug: "alumunium",
    image:'/asset/product/alumunium-lock/alumunium.png'
  },
  {
    id: 6,
    name: "Flush Handle SS-201",
    description: "FH-201",
    slug: "ss-201",
    image:'/asset/product/alumunium-lock/ss-201.png'
  },
  {
    id: 7,
    name: "Flushbolt",
    description: "FB",
    slug: "flushbolt",
    image:'/asset/product/alumunium-lock/flushbolt.png'
  },
  {
    id: 8,
    name: "Butt Hinge Nylon",
    description: "EN",
    slug: "butt-hinge-nylon",
    image: "/asset/product/alumunium-lock/butt-hinge-nylon.png"
  },
  {
    id: 9,
    name: "Butt Hinge SS",
    description: "ES",
    slug: "butt-hinge-ss",
    image: "/asset/product/alumunium-lock/butt-hinge-ss.png"
  },
  {
    id: 10,
    name: "Butt Hinge H",
    description: "ES-432-H",
    slug: "butt-hinge-h",
    image: "/asset/product/alumunium-lock/butt-hinge-h.png"
  },
  {
    id: 11,
    name: "Swing Lock",
    description: "41054",
    slug: "41054",
    image: "/asset/product/alumunium-lock/41054.png"
  },
  {
    id: 12,
    name: "Sliding Lock",
    description: "41055",
    slug: "41055",
    image: "/asset/product/alumunium-lock/41055.png"
  },
  {
    id: 13,
    name: "Sliding Lock Kait Besar",
    description: "41066",
    slug: "41066",
    image: "/asset/product/alumunium-lock/41066.png"
  },
  // {
  //   id: 13,
  //   name: "Engsel Piano",
  //   description: "Set Engsel lantai Material Aluminium Anti Karat",
  //   slug: "engsel-piano",
  //   image: "/asset/product/alumunium-lock/engsel-piano.png"
  // },
  // {
  //   id: 14,
  //   name: "Engsel Salon",
  //   description: "Set Engsel lantai Material Aluminium Anti Karat",
  //   slug: "engsel-salon",
  //   image: "/asset/product/alumunium-lock/engsel-salon.png"
  // }
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>