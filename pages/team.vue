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
      <FadeInOnScroll direction="up">
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
      </FadeInOnScroll>
    </section>

    <!-- Struktur Organisasi -->
    <FadeInOnScroll direction="down">
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
              class="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center"
              @click.self="toggleZoom"
            >
              <!-- Close Button -->
              <button
                @click="toggleZoom"
                class="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition z-10"
              >
                ✕
              </button>

              <!-- Zoom Controls -->
              <div class="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <button
                  @click="zoomIn"
                  class="text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition text-xl"
                  title="Zoom In (Ctrl + Scroll)"
                >
                  +
                </button>
                <button
                  @click="zoomOut"
                  class="text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition text-xl"
                  title="Zoom Out (Ctrl + Scroll)"
                >
                  −
                </button>
                <button
                  @click="resetZoom"
                  class="text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition text-xs"
                  title="Reset Zoom"
                >
                  ⟲
                </button>
              </div>

              <!-- Zoom Level Indicator -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm z-10">
                {{ Math.round(zoomLevel * 100) }}%
              </div>

              <!-- Scrollable Container (seperti Figma) -->
              <div
                ref="zoomContainer"
                class="w-full h-full overflow-auto"
                @wheel="onWheelZoom"
                style="cursor: default;"
              >
                <div 
                  class="inline-block"
                  :style="{
                    width: `${baseImageWidth * zoomLevel}px`,
                    height: `${baseImageHeight * zoomLevel}px`,
                    minWidth: '100%',
                    minHeight: '100%'
                  }"
                >
                  <div class="w-full h-full flex items-center justify-center">
                    <img
                      ref="zoomImage"
                      :src="strukturOrganisasi"
                      alt="Zoomed Struktur Organisasi"
                      class="select-none"
                      :style="{ 
                        width: `${baseImageWidth * zoomLevel}px`,
                        height: 'auto'
                      }"
                      draggable="false"
                      @load="onImageLoad"
                    />
                  </div>
                </div>
              </div>

              <!-- Instructions -->
              <div class="absolute bottom-4 right-4 text-white/70 text-xs text-right z-10">
                <p class="hidden md:block">Ctrl + Scroll untuk zoom</p>
                <p class="hidden md:block">Shift + Scroll untuk horizontal scroll</p>
                <p class="md:hidden">Pinch untuk zoom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>

    <!-- Penjelasan Warna -->
    <div class="max-w-screen-2xl mx-auto my-12 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <div
        v-for="(item, index) in colorDescriptions"
        :key="index"
        class="flex items-start space-x-4"
      >
        <div
          class="w-6 h-6 mt-1 rounded-sm flex-shrink-0"
          :style="{ backgroundColor: item.color }"
        ></div>
        <div>
          <p class="font-semibold text-gray-700">{{ item.title }}</p>
          <p class="text-sm italic text-gray-600">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
// Import FooterComponent dari file yang sama di folder 'pages'
import FooterComponent from '../components/footer.vue'
import strukturOrganisasi from '@/assets/team/struktur-organisasi.png'
import bgImage from '/asset/team/bg-img-team.jpeg'

const isZoomOpen = ref(false)
const zoomLevel = ref(1)
const zoomContainer = ref(null)
const zoomImage = ref(null)
const baseImageWidth = ref(1200)
const baseImageHeight = ref(800)

const toggleZoom = () => {
  isZoomOpen.value = !isZoomOpen.value
  if (isZoomOpen.value) {
    zoomLevel.value = 1
    // Center the image after opening
    setTimeout(() => {
      if (zoomContainer.value) {
        const container = zoomContainer.value
        container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2
        container.scrollTop = (container.scrollHeight - container.clientHeight) / 2
      }
    }, 10)
  }
}

const onImageLoad = (e) => {
  baseImageWidth.value = e.target.naturalWidth
  baseImageHeight.value = e.target.naturalHeight
}

const zoomIn = () => {
  const oldZoom = zoomLevel.value
  zoomLevel.value = Math.min(zoomLevel.value + 0.3, 5)
  adjustScrollAfterZoom(oldZoom, zoomLevel.value)
}

const zoomOut = () => {
  const oldZoom = zoomLevel.value
  zoomLevel.value = Math.max(zoomLevel.value - 0.3, 0.5)
  adjustScrollAfterZoom(oldZoom, zoomLevel.value)
}

const resetZoom = () => {
  zoomLevel.value = 1
  if (zoomContainer.value) {
    const container = zoomContainer.value
    setTimeout(() => {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2
      container.scrollTop = (container.scrollHeight - container.clientHeight) / 2
    }, 10)
  }
}

const adjustScrollAfterZoom = (oldZoom, newZoom) => {
  if (!zoomContainer.value) return
  
  const container = zoomContainer.value
  const rect = container.getBoundingClientRect()
  const centerX = container.scrollLeft + rect.width / 2
  const centerY = container.scrollTop + rect.height / 2
  
  const zoomRatio = newZoom / oldZoom
  
  setTimeout(() => {
    container.scrollLeft = centerX * zoomRatio - rect.width / 2
    container.scrollTop = centerY * zoomRatio - rect.height / 2
  }, 10)
}

const onWheelZoom = (e) => {
  // Ctrl + Scroll untuk zoom (seperti Figma)
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    const oldZoom = zoomLevel.value
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    zoomLevel.value = Math.max(0.5, Math.min(5, zoomLevel.value + delta))
    
    // Zoom ke arah posisi mouse
    if (zoomContainer.value) {
      const container = zoomContainer.value
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left + container.scrollLeft
      const mouseY = e.clientY - rect.top + container.scrollTop
      
      const zoomRatio = zoomLevel.value / oldZoom
      
      setTimeout(() => {
        container.scrollLeft = mouseX * zoomRatio - (e.clientX - rect.left)
        container.scrollTop = mouseY * zoomRatio - (e.clientY - rect.top)
      }, 10)
    }
  }
  // Shift + Scroll untuk horizontal scroll (seperti Figma)
  else if (e.shiftKey) {
    e.preventDefault()
    if (zoomContainer.value) {
      zoomContainer.value.scrollLeft += e.deltaY
    }
  }
  // Default scroll vertikal tetap berfungsi tanpa modifier
}

const scrollToStructure = () => {
  const target = document.getElementById('structure-section');
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const duration = 1500; // ms
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
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