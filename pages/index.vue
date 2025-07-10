<template>
  <section class="bg-black bg-cover bg-top bg-no-repeat text-white font-poppins">
    <!-- HERO FULLSCREEN -->
    <div class="min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-black p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-14 w-full max-w-6xl mx-auto shadow-lg">
          <div class="flex justify-center items-center md:items-start">
            <img
              src="/assets/index/gambar awal.png"
              alt="Gambar Utama"
              class="rounded-lg w-64 h-72 md:w-80 md:h-96 object-cover"
            />
          </div>

          <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left mx-auto max-w-lg h-full">
            <h1 class="text-2xl md:text-4xl font-extrabold text-red-600 leading-snug mb-4">
              MENCIPTAKAN <br />
              AKSESORIS ALUMUNIUM <br />
              YANG BERKUALITAS
            </h1>

            <div class="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
              <img src="/assets/index/badge-premium.png" alt="Premium" class="w-16 h-16" />
              <img src="/assets/index/badge-best.png" alt="Best" class="w-16 h-16" />
              <img src="/assets/index/badge-10years.png" alt="10 Years" class="w-16 h-16" />
            </div>

            <button
              @click="scrollToSection"
              class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ABOUT GBJ SECTION -->
    <div id="about-gbj" class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center items-center">
      <div class="bg-black p-6 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 md:gap-14 items-center w-full max-w-6xl shadow-lg">
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/assets/index/gambar awal.png"
            alt="Gambar Utama"
            class="rounded-lg w-64 h-72 md:w-80 md:h-96 object-cover mb-4 max-w-full"
          />
        </div>
        <div class="flex items-start gap-4 flex-1 text-white">
          <div>
            <h3 class="text-lg font-bold mb-1">About GBJ</h3>
            <p class="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- MISSION & VISION -->
    <div class="container mx-auto bg-red-600 rounded-2xl p-6 md:p-10 text-white">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <div class="flex items-start gap-4 flex-1">
          <img src="/assets/index/mission.png" alt="Mission" class="w-10 h-10 mt-1" />
          <div>
            <h3 class="text-lg font-bold mb-1">Our Mission</h3>
            <p class="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4 flex-1">
          <img src="/assets/index/vision.png" alt="Vision" class="w-10 h-10 mt-1" />
          <div>
            <h3 class="text-lg font-bold mb-1">Our Vision</h3>
            <p class="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CATALOG & EVENTS -->
    <div class="w-full bg-red-600 rounded-t-3xl py-12 px-4 sm:px-6 lg:px-8 my-36">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div class="bg-black bg-opacity-50 p-6 rounded-3xl text-white">
          <h2 class="text-3xl text-center font-semibold mb-4">Events</h2>
          <p class="text-sm font-semibold">27 Juli, 2025 09:30 AM - 12:00 PM WIB</p>
          <p class="text-xs mb-6">Bakti Sosial Panti Asuhan</p>
          <a href="#" class="text-sm underline block mt-16 text-center">View All &gt;</a>
        </div>
        <div class="bg-black bg-opacity-50 p-6 rounded-3xl text-white">
          <h2 class="text-3xl text-center font-semibold mb-4">Our Product</h2>
          <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
          <p class="text-center text-sm mb-4">Engsel Pintu</p>
          <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
          <p class="text-center text-sm mb-4">Engsel Pintu</p>
          <a href="/product" class="text-sm underline block mt-16 text-center">View All &gt;</a>
        </div>
      </div>
    </div>

    <!-- TIMELINE (FIXED VERSION) -->
    <!-- TIMELINE RESPONSIVE UNTUK HP, TABLET, DAN PC -->
  <div class="container mx-auto bg-black py-20 px-4 sm:px-6 lg:px-8 text-white">
    <h2 class="text-3xl font-bold mb-10 text-center text-red-600">Our Journey</h2>

    <div class="relative">
      <!-- Gradien overlay untuk HP dan Tablet -->
      <div class="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
      
      <!-- Scroll container utama -->
      <div
        id="timeline-scroll"
        class="overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar"
        ref="timelineRef"
        @scroll="handleCardScroll"
      >
        <!-- Container dengan padding dinamis untuk semua device -->
        <div class="flex gap-4 w-max pl-[calc(50%-120px)] pr-[calc(50%-120px)] 
                   sm:pl-[calc(50%-140px)] sm:pr-[calc(50%-140px)] 
                   md:pl-[calc(50%-160px)] md:pr-[calc(50%-160px)] 
                   lg:pl-[calc(50%-180px)] lg:pr-[calc(50%-180px)]">
          
          <!-- Timeline items -->
          <div
            v-for="(year, index) in timelineYears"
            :key="year"
            :class="[
              'timeline-item snap-center transition-all duration-300 ease-in-out transform',
              'min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px]',
              'bg-zinc-900 p-4 rounded-xl shrink-0 flex flex-col',
              activeCard === index ? 'scale-105 opacity-100 z-10 shadow-lg' : 'scale-95 opacity-70'
            ]"
          >
            <div class="rounded-lg overflow-hidden mb-3 aspect-video bg-gray-300 w-full flex-shrink-0"></div>
            <h3 class="text-sm sm:text-base font-bold text-red-500 mb-1">{{ year }}</h3>
            <p class="text-xs sm:text-sm leading-snug text-white">
              {{ timelineDescriptions[index] }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Navigation dots untuk mobile -->
      <div class="flex justify-center mt-6 gap-2 md:hidden">
        <div 
          v-for="(year, index) in timelineYears" 
          :key="'dot-'+year"
          class="w-2 h-2 rounded-full transition-all"
          :class="activeCard === index ? 'bg-red-500 w-4' : 'bg-gray-500'"
        ></div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Data timeline
const timelineYears = [2020, 2021, 2022, 2023, 2024, 2025];
const timelineDescriptions = [
  "Pendirian & peluncuran produk pertama",
  "Ekspansi pasar ke seluruh Indonesia",
  "Peluncuran line produk premium",
  "Peningkatan kapasitas produksi 200%",
  "Penghargaan sebagai perusahaan terbaik",
  "Ekspansi ke pasar internasional"
];

const scrollToSection = () => {
  const section = document.getElementById('about-gbj');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const currentSection = ref('home');
const activeCard = ref(0);

// Handle scroll untuk highlight card yang aktif
const handleCardScroll = () => {
  const items = document.querySelectorAll('.timeline-item');
  let closestIndex = 0;
  let minDistance = Infinity;

  items.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const viewportCenter = window.innerWidth / 2;
    const distance = Math.abs(itemCenter - viewportCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });

  activeCard.value = closestIndex;
};

// Inisialisasi timeline
const initTimeline = () => {
  const items = document.querySelectorAll('.timeline-item');
  if (items.length > 0) {
    // Scroll ke item tengah saat pertama load
    const middleIndex = Math.floor(items.length / 2);
    activeCard.value = middleIndex;
    items[middleIndex].scrollIntoView({ 
      behavior: 'auto', 
      inline: 'center',
      block: 'nearest'
    });
  }
};

// Drag to scroll functionality
const setupDragScroll = () => {
  const slider = document.getElementById('timeline-scroll');
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleCardScroll);
  
  initTimeline();
  setupDragScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleCardScroll);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Hide scrollbar but keep functionality */
.no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
.no-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Smooth transitions */
.timeline-item {
  transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
}

/* Responsive font sizes */
@media (max-width: 640px) {
  .timeline-item {
    min-width: 240px !important;
  }
}
</style>