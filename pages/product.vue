<template>
  <!-- Hero Section with Banner Carousel -->
  <section class="relative w-full h-[75vh] overflow-hidden">
    <!-- Background Carousel -->
    <div class="absolute inset-0 w-full h-full md:mt-18 mt-15">
      <TransitionGroup name="fade">
        <div
          v-for="(banner, index) in banners"
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          :style="{
            backgroundImage: `url(${
              isMobile ? banner.mobileImage : banner.desktopImage
            })`
          }"
        ></div>
      </TransitionGroup>
    </div>

    <!-- Overlay gelap -->
    <div class="absolute inset-0 bg-black/10"></div>

    <div class="font-poppins relative z-10 h-full">
      <div class="max-w-screen-2xl mx-auto px-4 h-full">
        <!-- Grid desktop & Flex mobile -->
        <div 
          class="h-full"
          :class="isMobile ? 'flex flex-col items-center justify-center text-center' : 'grid grid-cols-2 gap-8'"
        >
          <!-- Teks -->
          <div 
            class="flex flex-col justify-center px-4 md:px-8 py-10"
            :class="isMobile ? 'items-center text-center' : 'items-start text-left'"
          >
            <FadeInOnScroll direction="up">
              <div :class="isMobile ? 'space-y-1 mt-10 max-w-md' : 'space-y-6 max-w-2xl'">
                
                <!-- Kategori sebagai Logo -->
                <div class="md:items-start md:justify-start items-center justify-center flex">
                  <img 
                    :src="banners[currentSlide]?.categoryImage" 
                    alt="Category Logo" 
                    class="h-10 md:h-20 object-contain"
                  />
                </div>

                <!-- Title -->
                <h1 
                  class="font-bold text-black drop-shadow-lg leading-tight"
                  :class="isMobile ? 'text-2xl' : 'text-5xl lg:text-6xl'"
                >
                  {{ banners[currentSlide]?.title }}
                </h1>

                <!-- Description -->
                <p 
                  class="text-gray-800 leading-relaxed"
                  :class="isMobile ? 'text-sm' : 'text-xl max-w-xl'"
                >
                  {{ banners[currentSlide]?.description }}
                </p>

                <!-- Badges -->
                <div class="hidden md:flex gap-4 items-start justify-start mb-6">
                  <img src="/asset/index/badge-premium.png" class="w-16 h-16" />
                  <img src="/asset/index/badge-best.png" class="w-16 h-16" />
                  <img src="/asset/index/badge-10years.png" class="w-16 h-16" />
                </div>

                <!-- Button -->
                <div>
                  <button
                    v-if="banners[currentSlide]?.action === 'scrollToProduct'"
                    @click="scrollToProduct"
                    class="inline-block bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-xl font-semibold hover:scale-105 transform duration-300"
                    :class="isMobile ? 'px-6 py-2 text-sm' : 'px-10 py-4 text-lg'"
                  >
                    {{ banners[currentSlide]?.buttonText }}
                  </button>

                  <NuxtLink
                    v-else
                    :to="banners[currentSlide]?.link || '/'"
                    class="inline-block bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-xl font-semibold hover:scale-105 transform duration-300"
                    :class="isMobile ? 'px-6 py-2 text-sm' : 'px-10 py-4 text-lg'"
                  >
                    {{ banners[currentSlide]?.buttonText }}
                  </NuxtLink>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          <!-- Kolom kanan untuk background kosong (desktop only) -->
          <div v-if="!isMobile" class="hidden md:block"></div>
          <div v-else class="flex-1"></div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prevSlide"
      class="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicator Dots -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
      <button
        v-for="(banner, index) in banners"
        :key="index"
        @click="goToSlide(index)"
        class="transition-all duration-800"
        :class="currentSlide === index 
          ? 'w-12 h-1.5 bg-red-600 rounded-full' 
          : 'w-8 h-1.5 bg-gray-400 hover:bg-gray-600 rounded-full'"
      ></button>
    </div>
  </section>

  <!-- Product Catalog -->
  <div id="product-catalog">
    <section class="bg-gray-100 text-black py-16 px-4 sm:px-6 lg:px-12 font-poppins">
      <div class="max-w-screen-xl mx-auto">
        <FadeInOnScroll direction="down">
          <h2 class="text-3xl font-bold  mt-12 mb-10 text-center text-red-700">Kategori Produk</h2>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="group bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center pb-6 transition"
            >
              <!-- Logo brand -->
              <img :src="product.logo" alt="Logo" class="h-14 mt-4 mb-2" />

              <!-- Produk Image dengan hover zoom -->
              <div class="w-full px-4 overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.title" 
                  class="w-full max-h-60 object-contain mx-auto transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <!-- Text -->
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
import FooterComponent from '../components/footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// responsive flag
const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// state
const currentSlide = ref(0)
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

