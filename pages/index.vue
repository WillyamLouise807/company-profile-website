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
      <section class="relative min-h-screen flex items-center justify-center z-10 text-white font-poppins">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-6xl mx-auto shadow-lg backdrop-blur-sm ">
            
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

      <!-- TIMELINE SECTION - DIPERBESAR -->
      <div class="min-h-screen flex items-center justify-center relative z-10">
        <div class="container mx-auto bg-black py-20 px-4 sm:px-6 lg:px-8 text-white">
          <h2 class="text-3xl font-bold mb-10 text-center text-red-600">Our Journey</h2>

        <div class="relative">
          <!-- Gradient overlays -->
          <div class="absolute left-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div class="absolute right-0 top-0 bottom-0 w-10 md:w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
          
          <!-- Scroll container with improved drag -->
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
            <!-- UBAH: Perbesar gap dan padding -->
            <div class="flex gap-6 w-max pl-[calc(50%-150px)] pr-[calc(50%-150px)] 
                      sm:pl-[calc(50%-150px)] sm:pr-[calc(50%-150px)] 
                      md:pl-[calc(50%-200px)] md:pr-[calc(50%-200px)] 
                      lg:pl-[calc(50%-200px)] lg:pr-[calc(50%-200px)]">
              
              <!-- Timeline items - DIPERBESAR -->             
              <div
                v-for="(year, index) in timelineYears"
                :key="year"
                :class="[
                  'timeline-item snap-center transition-all duration-300 ease-in-out transform',
                  'w-[300px] h-[400px]',
                  'bg-zinc-900 p-8 rounded-xl shrink-0 flex flex-col',
                  activeCard === index ? 'scale-105 opacity-100 z-10 shadow-lg' : 'scale-95 opacity-70'
                ]">
                <!-- PERBESAR GAMBAR -->
                <div class="rounded-lg overflow-hidden mb-6 bg-gray-300 w-full h-[240px] flex-shrink-0"></div>
                <!-- PERBESAR FONT -->
                <h3 class="text-xl font-bold text-red-500 mb-4">{{ year }}</h3>
                <p class="text-base leading-relaxed text-white break-words overflow-hidden text-ellipsis">
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
              :class="activeCard === index ? 'bg-red-500 w-4' : 'bg-gray-500'"
            ></div>
          </div>
        </div>
        <!-- FLOATING WHATSAPP BUBBLE -->
        <div class="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/6281218818898?text=Halo,%20saya%20tertarik%20dengan%20produk%20Glatino"
            target="_blank"
            class="whatsapp-bubble group flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <!-- WhatsApp Icon -->
            <svg 
              class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
            </svg>
            
            <!-- Pulse Animation -->
            <div class="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
          </a>
          
          <!-- Tooltip -->
          <div class="tooltip absolute bottom-20 right-0 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us on WhatsApp
            <div class="absolute -bottom-1 right-4 w-2 h-2 bg-black transform rotate-45"></div>
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