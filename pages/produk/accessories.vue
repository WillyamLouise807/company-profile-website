<template>
  <div class="font-poppins">
    <!-- Hero Section Kategori -->
    <section class="relative w-full h-screen overflow-hidden font-poppins">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>
      <div class="absolute inset-0 bg-white/30 backdrop-blur-sm z-[-2]"></div>
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Content Container -->
      <div class="container mx-auto h-full px-4 relative z-10 flex flex-col">
        <!-- Breadcrumb -->
        <div class="text-red-700 text-sm opacity-90 pt-36">
          <NuxtLink to="/product" class="hover:underline text-red-600 font-medium">Product</NuxtLink> / <span class="text-gray-600">Accessories</span>
        </div>

        <!-- Hero Text Centered -->
        <div class="flex-grow flex items-center justify-center">
          <div class="text-center max-w-2xl mx-auto text-red-800 transform -translate-y-6">
            <h1 class="text-3xl sm:text-4xl font-bold leading-relaxed mb-4">Accessories Series</h1>
            <p class="text-base sm:text-lg text-gray-700">
              Koleksi aksesori pelengkap pintu dan jendela dengan kualitas tinggi untuk fungsi dan estetika optimal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Produk Accessories -->
    <section class="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Produk door-closer</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(product, index) in doorCloserProducts"
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
                :to="`/produk/katalog-12/${product.slug}`"
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
    
    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import bgImage from '/asset/product/accessories/accessories-banner.png';
import FooterComponent from '@/components/footer.vue';

const doorCloserProducts = [
  {
    id: 1,
    name: "Glass to Wall",
    description: "Connector kaca ke dinding stainless steel untuk menghubungkan panel kaca ke dinding",
    slug: "glass-to-wall",
    image: '/asset/product/accessories/glass-to-wall.png'
  },
  {
    id: 2,
    name: "Glass to Glass",
    description: "Connector kaca ke kaca stainless steel untuk menyambungkan dua panel kaca",
    slug: "glass-to-glass",
    image: '/asset/product/accessories/glass-to-glass.png'
  },
  {
    id: 3,
    name: "Glass Clip L",
    description: "Klip kaca L stainless steel sebagai penahan kaca bentuk L untuk sudut",
    slug: "glass-clip-l",
    image: '/asset/product/accessories/glass-clip-l.png'
  },
  {
    id: 4,
    name: "Glass Clip Persegi",
    description: "Klip kaca P stainless steel sebagai penahan kaca bentuk P untuk sambungan",
    slug: "glass-clip-p",
    image: '/asset/product/accessories/glass-clip-p.png'
  },
  {
    id: 5,
    name: "Glass Clip U",
    description: "Klip kaca U stainless steel sebagai penahan kaca bentuk U untuk sudut lancip",
    slug: "glass-clip-u",
    image: '/asset/product/accessories/glass-clip-u.png'
  },
  {
    id: 6,
    name: "Glass Suction",
    description: "Glass suction cup alat angkat kaca untuk memudahkan pemindahan kaca berat",
    slug: "glass-suction",
    image: '/asset/product/accessories/glass-suction.png'
  },
  {
    id: 7,
    name: "Rivet",
    description: "Paku rivet aluminium untuk sambungan permanen yang kuat dan anti karat",
    slug: "rivet",
    image: '/asset/product/accessories/rivet.png'
  },
  {
    id: 8,
    name: "Mohair",
    description: "Seal mohair untuk pintu dan jendela membantu menghalangi debu dan udara masuk",
    slug: "mohair",
    image: '/asset/product/accessories/mohair.png'
  },
  {
    id: 9,
    name: "Camlock",
    description: "Kunci camlock zinc alloy untuk mengamankan laci lemari dan pintu kecil",
    slug: "camlock",
    image: '/asset/product/accessories/camlock.png'
  },
  {
    id: 10,
    name: "Silicone",
    description: "Silicone sealant serbaguna untuk menutup celah dan sambungan",
    slug: "silicone",
    image: '/asset/product/accessories/silicone.png'
  },
  {
    id: 11,
    name: "Tembak Silicone",
    description: "Alat tembak silicone material baja untuk aplikasi lem silicone dengan rapi",
    slug: "tembak-silicone",
    image: '/asset/product/accessories/tembak-silicone.png'
  },
  {
    id: 12,
    name: "Rell Laci FE",
    description: "Rel laci full extension baja untuk membuka laci penuh dengan lancar",
    slug: "rell-laci-fe",
    image: '/asset/product/accessories/rell-laci-fe.png'
  },
  {
    id: 13,
    name: "Rell Laci FE Slowmo",
    description: "Rel laci full extension slowmotion baja untuk membuka laci halus tanpa benturan",
    slug: "rell-laci-fe-slowmo",
    image: '/asset/product/accessories/rell-laci-fe-slowmo.png'
  },
  {
    id: 14,
    name: "Engsel Sendok Mini",
    description: "Engsel sendok mini stainless steel untuk pintu kabinet kecil dan ringan",
    slug: "engsel-sendok-mini",
    image: '/asset/product/accessories/engsel-sendok-mini.png'
  },
  {
    id: 14,
    name: "Bracket Ikan",
    description: "Bracket ikan stainless steel untuk sambungan sudut kuat pada furniture",
    slug: "bracket-ikan",
    image: '/asset/product/accessories/bracket-ikan.png'
  },
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
