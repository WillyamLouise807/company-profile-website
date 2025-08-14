<template>
  <!-- Hero Section -->
  <section class="relative w-full h-screen flex items-center justify-center text-center overflow-hidden font-poppins">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>

    <!-- Dark Blur Overlay -->
    <div class="absolute inset-0 bg-white/70 backdrop-blur-md z-[-2]"></div>

    <!-- White Gradient Fade (BOTTOM) -->
    <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

    <!-- Container -->
      <!-- Main Content -->
      <FadeInOnScroll direction="down">
        <div class="flex-grow flex items-center justify-center text-center">
          <div class="max-w-2xl mx-auto text-red-800">
            <h1 class="text-2xl sm:text-3xl font-semibold leading-relaxed mb-6">
              Produk-produk Glatino dirancang untuk menghadirkan keamanan dan kenyamanan maksimal bagi rumah dan bangunan modern.
            </h1>

            <!-- Badges -->
            <div class="flex gap-4 justify-center items-center mb-6">
              <img src="/asset/index/badge-premium.png" class="w-16 h-16" />
              <img src="/asset/index/badge-best.png" class="w-16 h-16" />
              <img src="/asset/index/badge-10years.png" class="w-16 h-16" />
            </div>

            <button
              @click="scrollToProduct"
              class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition"
            >
              See More
            </button>
          </div>
        </div>
      </FadeInOnScroll>
  </section>

  <!-- Product Catalog -->
  <div id="product-catalog">
    <section class="bg-white text-black py-16 px-4 sm:px-6 lg:px-12 font-poppins">
      <div class="container mx-auto">
        <FadeInOnScroll direction="down">
          <h2 class="text-3xl font-bold  mt-12 mb-10 text-center text-red-700">Kategori Produk</h2>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center pb-6 transition transform hover:scale-[1.02]"
            >
              <img :src="product.logo" alt="Logo" class="h-14 mt-4 mb-2" />
              <div class="w-full px-4">
                <img :src="product.image" :alt="product.title" class="w-full max-h-60 object-contain mx-auto" />
              </div>
              <div class="text-center px-4 mt-4">
                <h3 class="text-lg font-bold text-red-700">{{ product.title }}</h3>
                <p class="text-sm text-gray-600">{{ product.description }}</p>

                <NuxtLink
                  :to="'/produk/' + product.slug"
                  class="mt-4 bg-red-600 text-white text-sm px-5 py-2 rounded-full hover:bg-red-800 transition inline-block"
                >
                  Product List
                </NuxtLink>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  </div>

  <FooterComponent />
</template>

<script setup lang="ts">
import bgImage from '/asset/product/bg-awal.jpg'
import FooterComponent from '../components/footer.vue'

const scrollToProduct = () => {
  const target = document.getElementById('product-catalog');
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const duration = 1500; // <- 1.5 detik
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-in-out function
    const easeInOut = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startY + (endY - startY) * easeInOut);

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};


const products = [
  {
    title: 'Door Lock',
    description: 'View all Door Lock products',
    slug: 'door-lock',
    image: '/asset/product/Door-Lock.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Mortise Lock',
    description: 'View all Mortise Lock products',
    slug: 'mortise-lock',
    image: '/asset/product/mortise-lock.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Cylinder',
    description: 'View all Cylinder products',
    slug: 'cylinder',
    image: '/asset/product/cylinder.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Floor Hinge',
    description: 'View all Floor Hinge products',
    slug: 'floor-hinge',
    image: '/asset/product/floor-hinge.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Patch Fitting',
    description: 'View all Patch Fitting products',
    slug: 'patch-fitting',
    image: '/asset/product/patch-fitting.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Pull Handle',
    description: 'View all Pull Handle products',
    slug: 'pull-handle',
    image: '/asset/product/pull-handle.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Engsel Casement',
    description: 'View all Engsel Casement products',
    slug: 'engsel-casement',
    image: '/asset/product/engsel-casement.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Window Lock',
    description: 'View all Window Lock products',
    slug: 'window-lock',
    image: '/asset/product/window-lock.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Alumunium Lock',
    description: 'View all Alumunium Lock products',
    slug: 'alumunium-lock',
    image: '/asset/product/alumunium-lock.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Door Closer',
    description: 'View all Door Closer products',
    slug: 'door-closer',
    image: '/asset/product/door-closer.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Flush Handle',
    description: 'View all Flush Handle products',
    slug: 'flush-handle',
    image: '/asset/product/flush-handle.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Accessories',
    description: 'View all Accessories products',
    slug: 'accessories',
    image: '/asset/product/accessories.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Sliding Rail',
    description: 'View all Sliding Rail products',
    slug: 'sliding-rail',
    image: '/asset/product/sliding-rail.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Roller',
    description: 'View all Roller products',
    slug: 'roller',
    image: '/asset/product/roller.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
]
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
