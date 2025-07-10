<template>
  <section class="bg-black bg-cover bg-top bg-no-repeat text-white font-poppins">

   <!-- HERO FULLSCREEN -->
    <div class="min-h-screen flex items-center justify-center">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-black p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-14 w-full max-w-6xl mx-auto shadow-lg">

          <!-- Gambar -->
          <div class="flex justify-center items-center md:items-start">
            <img
              src="/assets/index/gambar awal.png"
              alt="Gambar Utama"
              class="rounded-lg w-64 h-72 md:w-80 md:h-96 object-cover"
            />
          </div>

          <!-- Teks + Badge + Tombol -->
          <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left mx-auto max-w-lg h-full">
            <h1 class="text-2xl md:text-4xl font-extrabold text-red-600 leading-snug mb-4">
              MENCIPTAKAN <br />
              AKSESORIS ALUMUNIUM <br />
              YANG BERKUALITAS
            </h1>

            <!-- Badge -->
            <div class="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
              <img src="/assets/index/badge-premium.png" alt="Premium" class="w-16 h-16" />
              <img src="/assets/index/badge-best.png" alt="Best" class="w-16 h-16" />
              <img src="/assets/index/badge-10years.png" alt="10 Years" class="w-16 h-16" />
            </div>

            <!-- Tombol Scroll -->
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

        <!-- Gambar -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/assets/index/gambar awal.png"
            alt="Gambar Utama"
            class="rounded-lg w-64 h-72 md:w-80 md:h-96 object-cover mb-4 max-w-full"
          />
        </div>

        <!-- Deskripsi -->
        <div class="flex items-start gap-4 flex-1 text-white">
          <div>
            <h3 class="text-lg font-bold mb-1">About GBJ</h3>
            <p class="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- MISSION & VISION -->
    <div class="container mx-auto bg-red-600 rounded-2xl p-6 md:p-10 text-white">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">

        <!-- Mission -->
        <div class="flex items-start gap-4 flex-1">
          <img
            src="/assets/index/mission.png"
            alt="Mission"
            class="w-10 h-10 mt-1"
          />
          <div>
            <h3 class="text-lg font-bold mb-1">Our Mission</h3>
            <p class="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        <!-- Vision -->
        <div class="flex items-start gap-4 flex-1">
          <img
            src="/assets/index/vision.png"
            alt="Vision"
            class="w-10 h-10 mt-1"
          />
          <div>
            <h3 class="text-lg font-bold mb-1">Our Vision</h3>
            <p class="text-sm md:text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>

   <!-- Pembatas Catalog Event & Produk -->
    <div class="w-full bg-red-600 rounded-t-3xl py-12 px-4 sm:px-6 lg:px-8 my-36">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <!-- Events -->
        <div class="bg-black bg-opacity-50 p-6 rounded-3xl text-white">
          <h2 class="text-3xl text-center font-semibold mb-4">Events</h2>
          <p class="text-sm font-semibold">27 Juli, 2025 09:30 AM - 12:00 PM WIB</p>
          <p class="text-xs mb-6">Bakti Sosial Panti Asuhan</p>
          <a href="#" class="text-sm underline block mt-16 text-center">View All &gt;</a>
        </div>

        <!-- Our Product -->
        <div class="bg-black bg-opacity-50 p-6 rounded-3xl text-white">
          <h2 class="text-3xl text-center font-semibold mb-4">Our Product</h2>

          <!-- Produk 1 -->
          <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
          <p class="text-center text-sm mb-4">Engsel Pintu</p>

          <!-- Produk 2 -->
          <div class="bg-gray-200 h-48 w-48 mb-2 mx-auto"></div>
          <p class="text-center text-sm mb-4">Engsel Pintu</p>

          <a href="/product" class="text-sm underline block mt-16 text-center">View All &gt;</a>
        </div>
      </div>
    </div>

    <!-- Pembatas History -->
     <div class="container mx-auto">
      <div class="text-white">History Setion</div>
    </div>  

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollToSection = () => {
  const section = document.getElementById('about-gbj')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const currentSection = ref('home') // default section

const handleScroll = () => {
  const about = document.getElementById('about-gbj')
  const scrollPosition = window.scrollY + window.innerHeight / 2

  if (about && scrollPosition >= about.offsetTop) {
    currentSection.value = 'about'
  } else {
    currentSection.value = 'home'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

defineExpose({ currentSection })

</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
