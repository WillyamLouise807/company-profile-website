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
        <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-center text-red-700">Produk Accessories</h2>

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
    name: "Shower Hinger 90°",
    description: "GW-90",
    slug: "glass-to-wall",
    image: '/asset/product/accessories/glass-to-wall.png'
  },
  {
    id: 2,
    name: "Shower Hinger 180°",
    description: "GG-180",
    slug: "glass-to-glass",
    image: '/asset/product/accessories/glass-to-glass.png'
  },
  {
    id: 3,
    name: "Glass Clip L",
    description: "GCL-201",
    slug: "glass-clip-l",
    image: '/asset/product/accessories/glass-clip-l.png'
  },
  {
    id: 4,
    name: "Glass Clip Persegi",
    description: "GCP-201",
    slug: "glass-clip-p",
    image: '/asset/product/accessories/glass-clip-p.png'
  },
  {
    id: 5,
    name: "Glass Clip U",
    description: "GCU",
    slug: "glass-clip-u",
    image: '/asset/product/accessories/glass-clip-u.png'
  },
  {
    id: 6,
    name: "Glass Suction Plate",
    description: "GSP-GLT",
    slug: "glass-suction",
    image: '/asset/product/accessories/glass-suction.png'
  },
  {
    id: 7,
    name: "Rod Glass Connector",
    description: "KPG-907",
    slug: "rod-glass-connector",
    image: '/asset/product/accessories/rod-glass-connector.png'
  },
  {
    id: 8,
    name: "Railing Glass Pins",
    description: "KRG-039-4",
    slug: "railing-glass-pins",
    image: '/asset/product/accessories/railing-glass-pins.png'
  },
  {
    id: 9,
    name: "Wall Rod Connector",
    description: "KWP-906",
    slug: "wall-rod-connector",
    image: '/asset/product/accessories/wall-rod-connector.png'
  },
  {
    id: 10,
    name: "Swivel Rod Connector",
    description: "KPP-908",
    slug: "swivel-rod-connector",
    image: '/asset/product/accessories/swivel-rod-connector.png'
  },
  {
    id: 11,
    name: "Corner Scren Single",
    description: "KV-078-SINGLE",
    slug: "corner-screen-single",
    image: '/asset/product/accessories/corner-screen-single.png'
  },
  {
    id: 12,
    name: "Corner Screen Double",
    description: "KV-088-DOUBLE",
    slug: "corner-screen-double",
    image: '/asset/product/accessories/corner-screen-double.png'
  },
  {
    id: 13,
    name: "Handle Bamboo",
    description: "HB-18CM",
    slug: "handle-bamboo",
    image: '/asset/product/accessories/handle-bamboo.png'
  },
  {
    id: 14,
    name: "Handle Swing",
    description: "HS-21CM",
    slug: "handle-swing",
    image: '/asset/product/accessories/handle-swing.png'
  },
  {
    id: 15,
    name: "Bracket Ikan",
    description: "BIA",
    slug: "bracket-ikan",
    image: '/asset/product/accessories/bracket-ikan.png'
  },
  {
    id: 16,
    name: "Aluminium Blind Rivet",
    description: "435-550",
    slug: "rivet",
    image: '/asset/product/accessories/rivet.png'
  },
  {
    id: 17,
    name: "Rolling Shutter Lock",
    description: "H322-GLATINO",
    slug: "roller-shutter-lock",
    image: '/asset/product/accessories/roller-shutter-lock.png'
  },
  {
    id: 18,
    name: "Engsel Salon",
    description: "ES-9''",
    slug: "engsel-salon",
    image: '/asset/product/accessories/engsel-salon.png'
  },
  {
    id: 19,
    name: "Silicone Acetoxy",
    description: "SLC",
    slug: "silicone",
    image: '/asset/product/accessories/silicone.png'
  },
  {
    id: 20,
    name: "Silicone Gun",
    description: "TS-GLT",
    slug: "tembak-silicone",
    image: '/asset/product/accessories/tembak-silicone.png'
  },
  {
    id: 21,
    name: "Silicone Sausage Neutral",
    description: "SLC-S",
    slug: "silicone-sausage-neutral",
    image: '/asset/product/accessories/silicone-sosis.png'
  },
  {
    id: 22,
    name: "Silicone Gun Sosis",
    description: "TS-S-GLT",
    slug: "silicone-gun-sosis",
    image: '/asset/product/accessories/silicone-gun-sosis.png'
  },
  {
    id: 23,
    name: "Karet Mohair Big",
    description: "MHR-GLT",
    slug: "mohair",
    image: '/asset/product/accessories/mohair.png'
  },
  {
    id: 24,
    name: "Engsel Piano Stainless",
    description: "EP-1.8-SS",
    slug: "engsel-piano-stainless",
    image: '/asset/product/accessories/engsel-piano-stainless.png'
  },
  {
    id: 25,
    name: "Engsel Piano Iron",
    description: "EP-3.5-IR",
    slug: "engsel-piano-iron",
    image: '/asset/product/accessories/engsel-piano-iron.png'
  },
  {
    id: 26,
    name: "Camlock Glatino",
    description: "CL-103",
    slug: "camlock",
    image: '/asset/product/accessories/camlock.png'
  },
  {
    id: 27,
    name: "Rell Laci FE 30 NB",
    description: "SL.3305",
    slug: "rell-laci-fe",
    image: '/asset/product/accessories/rell-laci-fe.png'
  },
  {
    id: 28,
    name: "Rell Laci FE 37 Black",
    description: "SL.3351",
    slug: "rell-laci-fe-slowmo",
    image: '/asset/product/accessories/rell-laci-fe-slowmo.png'
  },
  {
    id: 29,
    name: "Engsel Sendok Mini",
    description: "CH.3387 - CH.3389",
    slug: "engsel-sendok-mini",
    image: '/asset/product/accessories/engsel-sendok-mini.png'
  },
];
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
