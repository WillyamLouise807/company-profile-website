<template>
  <!-- Main container with background -->
  <div class="relative">
     <!-- Background image that follows content -->
    <div class="absolute inset-0 -z-10">
      <img 
        src="assets\bg-image.png" 
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay for content sections -->
      <div class="absolute inset-0"></div>
    </div>

    <!-- Content container -->
    <section class="relative text-white font-poppins">

       <!-- <div class="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
            <img src="C:\Users\nardi\Project Web Willyam\company-profile-website\assets\index\badge-premium.png" class="w-16 h-16" />
            <img src="C:\Users\nardi\Project Web Willyam\company-profile-website\assets\index\badge-best.png" alt="Best" class="w-16 h-16" />
            <img src="C:\Users\nardi\Project Web Willyam\company-profile-website\assets\index\badge-10years.png" alt="10 Years" class="w-16 h-16" />
              </div> -->
              
      <!-- HERO SECTION -->
      <section class="relative min-h-screen flex items-center justify-center bg-black z-10 text-white font-poppins">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-6xl mx-auto shadow-lg backdrop-blur-sm bg-black/80">
            
            <!-- Image -->
            <div class="flex justify-center items-center">
              <img
                src="assets/index/gambar awal.png"
                alt="Gambar Utama"
                class="rounded-lg w-64 h-72 md:w-80 md:h-96 object-cover"
              />
            </div>

            <!-- Text Content -->
            <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-lg h-full">
              <h1 class="text-2xl md:text-4xl font-extrabold text-red-600 leading-snug mb-6">
                MENCIPTAKAN <br />
                AKSESORIS ALUMUNIUM <br />
                YANG BERKUALITAS
              </h1>

              <button
                @click="scrollToSection"
                class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT GBJ SECTION -->      
      <section id="about-gbj" class="relative z-10 bg-black/90 py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div class="bg-black/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center md:items-start">
            
            <!-- Gambar -->
            <div class="w-full md:w-auto flex justify-center md:justify-start">
              <img
                src="assets/index/gambar awal.png"
                alt="Gambar Utama"
                class="rounded-xl object-cover w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 transition duration-300"
              />
            </div>
            
            <!-- Konten Teks -->
            <div class="text-white w-full space-y-4 text-sm sm:text-base leading-relaxed">
              <h3 class="text-xl sm:text-2xl font-bold text-red-500">About GBJ</h3>
              <p><strong>PT Global Bestindo Jaya</strong> merupakan perusahaan yang bergerak di bidang penyediaan perangkat keamanan dan sistem penguncian pintu untuk properti dan bangunan.</p>

              <p>Berawal dari Batam sejak tahun 2015, kami resmi berdiri di Jakarta pada tahun 2018 sebagai bentuk ekspansi dan komitmen kami untuk menjangkau pasar nasional yang lebih luas.</p>

              <p>Melalui merek <strong>Glatino</strong>, kami menghadirkan solusi produk-produk berkualitas tinggi yang dirancang untuk memenuhi kebutuhan keamanan rumah dan bangunan modern di Indonesia.</p>

              <p>Jutaan unit produk Glatino telah digunakan di berbagai proyek perumahan, gedung perkantoran, hingga properti komersial di seluruh Indonesia.</p>

              <p>Glatino terus mengembangkan produk dengan mengadopsi teknologi terkini seperti <strong>AI</strong> dan <strong>IoT</strong> untuk menciptakan perangkat pintar yang mendukung gaya hidup modern.</p>

              <p><strong>Bersama Glatino, hidup lebih aman, nyaman, dan cerdas.</strong></p>
            </div>

          </div>
        </div>
      </section>

      <!-- MISSION & VISION -->
