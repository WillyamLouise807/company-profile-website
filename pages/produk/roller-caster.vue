<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="absolute inset-0 bg-white/20 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-red-700 text-sm opacity-90 pt-20 sm:pt-28 md:pt-36">
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-100">Roller Caster</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Roller Caster Series</h1>
            <p class="text-base sm:text-lg text-gray-100">
              A premium collection of high-quality caster wheels designed for smooth, stable, and long-lasting mobility across various applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Produk dalam Kategori -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Roller Caster Products</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in rollerProducts"
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
                :to="`/produk/katalog-15/${product.slug}`"
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
import bgImage from '/asset/product/roller-caster/roller-caster-banner.png';
import FooterComponent from '@/components/footer.vue';

const rollerProducts = [
  {
    id: 1,
    name: "Roda Gepeng Rubber 2\"",
    description: "10050",
    slug: "roda-gepeng-rubber-2-tanpa-rem",
    image: '/asset/product/roller-caster/roda-gepeng-rubber-2-tanpa-rem.png'
  },
  {
    id: 2,
    name: "Roda Gepeng Rubber 2\"",
    description: "10050B",
    slug: "roda-gepeng-rubber-2-dengan-rem",
    image: '/asset/product/roller-caster/roda-gepeng-rubber-2-dengan-rem.png'
  },
  {
    id: 3,
    name: "Roda RC 2\" Bulat",
    description: "RC2-GLATINO",
    slug: "roda-rc-2-bulat",
    image: '/asset/product/roller-caster/roda-rc-2-bulat.png'
  },
  {
    id: 4,
    name: "Roda Gepeng Red PP 2\"",
    description: "10050PVC",
    slug: "roda-gepeng-red-pp-2-tanpa-rem",
    image: '/asset/product/roller-caster/roda-gepeng-red-pp-2-tanpa-rem.png'
  },
  {
    id: 5,
    name: "Roda Gepeng Red PP 2\"",
    description: "10050PVCB",
    slug: "roda-gepeng-red-pp-2-dengan-rem",
    image: '/asset/product/roller-caster/roda-gepeng-red-pp-2-dengan-rem.png'
  },
  {
    id: 6,
    name: "Roda Gepeng Nylon 2\"",
    description: "RC2-GP-GLATINO",
    slug: "roda-gepeng-nylon-2-tanpa-rem",
    image: '/asset/product/roller-caster/roda-gepeng-nylon-2-tanpa-rem.png'
  },
  {
    id: 7,
    name: "Roda Gepeng PP 2\"",
    description: "10050PB",
    slug: "roda-gepeng-nylon-2-dengan-rem",
    image: '/asset/product/roller-caster/roda-gepeng-nylon-2-dengan-rem.png'
  },
  {
    id: 8,
    name: "Roda Gepeng White PP 3\"",
    description: "18075PC",
    slug: "roda-gepeng-white-pp-3-tanpa-rem",
    image: '/asset/product/roller-caster/roda-gepeng-white-pp-3-tanpa-rem.png'
  },
  {
    id: 9,
    name: "Roda Gepeng White PP 3\"",
    description: "18075PCB",
    slug: "roda-gepeng-white-pp-3-dengan-rem",
    image: '/asset/product/roller-caster/roda-gepeng-white-pp-3-dengan-rem.png'
  },
  {
    id: 10,
    name: "Roda Gepeng Rubber 3\"",
    description: "18075",
    slug: "roda-gepeng-rubber-3-tanpa-rem",
    image: '/asset/product/roller-caster/roda-gepeng-rubber-3-tanpa-rem.png'
  },
  {
    id: 11,
    name: "Roda Gepeng Rubber 3\"",
    description: "18075B",
    slug: "roda-gepeng-rubber-3-dengan-rem",
    image: '/asset/product/roller-caster/roda-gepeng-rubber-3-dengan-rem.png'
  },
  {
    id: 12,
    name: "Fixed Caster Orange 2\"",
    description: "260500GF",
    slug: "roda-fixed-caster-orange-2-tanpa-rem",
    image: '/asset/product/roller-caster/roda-fixed-caster-orange-2-tanpa-rem.png'
  },
  {
    id: 13,
    name: "Swivel Caster Orange 2\"",
    description: "260500G",
    slug: "roda-swivel-caster-orange-2-tanpa-rem",
    image: '/asset/product/roller-caster/roda-swivel-caster-orange-2-tanpa-rem.png'
  },
  {
    id: 14,
    name: "Swivel Caster Orange 2\"",
    description: "260500GB",
    slug: "roda-swivel-caster-orange-2-dengan-rem",
    image: '/asset/product/roller-caster/roda-swivel-caster-orange-2-dengan-rem.png'
  },
  {
    id: 15,
    name: "Fixed Caster Orange 3\"",
    description: "260750GF",
    slug: "roda-fixed-caster-orange-3-tanpa-rem",
    image: '/asset/product/roller-caster/roda-fixed-caster-orange-3-tanpa-rem.png'
  },
    {
    id: 13,
    name: "Swivel Caster Orange 3\"",
    description: "260500G",
    slug: "roda-swivel-caster-orange-3-tanpa-rem",
    image: '/asset/product/roller-caster/roda-swivel-caster-orange-3-tanpa-rem.png'
  },
  {
    id: 14,
    name: "Swivel Caster Orange 3\"",
    description: "260500GB",
    slug: "roda-swivel-caster-orange-3-dengan-rem",
    image: '/asset/product/roller-caster/roda-swivel-caster-orange-3-dengan-rem.png'
  },
  // {
  //   id: 12,
  //   name: "Roda Gepeng Rubber",
  //   description: "Sliding track berkualitas untuk jalur pergerakan pintu geser yang lancar dan stabil",
  //   slug: "roda-rubber",
  //   image: '/asset/product/roller-caster/roda-rubber.png'
  // },
  // {
  //   id: 13,
  //   name: "Roda Gepeng PP",
  //   description: "",
  //   slug: "roda-pp",
  //   image: '/asset/product/roller-caster/roda-pp.png'
  // },
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>