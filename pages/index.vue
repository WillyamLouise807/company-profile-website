<template>
  <!-- Main container with background -->
  <div class="relative">
    <!-- Background image for all devices -->
    <div class="absolute inset-0 -z-10">
      <!-- Smartphone -->
      <img 
        src="/asset/bg-image-smartphone.jpg" 
        alt="Background Mobile"
        class="block sm:hidden w-full h-screen object-cover"
      />
      <!-- Tablet -->
      <img 
        src="/asset/bg-image-tablet.jpg" 
        alt="Background Tablet"
        class="hidden sm:block lg:hidden w-full h-screen object-cover"
      />
      <!-- Desktop -->
      <img 
        src="/asset/bg-image-dekstop.jpg" 
        alt="Background Desktop"
        class="hidden lg:block w-full h-screen object-cover"
      />

      <!-- NEW: Gradient fade to white at bottom -->
      <div class="absolute bottom-0 w-full h-screen bg-gradient-to-b from-transparent to-white"></div>
    </div>
  </div>

  <!-- Section Awal -->
<section>
  <div class="font-poppins">
    <div class="max-w-screen-2xl mx-auto px-4">
      <!-- grid responsive -->
      <div class="grid grid-cols-1 md:grid-cols-2 h-screen md:h-auto">
        
        <!-- Kanan: Gambar (order 1 di hp, order 2 di desktop) -->
        <div class="flex justify-center md:justify-end items-center order-1 md:order-2">
          <img 
            src="/asset/index/gambar awal-2.png" 
            alt="Gambar Awal" 
            class="w-full max-w-[800px] h-auto object-contain"
          />
        </div>       

        <!-- Kiri: Text (order 2 di hp, order 1 di desktop) -->
        <div class="flex flex-col justify-center items-start text-left order-2 md:order-1 px-4 md:px-0">
          <FadeInOnScroll direction="up">
            <div class="text-2xl md:text-6xl font-extrabold text-red-700 leading-snug mb-6">
              <p>PT GLOBAL BESTINDO</p>
              <p>JAYA</p>
            </div>
            <div class="text-red-700 text-sm md:text-lg mb-12">
              <p>Menciptakan aksesoris aluminium yang berkualitas</p>
            </div>
            <div>
              <button
                @click="scrollToSection"
                class="bg-red-700 hover:bg-red-800 text-white px-20 py-3 rounded-full font-semibold transition duration-300 pulse-btn"
              >
                FIND OUT MORE
              </button>
            </div>           
          </FadeInOnScroll>          
        </div>         
      </div>      
    </div>
  </div>