<div class="relative z-10 bg-red-600/90 py-12">
  <div class="container mx-auto rounded-2xl p-6 md:p-10 text-white backdrop-blur-sm">
    <div class="flex flex-col md:flex-row justify-between items-start gap-8">
      
      <!-- Mission -->
      <div class="flex items-start gap-4 flex-1">
        <img src="assets/index/mission.png" alt="Mission" class="w-10 h-10 mt-1" />
        <div>
          <h3 class="text-lg font-bold mb-2">Our Mission</h3>
          <ul class="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed">
            <li>
              Menyediakan produk-produk penguncian dan aksesoris pintu berkualitas tinggi dengan harga kompetitif dan teknologi terkini.
            </li>
            <li>
              Mengutamakan pelayanan prima dan kepuasan pelanggan dalam setiap aspek bisnis kami.
            </li>
            <li>
              Meningkatkan kapabilitas sumber daya manusia melalui pelatihan berkelanjutan untuk menciptakan layanan yang profesional dan responsif.
            </li>
            <li>
              Menjadi mitra terpercaya bagi pelaku industri properti di Indonesia dan Asia Tenggara.
            </li>
          </ul>
        </div>
      </div>

      <!-- Vision -->
      <div class="flex items-start gap-4 flex-1">
        <img src="assets/index/vision.png" alt="Vision" class="w-10 h-10 mt-1" />
        <div>
          <h3 class="text-lg font-bold mb-2">Our Vision</h3>
          <p class="text-sm md:text-base leading-relaxed">
            Dengan mengusung semangat "Smart Security for Modern Living", PT Global Bestindo Jaya berkomitmen menjadi perusahaan penyedia solusi keamanan rumah dan bangunan yang terdepan, terpercaya, dan inovatif di Indonesia.
          </p>
          <p class="mt-4 text-sm md:text-base leading-relaxed">
            Kami memiliki visi untuk membentuk masa depan industri keamanan yang lebih pintar dan terintegrasi melalui produk-produk berbasis <strong>AI dan IoT</strong>, serta terus mengedukasi masyarakat Indonesia tentang pentingnya sistem keamanan modern dalam kehidupan sehari-hari.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>


      <!-- CATALOG & EVENTS -->
      <div class="relative z-10 bg-red-600/90 rounded-t-3xl py-12 px-4 sm:px-6 lg:px-8 my-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-black/70 p-6 rounded-3xl text-white backdrop-blur-sm">
            <h2 class="text-3xl text-center font-semibold mb-4">Events</h2>
            <p class="text-sm font-semibold">27 Juli, 2025 09:30 AM - 12:00 PM WIB</p>
            <p class="text-xs mb-6">Bakti Sosial Panti Asuhan</p>
            <a href="#" class="text-sm underline block mt-16 text-center">View All &gt;</a>
          </div>
          <div class="bg-black/70 p-6 rounded-3xl text-white backdrop-blur-sm">
            <h2 class="text-3xl text-center font-semibold mb-4">Our Product</h2>
            <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
            <p class="text-center text-sm mb-4">Engsel Pintu</p>
            <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
            <p class="text-center text-sm mb-4">Engsel Pintu</p>
            <a href="/product" class="text-sm underline block mt-16 text-center">View All &gt;</a>
          </div>
        </div>
      </div>

      <!-- TIMELINE SECTION - RESPONSIVE FIXED -->
       <div class="min-h-screen flex items-center justify-center relative z-10">
        <div class="container mx-auto bg-black py-20 px-4 sm:px-6 lg:px-8 text-white">
          <h2 class="text-3xl font-bold mb-10 text-center text-red-600">Our Journey</h2>

        <div class="relative">
          <!-- Gradient overlays - Only for mobile and tablet -->
          <div class="absolute left-0 top-0 bottom-0 w-10 md:w-20 xl:w-0 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-10 md:w-20 xl:w-0 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
          
          <!-- Scroll container with improved responsiveness -->
          <div
            id="timeline-scroll"
            :class="[
              'timeline-container',
              'overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar',
              'xl:overflow-visible xl:cursor-default'
            ]"
            ref="timelineRef"
            @scroll="handleCardScroll"
            @mousedown="startDrag"
            @mousemove="onDrag"
            @mouseup="endDrag"
            @mouseleave="endDrag"
          >
            <!-- Responsive padding and layout -->
            <div :class="[
              'timeline-wrapper flex gap-3 sm:gap-4 md:gap-6 w-max',
              // Mobile: center single card
              'pl-[calc(50%-140px)] pr-[calc(50%-140px)]',
              // Tablet: center for better viewing
              'sm:pl-[calc(50%-160px)] sm:pr-[calc(50%-160px)]',
              'md:pl-[calc(50%-200px)] md:pr-[calc(50%-200px)]',
              // Desktop: show all cards, no padding needed
              'xl:pl-0 xl:pr-0 xl:w-full xl:justify-center xl:max-w-none'
            ]">
              
              <!-- Timeline items - Fully responsive -->             
              <div
                v-for="(year, index) in timelineYears"
                :key="year"
                :class="[
                  'timeline-item snap-center transition-all duration-300 ease-in-out transform shrink-0 flex flex-col',
                  'bg-zinc-900 rounded-xl',
                  // Mobile sizing - increased height and optimized padding
                  'w-[280px] h-[420px] p-4',
                  // Small tablet sizing  
                  'sm:w-[300px] sm:h-[440px] sm:p-5',
                  // Medium tablet sizing
                  'md:w-[320px] md:h-[460px] md:p-6',
                  // Desktop sizing - smaller to fit all
                  'xl:w-[280px] xl:h-[380px] xl:p-5',
                  '2xl:w-[300px] 2xl:h-[400px] 2xl:p-6',
                  // Active states for mobile/tablet only
                  'xl:scale-100 xl:opacity-100',
                  activeCard === index && 'xl:scale-100' ? 'scale-105 opacity-100 z-10 shadow-lg xl:shadow-xl' : 'scale-95 opacity-70 xl:opacity-100 xl:scale-100'
                ]"
              >
                <!-- Image container - responsive with reduced mobile height -->
                <div :class="[
                  'rounded-lg overflow-hidden mb-3 bg-gray-300 w-full flex-shrink-0',
                  'h-[160px]',
                  'sm:h-[180px] sm:mb-4', 
                  'md:h-[200px] md:mb-5',
                  'xl:h-[200px] xl:mb-4',
                  '2xl:h-[220px] 2xl:mb-5'
                ]"></div>
                
                <!-- Content - responsive typography with flex-grow -->
                <div class="flex flex-col flex-grow">
                  <h3 :class="[
                    'font-bold text-red-500 mb-2',
                    'text-lg',
                    'sm:text-xl sm:mb-3',
                    'md:text-xl sm:mb-3',
                    'xl:text-lg xl:mb-3',
                    '2xl:text-xl 2xl:mb-4'
                  ]">{{ year }}</h3>
                  
                  <p :class="[
                    'text-white break-words leading-relaxed flex-grow',
                    'text-sm leading-[1.4]',
                    'sm:text-sm sm:leading-[1.5]',
                    'md:text-base md:leading-[1.5]',
                    'xl:text-sm xl:leading-[1.4]',
                    '2xl:text-base 2xl:leading-[1.5]'
                  ]">
                    {{ timelineDescriptions[index] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Mobile indicators - hidden on desktop -->
          <div class="flex justify-center mt-6 gap-2 xl:hidden">
            <div 
              v-for="(year, index) in timelineYears" 
              :key="'dot-'+year"
              class="w-2 h-2 rounded-full transition-all"
              :class="activeCard === index ? 'bg-red-500 w-4' : 'bg-gray-500'"
            ></div>
          </div>
        </div>
      </div>
    </div>

  <FooterComponent />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'


// Import FooterComponent dari file yang sama di folder 'pages'
import FooterComponent from './footer.vue'

// Timeline data
const timelineYears = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
const timelineDescriptions = [
  "PT Global Bestino Jaya resmi berdiri dengan fokus pada produk berkualitas tinggi untuk kebutuhan nasional.",
  "Memperluas jaringan distribusi dan menjalin kemitraan strategis dengan berbagai mitra retail nasional.",
  "Meluncurkan produk unggulan pertama yang menjadi fondasi pertumbuhan perusahaan di tahun-tahun berikutnya.",
  "Melakukan ekspansi pasar ke seluruh wilayah Indonesia guna memperkuat jangkauan distribusi nasional.",
  "Menghadirkan lini produk premium sebagai bentuk inovasi dan peningkatan standar kualitas perusahaan.",
  "Membuka gudang baru di Surabaya untuk mempercepat pengiriman ke wilayah Indonesia Timur secara efisien.",
  "Melakukan diversifikasi usaha dan memperkuat sistem operasional melalui integrasi teknologi digital.",
  "Meluncurkan akun Instagram resmi sebagai langkah awal transformasi digital dan pendekatan ke pelanggan."
];

// Drag functionality
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const timelineRef = ref(null);

const startDrag = (e) => {
  // Disable drag on desktop
  if (window.innerWidth >= 1280) return;
  
  isDragging.value = true;
  startX.value = e.pageX - timelineRef.value.offsetLeft;
  scrollLeft.value = timelineRef.value.scrollLeft;
  timelineRef.value.style.cursor = 'grabbing';
  timelineRef.value.style.scrollSnapType = 'none';
};

const onDrag = (e) => {
  if (!isDragging.value || window.innerWidth >= 1280) return;
  e.preventDefault();
  const x = e.pageX - timelineRef.value.offsetLeft;
  const walk = (x - startX.value) * 2;
  timelineRef.value.scrollLeft = scrollLeft.value - walk;
};

const endDrag = () => {
  if (window.innerWidth >= 1280) return;
  
  isDragging.value = false;
  if (timelineRef.value) {
    timelineRef.value.style.cursor = 'grab';
    timelineRef.value.style.scrollSnapType = 'x mandatory';
  }
};

// Handle scroll to detect active card
const activeCard = ref(0);
const handleCardScroll = () => {
  // Skip on desktop where all cards are visible
  if (window.innerWidth >= 1280) return;
  if (isDragging.value) return;
  
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

// Initialize timeline position
const initTimeline = () => {
  // On desktop, show all cards, no need to center
  if (window.innerWidth >= 1280) {
    activeCard.value = -1; // No active card on desktop
    return;
  }
  
  const items = document.querySelectorAll('.timeline-item');
  if (items.length > 0) {
    const middleIndex = Math.floor(items.length / 2);
    activeCard.value = middleIndex;
  }
};

// Handle window resize
const handleResize = () => {
  initTimeline();
  handleCardScroll();
};

onMounted(() => {
  initTimeline();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const scrollToSection = () => {
  const section = document.getElementById('about-gbj');
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
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

/* Timeline specific styles */
.timeline-container {
  transition: all 0.3s ease;
}

/* Desktop: Remove scroll behavior and show all cards */
@media (min-width: 1280px) {
  .timeline-container {
    overflow-x: visible !important;
    scroll-snap-type: none !important;
    cursor: default !important;
  }
  
  .timeline-wrapper {
    width: 100% !important;
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 1.5rem !important;
    max-width: 1200px !important;
    margin: 0 auto !important;
    padding: 0 !important;
  }
  
  .timeline-item {
    transform: none !important;
    opacity: 1 !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
  }
  
  .timeline-item:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4) !important;
  }
}

/* Extra large desktop: Show all 8 cards in 2 rows */
@media (min-width: 1536px) {
  .timeline-wrapper {
    grid-template-columns: repeat(4, 1fr) !important;
    grid-template-rows: repeat(2, 1fr) !important;
    gap: 2rem !important;
    max-width: 1400px !important;
  }
}

/* Smooth transitions */
.timeline-item {
  transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
}

.cursor-grab {
  cursor: grab;
}
.cursor-grabbing {
  cursor: grabbing;
}

/* Text overflow handling */
.timeline-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

@media (max-width: 640px) {
  .timeline-item p {
    overflow: visible !important;    
    display: block !important;           
  }
}

@media (min-width: 1280px) {
  .timeline-item p {
    -webkit-line-clamp: 5;
  }
}
</style>