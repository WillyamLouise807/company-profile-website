<template>
  <!-- Main container with background -->
  <div class="relative">
    <!-- Background image for all devices -->
    <div class="absolute inset-0 -z-10">
      <!-- Smartphone -->
      <img 
        src="assets/bg-image-smartphone.jpg" 
        alt="Background Mobile"
        class="block sm:hidden w-full h-screen object-cover"
      />
      <!-- Tablet -->
      <img 
        src="assets/bg-image-tablet.jpg" 
        alt="Background Tablet"
        class="hidden sm:block lg:hidden w-full h-screen object-cover"
      />
      <!-- Desktop -->
      <img 
        src="assets/bg-image-dekstop.jpg" 
        alt="Background Desktop"
        class="hidden lg:block w-full h-screen object-cover"
      />

      <!-- NEW: Gradient fade to white at bottom -->
      <div class="absolute bottom-0 w-full h-screen bg-gradient-to-b from-transparent to-white"></div>
    </div>

    <!-- Content container -->
    <section class="relative text-white font-poppins">
              
      <!-- HERO SECTION -->
      <section class="relative min-h-screen flex items-center justify-center z-10 text-white font-poppins">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-6xl mx-auto shadow-md backdrop-blur-sm ">
            
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
      <section id="about-gbj" class="relative z-10 bg-white/90 py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div class="bg-grey/10 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-10 w-full max-w-6xl items-center md:items-start">
            
            <!-- Gambar -->
            <div class="w-full md:w-auto flex justify-center md:justify-start">
              <img
                src="assets/index/gambar awal.png"
                alt="Gambar Utama"
                class="rounded-xl object-contain w-full max-w-md md:max-w-lg lg:max-w-xl h-auto transition duration-300"
              />
            </div>
            
            <!-- Konten Teks -->
            <div class="text-black w-full space-y-4 text-sm sm:text-base leading-relaxed">
              <h3 class="text-xl sm:text-2xl font-bold text-red-500">About GBJ</h3>
              <div class="text-lg md:text-lg sm:text-2xl">
                <p><strong>PT Global Bestindo Jaya</strong> merupakan perusahaan yang bergerak di bidang penyediaan perangkat keamanan dan sistem penguncian pintu untuk properti dan bangunan.</p>

                <p>Berawal dari Batam sejak tahun 2015, kami resmi berdiri di Jakarta pada tahun 2018 sebagai bentuk ekspansi dan komitmen kami untuk menjangkau pasar nasional yang lebih luas.</p>

                <p>Melalui merek <strong>Glatino</strong>, kami menghadirkan solusi produk-produk berkualitas tinggi yang dirancang untuk memenuhi kebutuhan keamanan rumah dan bangunan modern di Indonesia.</p>

                <p>Jutaan unit produk Glatino telah digunakan di berbagai proyek perumahan, gedung perkantoran, hingga properti komersial di seluruh Indonesia.</p>        

                <p><strong>Bersama Glatino, hidup lebih aman, nyaman, dan cerdas.</strong></p>
              </div>
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
                  Dengan mengusung semangat <span class="italic"> "Smart Security for Modern Living"</span>, PT Global Bestindo Jaya berkomitmen menjadi perusahaan penyedia solusi keamanan rumah dan bangunan yang terdepan, terpercaya, dan inovatif di Indonesia.
                </p>
                <p class="mt-4 text-sm md:text-base leading-relaxed">
                  Kami memiliki visi untuk membentuk masa depan industri keamanan yang lebih pintar dan praktis melalui produk-produk smart security seperti akses pintu berbasis sidik jari, pengenalan wajah, dan kontrol suara. Kami juga terus berupaya mengedukasi masyarakat Indonesia akan pentingnya sistem keamanan modern dalam kehidupan sehari-hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- CATALOG & EVENTS -->
      <div class="relative z-10 bg-red-600/90 rounded-t-3xl py-12 px-4 sm:px-6 lg:px-8 my-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-3xl text-black backdrop-blur-sm">
            <h2 class="text-3xl text-center font-semibold mb-4">Events</h2>
            <p class="text-sm font-semibold">27 Juli, 2025 09:30 AM - 12:00 PM WIB</p>
            <p class="text-xs mb-6">Bakti Sosial Panti Asuhan</p>
            <a href="#" class="text-sm underline block mt-16 text-center">View All &gt;</a>
          </div>
          <div class="bg-white p-6 rounded-3xl text-black backdrop-blur-sm">
            <h2 class="text-3xl text-center font-semibold mb-4">Our Product</h2>
            <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
            <p class="text-center text-sm mb-4">Engsel Pintu</p>
            <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
            <p class="text-center text-sm mb-4">Engsel Pintu</p>
            <a href="/product" class="text-sm underline block mt-16 text-center">View All &gt;</a>
          </div>
        </div>
      </div>

      <!-- TIMELINE SECTION - PUTIH MERAH -->
      <div class="min-h-screen flex items-center justify-center relative z-10">
        <div class="container mx-auto bg-white py-20 px-4 sm:px-6 lg:px-8 text-gray-800">
          <h2 class="text-3xl font-bold mb-10 text-center text-red-600">Our Journey</h2>

          <div class="relative">
            <!-- Optional: bisa pakai gradient di sisi kiri/kanan -->
            <div class="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
            
            <!-- Scrollable timeline -->
            <div
              id="timeline-scroll"
              class="overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar"
              ref="timelineRef"
              @scroll="handleCardScroll"
              @mousedown="startDrag"
              @mousemove="onDrag"
              @mouseup="endDrag"
              @mouseleave="endDrag"
              style="scroll-padding: 0 calc(50% - 150px);"
            >
              <div class="flex gap-6 w-max pl-[calc(50%-150px)] pr-[calc(50%-150px)] 
                          sm:pl-[calc(50%-150px)] sm:pr-[calc(50%-150px)] 
                          md:pl-[calc(50%-200px)] md:pr-[calc(50%-200px)] 
                          lg:pl-[calc(50%-200px)] lg:pr-[calc(50%-200px)]">
                
                <!-- Timeline items - PUTIH MERAH -->
                <div
                  v-for="(year, index) in timelineYears"
                  :key="year"
                  :class="[ 
                    'timeline-item snap-center transition-all duration-300 ease-in-out transform',
                    'w-[300px] h-[400px] bg-white border border-gray-200 p-8 rounded-xl shrink-0 flex flex-col shadow-md select-none',
                    activeCard === index ? 'scale-105 opacity-100 z-10 shadow-lg' : 'scale-95 opacity-80'
                  ]"
                >
                  <div class="rounded-lg overflow-hidden mb-6 bg-gray-200 w-full h-[240px] flex-shrink-0">
                    <img 
                      :src="timelineImages[index]" 
                      alt=""
                      draggable="false"
                      class="w-full h-full object-contain select-none pointer-events-none"
                    />
                  </div>
                  <h3 class="text-xl font-bold text-red-600 mb-4">{{ year }}</h3>
                  <p class="text-base leading-relaxed text-gray-700 break-words overflow-hidden text-ellipsis">
                    {{ timelineDescriptions[index] }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Mobile indicators -->
            <div class="flex justify-center mt-6 gap-2 md:hidden">
              <div 
                v-for="(year, index) in timelineYears" 
                :key="'dot-'+year"
                class="w-2 h-2 rounded-full transition-all"
                :class="activeCard === index ? 'bg-red-600 w-4' : 'bg-gray-400'"
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
import FooterComponent from '../components/footer.vue'

//Import Gambar Our Journey
import img2018 from '@/assets/index/2018.jpeg'
import img2019 from '@/assets/index/2019.jpeg'
import img2020 from '@/assets/index/2020.jpeg'
import img2021 from '@/assets/index/2021.jpeg'
import img2022 from '@/assets/index/2022.jpeg'
import img2023 from '@/assets/index/2023.jpeg'
import img2024 from '@/assets/index/2024.jpeg'
import img2025 from '@/assets/index/2025.jpeg'

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

const timelineImages = [
  img2018, img2019, img2020, img2021,
  img2022, img2023, img2024, img2025
];


// Drag functionality
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const timelineRef = ref(null);

const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.pageX - timelineRef.value.offsetLeft;
  scrollLeft.value = timelineRef.value.scrollLeft;
  timelineRef.value.style.cursor = 'grabbing';
  timelineRef.value.style.scrollSnapType = 'none'; // Disable snap during drag
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - timelineRef.value.offsetLeft;
  const walk = (x - startX.value) * 2; // Adjust multiplier for sensitivity
  timelineRef.value.scrollLeft = scrollLeft.value - walk;
};