</section>

  <section id="about-us" class="relative z-10 bg-[url('asset/bg-repeat.jpg')] bg-repeat py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-screen-2xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">PRODUCT RANGE</h2>
      </div>
      
      <!-- Grid 3 kolom -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card Door Lock -->
        <NuxtLink 
          to="/produk/door-lock"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
        >
          <div class="h-48 overflow-hidden">
            <img 
              src="/asset/product/Door-Lock.png" 
              alt="Door Lock" 
              class="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Door Lock</h3>
            <div class="flex justify-between items-center">
              <span class="text-red-600 font-medium text-sm inline-flex items-center group-hover:underline">
                View
              </span>
              <span class="text-red-600 transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </NuxtLink>


        <!-- Card Patch Fitting -->
        <NuxtLink 
          to="/produk/patch-fitting"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
        >
          <div
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
          >
            <div class="h-48 overflow-hidden">
              <img 
                src="/asset/product/patch-fitting.png" 
                alt="Patch Fitting" 
                class="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Patch Fitting</h3>
              <div class="flex justify-between items-center">
                <a href="#" class="text-red-600 font-medium text-sm inline-flex items-center group-hover:underline">
                  View
                </a>
                <span class="text-red-600 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Card Sliding Rail -->
        <NuxtLink 
          to="/produk/patch-fitting"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
        >
          <div
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
          >
            <div class="h-48 overflow-hidden">
              <img 
                src="/asset/product/sliding-rail.png" 
                alt="Sliding Rail" 
                class="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Sliding Rail</h3>
              <div class="flex justify-between items-center">
                <a href="#" class="text-red-600 font-medium text-sm inline-flex items-center group-hover:underline">
                  View
                </a>
                <span class="text-red-600 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </NuxtLink>
        

        <!-- Card Aluminium Lock -->
        <NuxtLink 
          to="/produk/alumunium-lock"          
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
        >
          <div
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
          >
            <div class="h-48 overflow-hidden">
              <img 
                src="/asset/product/alumunium-lock.png" 
                alt="Aluminium Lock" 
                class="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Aluminium Lock</h3>
              <div class="flex justify-between items-center">
                <a href="#" class="text-red-600 font-medium text-sm inline-flex items-center group-hover:underline">
                  View
                </a>
                <span class="text-red-600 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Card Roller Caster -->
        <NuxtLink 
          to="/produk/roller-caster"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
        >
          <div
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
          >
            <div class="h-48 overflow-hidden">
              <img 
                src="/asset/product/roller-caster.png" 
                alt="Roller Caster" 
                class="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Roller Caster</h3>
              <div class="flex justify-between items-center">
                <a href="#" class="text-red-600 font-medium text-sm inline-flex items-center group-hover:underline">
                  View
                </a>
                <span class="text-red-600 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Card Mortise Lock -->
        <NuxtLink 
          to="/produk/mortise-lock"
          class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
        >
          <div
            class="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200"
          >
            <div class="h-48 overflow-hidden">
              <img 
                src="/asset/product/mortise-lock.png" 
                alt="Mortise Lock" 
                class="w-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Mortise Lock</h3>
              <div class="flex justify-between items-center">
                <a href="#" class="text-red-600 font-medium text-sm inline-flex items-center group-hover:underline">
                  View
                </a>
                <span class="text-red-600 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>        
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Penjelasan GBJ -->
  <section class="relative font-poppins bg-[url('asset/bg-repeat.jpg')] bg-repeat pb-12">
    <!-- Grid kiri kanan -->
    <div class="grid md:grid-cols-2">
      <!-- Kiri: Background merah + teks -->
      <div class="bg-red-800 flex items-center">
        <div class="max-w-xl mx-auto px-6 py-16 text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">PT. GLOBAL BESTINDO JAYA</h2>
          <p class="mb-4">
            <p><strong>PT Global Bestindo Jaya</strong> merupakan perusahaan yang bergerak di bidang penyediaan perangkat keamanan dan sistem penguncian pintu untuk properti dan bangunan.</p> <br>
                <p>Berawal dari Batam sejak tahun 2015, kami resmi berdiri di Jakarta pada tahun 2018 sebagai bentuk ekspansi dan komitmen kami untuk menjangkau pasar nasional yang lebih luas.</p> <br>
                <p>Melalui merek <strong>Glatino</strong>, kami menghadirkan solusi produk-produk berkualitas tinggi yang dirancang untuk memenuhi kebutuhan keamanan rumah dan bangunan modern di Indonesia.</p> <br>
                <!-- <p>Jutaan unit produk Glatino telah digunakan di berbagai proyek perumahan, gedung perkantoran, hingga properti komersial di seluruh Indonesia.</p>         -->
                <p><strong>Bersama Glatino, hidup lebih aman, nyaman, dan cerdas.</strong></p>
          </p>
        </div>
      </div>

      <!-- Kanan: Gambar file:giant-glass-building.jpg-->
      <div class="bg-gray-100">
        <img src="/asset/index/building.png" alt="Building" class="w-full h-112 object-cover" />
      </div>
    </div>

    <!-- 3 Card putih yang overlap -->
    <div
      class="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-10"
    >
      <div
        class="bg-white rounded-xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition"
      >
        <div class="text-red-600 text-3xl">
          <!-- icon -->
          <img src="/asset/index/industry.png" alt="Experience" class="w-10 h-auto" />
        </div>
        <div>
          <h3 class="font-bold text-lg">Experience</h3>
          <p class="text-sm text-gray-600">20 years of activity</p>
        </div>
      </div>

      <div
        class="bg-white rounded-xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition"
      >
        <div class="text-red-600 text-3xl">
          <!-- icon -->
          <img src="/asset/index/professional.png" alt="Professional" class="w-10 h-auto" />
        </div>
        <div>
          <h3 class="font-bold text-lg">Team</h3>
          <p class="text-sm text-gray-600">Professionals in the industry</p>
        </div>
      </div>

      <div
        class="bg-white rounded-xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition"
      >
        <div class="text-red-600 text-3xl">
          <!-- icon -->
          <img src="/asset/index/best.png" alt="Quality" class="w-10 h-auto" />
        </div>
        <div>
          <h3 class="font-bold text-lg">Integrated Quality</h3>
          <p class="text-sm text-gray-600">Highest standards in every product</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Visi Misi Section -->
  <section class="relative bg-[url('/asset/bg-repeat.jpg')] bg-cover bg-center font-poppins pb-12 text-black">

    <div class="relative max-w-screen-xl mx-auto px-6 py-16">
      <!-- VISION -->
      <FadeInOnScroll direction="up">
        <div class="mb-16">
          <span class="inline-block bg-red-500 text-white font-semibold px-3 py-1 text-sm uppercase mb-4">
            What we aspire to be
          </span>
          <h2 class="text-4xl md:text-7xl font-bold mb-4">OUR VISION</h2>
          <p class="text-lg leading-relaxed text-red-500">
            Dengan mengusung semangat <strong class="text-gray-800">"Smart Security for Modern Living"</strong>, 
          PT Global Bestindo Jaya berkomitmen menjadi perusahaan penyedia solusi keamanan rumah 
          dan bangunan yang terdepan, terpercaya, dan inovatif di Indonesia.
          <br><br>
          Kami memiliki visi untuk membentuk masa depan industri keamanan yang lebih pintar dan praktis 
          melalui produk-produk smart security seperti akses pintu berbasis sidik jari, pengenalan wajah, 
          dan kontrol suara. Kami juga terus berupaya mengedukasi masyarakat Indonesia akan pentingnya 
          sistem keamanan modern dalam kehidupan sehari-hari.
          </p>
        </div>
      </FadeInOnScroll>
      

      <!-- MISSION -->
      <FadeInOnScroll direction="up">
        <div>
          <span class="inline-block bg-red-500 text-white font-semibold px-3 py-1 text-sm uppercase mb-4">
            Who we are, what we do
          </span>
          <h2 class="text-4xl md:text-7xl font-bold mb-10">OUR MISSION</h2>
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">PRODUK BERKUALITAS DAN TEKNOLOGI TERKINI</h3>
              <p class="text-red-500 font-bold text-lg">
                Menyediakan produk-produk penguncian dan aksesoris pintu berkualitas tinggi dengan harga kompetitif dan teknologi terkini.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">PELAYANAN PRIMA & KEPUASAN PELANGGAN</h3>
              <p class="text-red-500 font-bold text-lg">
                Mengutamakan pelayanan prima dan kepuasan pelanggan dalam setiap aspek bisnis kami.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">PENGEMBANGAN SUMBER DAYA MANUSIA</h3>
              <p class="text-red-500 font-bold text-lg">
                Meningkatkan kapabilitas sumber daya manusia melalui pelatihan berkelanjutan untuk menciptakan layanan yang profesional dan responsif.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">MENJADI MITRA TERPERCAYA</h3>
              <p class="text-red-500 font-bold text-lg">
                Menjadi mitra terpercaya bagi pelaku industri properti di Indonesia dan Asia Tenggara.
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  </section>
  
  <!-- Our Journey Section -->
  <!-- <section>
    <div>
      <OurJourney />
    </div>
  </section> -->

  <!-- Our Journey Section -->
  <!-- <section>
    <div>
      <History />
    </div>
  </section>  -->
  
  <!-- Uji Coba Section -->
  <section>
    <div>
      <UjiCoba />
    </div>
  </section>

  <!-- Latest News Section -->
  <section>
    <div>
      <LatestNews />
    </div>
  </section>

  <!-- Contact Section -->
  <section class="bg-[url('/asset/index/contact-bg.jpeg')] 
                  bg-cover bg-center 
                  text-white px-4 sm:px-6 lg:px-8 font-poppins relative">
    <div class="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      
      <!-- Text + Form -->
      <FadeInOnScroll direction="up">
        <div class="order-2 md:order-1 pb-16 md:py-24">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 md:text-white text-red-900 mt-10 md:mt-0">
            Kami senang bisa terhubung dengan Anda.
          </h2>
          <p class="mb-8 text-gray-300">
            Hubungi kami untuk informasi lebih lanjut mengenai produk, layanan, atau peluang kemitraan. Tim kami akan merespons dengan cepat dan memberikan solusi terbaik untuk kebutuhan Anda.
          </p>

          <!-- Form -->
          <div class="bg-white rounded-full flex overflow-hidden flex items-center justify-center max-w-xs">      
            <!-- Tombol CTA -->
          <NuxtLink 
            to="/contact" 
            class="
              relative 
              font-extrabold 
              text-transparent 
              bg-clip-text 
              bg-[url('/asset/index/contact-bg.jpeg')] 
              bg-cover bg-center 
              px-6 py-3 
              rounded-full 
              transition 
              mx-1 my-1">
            Go to Contact Form
          </NuxtLink>
          </div>
        </div>
      </FadeInOnScroll>
      

      <!-- Laptop Image -->
      <FadeInOnScroll>
        <div class="order-1 md:order-2 flex justify-center md:justify-end relative">
          <img src="/asset/index/laptop.png"
              alt="Laptop" 
              class="w-[640px] h-auto -mt-6 md:-mt-10 md:-ml-16 relative z-20 floating" />
        </div>
      </FadeInOnScroll>
      <!-- -mt-12 = geser ke atas 3rem; md:-mt-16 = 4rem di layar besar -->
    </div>
  </section>

  <FooterComponent />
</template>

<script lang="ts" setup>
const scrollToSection = () => {
  const target = document.getElementById('about-us');
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const duration = 1500; // ms
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
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

import LatestNews from '~/components/LatestNews.vue'
import OurJourney from '~/components/OurJourney.vue'
import History from '~/components/History.vue'
import UjiCoba from '~/components/UjiCoba.vue'
import FooterComponent from '~/components/footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08); /* membesar sedikit */
  }
}

.pulse-btn {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px); /* naik 12px */
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
</style>5433543