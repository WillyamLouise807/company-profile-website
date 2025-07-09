<template>
  <section class="min-h-screen bg-black bg-cover bg-top bg-no-repeat text-white font-poppins">
    <div class="container mx-auto px-4 py-20 flex justify-center items-center">
      <div class="bg-black p-6 md:p-10 rounded-2xl flex flex-col md:flex-row gap-8 md:gap-14 items-center w-full max-w-6xl shadow-lg">

        <!-- Gambar + Nama -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="C:\Users\Admin\company-profile-website\assets\index\gambar awal.png"
            alt="Gambar Utama"
            class="rounded-lg w-64 h-72 md:w-80 md:h-96 object-cover mb-4"
          />          
        </div>

        <!-- Teks + Badge + Tombol -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <h1 class="text-2xl md:text-4xl font-extrabold text-red-600 leading-snug mb-4">
            MENCIPTAKAN <br />
            AKSESORIS ALUMUNIUM <br />
            YANG BERKUALITAS
          </h1>

          <!-- Badge -->
          <div class="flex gap-4 flex-wrap justify-center md:justify-start mb-6">
            <img src="C:\Users\Admin\company-profile-website\assets\index\badge-premium.png" alt="Premium" class="w-16 h-16" />
            <img src="C:\Users\Admin\company-profile-website\assets\index\badge-best.png" alt="Best" class="w-16 h-16" />
            <img src="C:\Users\Admin\company-profile-website\assets\index\badge-10years.png" alt="10 Years" class="w-16 h-16" />
          </div>

          <!-- Tombol -->
          <NuxtLink to="/about">
            <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              About Us
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