type Banner = {
  desktopImage: string
  mobileImage: string
  categoryImage: string
  title: string
  description: string
  buttonText: string
  link?: string
  action?: string
}

const banners: Banner[] = [
  {
    desktopImage: '/asset/banner_produk/banner_dekstop_1.png',
    mobileImage: '/asset/banner_produk/banner_mobile_1.png',
    categoryImage: '/asset/product/GLATINO - RED - LOGO.png',
    title: 'Handle Roses Series',
    description: 'Perpaduan berbagai macam bentuk dan warna dirancang khusus untuk mempercantik pintu Anda',
    buttonText: 'Lihat Produk Handle Roses',
    link: '/produk/handle-roses'
  },
  {
    desktopImage: '/asset/banner_produk/banner_dekstop_2.png',
    mobileImage: '/asset/banner_produk/banner_mobile_2.png',
    categoryImage: '/asset/product/GLATINO - RED - LOGO.png',
    title: 'Aluminium Lock',
    description: 'Kunci berkualitas tinggi untuk sistem jendela dan pintu aluminium, menghadirkan keamanan maksimal dengan desain ramping dan konstruksi tahan lama.',
    buttonText: 'Lihat Produk Aluminium Lock',
    link: '/produk/alumunium-lock'
  },
  {
    desktopImage: '/asset/banner_produk/banner_dekstop_3.png',
    mobileImage: '/asset/banner_produk/banner_mobile_3.png',
    categoryImage: '/asset/product/GLATINO - RED - LOGO.png',
    title: 'Pull Handle',
    description: 'Gagang pintu stylish dan ergonomis untuk berbagai jenis pintu, memberikan sentuhan modern dan kenyamanan saat digunakan.',
    buttonText: 'Lihat Produk Pull Handle',
    link: '/produk/pull-handle'
  },
  {
    desktopImage: '/asset/banner_produk/banner_dekstop_4.png',
    mobileImage: '/asset/banner_produk/banner_mobile_4.png',
    categoryImage: '/asset/product/GLATINO - RED - LOGO.png',
    title: 'Mortise Lock',
    description: 'Kunci pintu mortise berkualitas tinggi dengan mekanisme tahan lama, memberikan keamanan optimal dan kemudahan penggunaan untuk berbagai jenis pintu.',
    buttonText: 'Lihat Produk Mortise Lock',
    link: '/produk/mortise-lock'
  }
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % banners.length
}
const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? banners.length - 1 : currentSlide.value - 1
}
const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  if (banners.length > 1) {
    autoPlayInterval = setInterval(nextSlide, 5000)
  }
}
const stopAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
}

onMounted(() => startAutoPlay())
onUnmounted(() => stopAutoPlay())

const scrollToProduct = () => {
  const target = document.getElementById('product-catalog')
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth' })
}

const products = [
  {
    title: 'Handle Roses',
    description: 'View all Handle Roses products',
    slug: 'handle-roses',
    image: '/asset/product/handle-roses.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  {
    title: 'Lever Handle Plate',
    description: 'View all Lever Handle Plate products',
    slug: 'lever-handle-plate',
    image: '/asset/product/lever-handle-plate.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
  // {
  //   title: 'Door Lock',
  //   description: 'View all Door Lock products',
  //   slug: 'door-lock',
  //   image: '/asset/product/Door-Lock.png',
  //   logo: '/asset/product/GLATINO - RED - LOGO.png',
  // },
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
  // {
  //   title: 'Window Lock',
  //   description: 'View all Window Lock products',
  //   slug: 'window-lock',
  //   image: '/asset/product/window-lock.png',
  //   logo: '/asset/product/GLATINO - RED - LOGO.png',
  // },
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
  {
    title: 'Roller Caster',
    description: 'View all Roller Caster products',
    slug: 'roller-caster',
    image: '/asset/product/roller-caster.png',
    logo: '/asset/product/GLATINO - RED - LOGO.png',
  },
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