const endDrag = () => {
  isDragging.value = false;
  if (timelineRef.value) {
    timelineRef.value.style.cursor = 'grab';
    timelineRef.value.style.scrollSnapType = 'x mandatory'; // Re-enable snap
  }
};

// Handle scroll to detect active card
const activeCard = ref(0);
const handleCardScroll = () => {
  if (isDragging.value) return; // Skip during drag
  
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
  const items = document.querySelectorAll('.timeline-item');
  if (items.length > 0) {
    const middleIndex = Math.floor(items.length / 2);
    activeCard.value = middleIndex;
    // items[middleIndex].scrollIntoView({ 
    //   behavior: 'auto', 
    //   inline: 'center',
    //   block: 'nearest'
    // });
  }
};

onMounted(() => {
  initTimeline();
  window.addEventListener('resize', handleCardScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleCardScroll);
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

/* Better transition for active card */
.timeline-item {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Timeline cards styling - FULL TEXT DISPLAY FOR ALL DEVICES */
.timeline-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Changed from space-between */
}

/* UNIVERSAL TEXT SETTING - NO CONSTRAINTS FOR ANY DEVICE */
.timeline-item p {
  overflow: visible !important;        /* Allow text overflow */
  text-overflow: unset !important;     /* No ellipsis (...) */
  display: block !important;           /* Normal block display */
  -webkit-line-clamp: unset !important; /* No line limit */
  -webkit-box-orient: unset !important; /* Reset orientation */
  white-space: normal !important;      /* Normal text wrapping */
  word-wrap: break-word !important;    /* Break long words */
  line-height: 1.5 !important;        /* Readable spacing */
}

/* Mobile adjustments - Taller cards for more text space */
@media (max-width: 640px) {
  .timeline-item {
    width: 280px !important;
    height: 450px !important;  /* Increased height */
    padding: 20px;
  }
  
  .timeline-item .bg-gray-300 {
    height: 160px !important;  /* Smaller image */
  }
  
  .timeline-item h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }
  
  .timeline-item p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .timeline-item {
    width: 260px !important;
    height: 420px !important;  /* Increased height */
    padding: 16px;
  }
  
  .timeline-item .bg-gray-300 {
    height: 140px !important;  /* Smaller image */
  }
  
  .timeline-item h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .timeline-item p {
    font-size: 13px;
  }
}

/* Tablet adjustments - Ensure enough space */
@media (min-width: 641px) and (max-width: 1024px) {
  .timeline-item {
    height: 450px !important;  /* Increased height */
  }
  
  .timeline-item .bg-gray-300 {
    height: 180px !important;  /* Smaller image for more text space */
  }
}

/* Desktop adjustments - Ensure enough space */
@media (min-width: 1025px) {
  .timeline-item {
    height: 480px !important;  /* Increased height */
  }
  
  .timeline-item .bg-gray-300 {
    height: 200px !important;  /* Smaller image for more text space */
  }
}
</style>