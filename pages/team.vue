<template>
  <div class="font-poppins">
    <!-- Hero Section -->
    <section class="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>

      <!-- Dark Blur Overlay -->
      <div class="absolute inset-0 bg-black/20 backdrop-blur-sm z-[-2]"></div>

      <!-- White Gradient Fade (BOTTOM) -->
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Text Content -->
      <div class="relative z-10 px-4 max-w-4xl text-white">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
          Di balik setiap produk dan layanan yang kami hadirkan, terdapat tim berdedikasi yang bekerja dengan integritas, keahlian, dan semangat untuk terus berkembang.
        </h1>
        <button
          @click="scrollToStructure"
          class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
        >
          See More
        </button>
      </div>
    </section>

   <!-- Struktur Organisasi -->
    <section id="structure-section" class="py-16 px-4 md:px-20 bg-gradient-to-b from-transparent to-white">
      <div class="bg-white text-black font-poppins py-16 px-4 sm:px-6 lg:px-12">
    <div class="max-w-full mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-6">Struktur Organisasi</h2>

      <img
        :src="strukturOrganisasi"
        alt="Struktur Organisasi"
        class="rounded-xl shadow-md mx-auto w-full cursor-zoom-in bg-gray-100 p-4"
        @click="toggleZoom"
      />

      <p class="text-sm text-gray-500 mt-3">Klik gambar untuk memperbesar</p>

      <!-- Modal Zoom -->
      <div
        v-if="isZoomOpen"
        class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        @click.self="toggleZoom"
      >
        <div class="bg-[#111] p-4 md:p-6 rounded-xl shadow-2xl max-w-5xl w-full">
          <img :src="strukturOrganisasi" alt="Zoomed Struktur Organisasi" class="w-full object-contain" />
        </div>
      </div>
    </div>
  </div>
    </section>

    <!-- 🔍 Zoom Modal -->
    <div
      v-if="isZoomOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      @click.self="toggleZoom"
    >
      <img
        src="@/assets/team/struktur-organisasi.png"
        alt="Zoom Struktur Organisasi"
        class="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
      />
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
// Import FooterComponent dari file yang sama di folder 'pages'
import FooterComponent from '../components/footer.vue'
import strukturOrganisasi from '@/assets/team/struktur-organisasi.png'
import bgImage from '@/assets/team/bg-img-team.jpeg'

const isZoomOpen = ref(false)
const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
}


const scrollToStructure = () => {
  const el = document.getElementById('structure-section')
  el?.scrollIntoView({ behavior: 'smooth' })
}

const colorDescriptions = [
  {
    color: '#333333',
    title: 'Bijaksana, tenang, dan profesionalisme',
    subtitle: 'Sensible, composed, and guided by professionalism',
  },
  {
    color: '#134161',
    title: 'Profesional, dapat dipercaya, stabil',
    subtitle: 'Professional, trustworthy, and dependable',
  },
  {
    color: '#b20000',
    title: 'Sigap, penuh energi, bertanggung jawab, dan mengelola hal-hal mendesak',
    subtitle: 'Responsive, energetic, accountable, and adept at handling urgent matters',
  },
  {
    color: '#808000',
    title: 'Kehati-hatian, perhitungan, dan kemandirian',
    subtitle: 'Prudence, calculated decision-making, and self-sufficiency',
  },
  {
    color: '#737373',
    title: 'Netral, konservatif, terpercaya',
    subtitle: 'Neutral, conservative, and reliable',
  },
  {
    color: '#ff581b',
    title: 'Energi, semangat, daya tarik',
    subtitle: 'Energetic, passionate, and attention-grabbing',
  },
  {
    color: '#ffc107',
    title: 'Percaya diri, ambisius, optimis',
    subtitle: 'Confident, ambitious, and optimistic',
  },
  {
    color: '#013120',
    title: 'Kuat, andal, membumi',
    subtitle: 'Robust, dependable, and grounded',
  },
  {
    color: '#4682b4',
    title: 'Stabil, tenang, dan sistematis',
    subtitle: 'Stable, composed, and methodical',
  },
  {
    color: '#49326b',
    title: 'Imajinatif, inovatif, estetika tinggi',
    subtitle: 'Imaginative, innovative, and aesthetically driven',
  },
  {
    color: '#000000',
    title: 'Modern, canggih, efisien',
    subtitle: 'Modern, sophisticated, and efficient',
  },
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>