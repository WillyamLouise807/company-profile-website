<template>
  <section class="bg-white py-24 font-poppins">
    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Title -->
      <div class="flex items-center gap-4 mb-6">
        <h2 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
          LATEST NEWS
        </h2>
        <div class="flex-1 border-t-2 border-black"></div>
      </div>

      <!-- Desktop layout -->
      <div class="hidden lg:grid lg:grid-cols-3 py-16 gap-8">
        <!-- Left big article -->
        <div class="lg:col-span-2">
          <NuxtLink
            to="/event/bakti-sosial-july-2025"
            class="block group"
          >
            <div class="overflow-hidden"> <!-- penting supaya gambar tidak keluar kotak -->
              <img
                src="/article/baksos-1.jpg"
                alt="article 1"
                class="w-full h-auto object-cover mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
              CHARITY
            </span>
            <h3 class="text-xl font-semibold text-gray-900">
              Bakti Sosial Yayasan Yatim Piatu & Dhuafa Angku Budi Sati Bhakti Pertiwi.
            </h3>
            <p class="text-gray-500 text-sm mt-1">
              27 July 2025 | By Heartifact
            </p>
          </NuxtLink>
        </div>


        <!-- Right list -->
        <div class="flex flex-col divide-y">
          <!-- article item -->
          <div class="flex gap-16 py-16">
            <div class="flex-1">
              <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
                CHARITY [Comming Soon]
              </span>
              <h4 class="text-md font-semibold text-gray-900">
                Trouble sleeping? This moon-shaped bedside light might help
              </h4>
              <p class="text-gray-500 text-sm mt-1">
                12 June 2020 | By Rob Verger
              </p>
            </div>
            <img
              src="/article/baksos-1.jpg"
              alt="article 2"
              class="w-auto h-24 object-cover flex-shrink-0"
            />
          </div>

          <div class="flex gap-16 py-16">
            <div class="flex-1">
              <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
                CHARITY [Comming Soon]
              </span>
              <h4 class="text-md font-semibold text-gray-900">
                A simple background photo is forcing Android users to factory reset smartphones
              </h4>
              <p class="text-gray-500 text-sm mt-1">
                8 June 2020 | By Stan Horaczek
              </p>
            </div>
            <img
              src="/article/baksos-1.jpg"
              alt="article 3"
              class="w-auto h-24 object-cover flex-shrink-0"
            />
          </div>

          <div class="flex gap-16 py-16">
            <div class="flex-1">
              <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
                CHARITY [Comming Soon]
              </span>
              <h4 class="text-md font-semibold text-gray-900">
                You should blur the faces in your protest photos. Here’s how
              </h4>
              <p class="text-gray-500 text-sm mt-1">
                5 June 2020 | By Rob Verger
              </p>
            </div>
            <img
              src="/article/baksos-1.jpg"
              alt="article 4"
              class="w-auto h-24 object-cover flex-shrink-0"
            />
          </div>
        </div>
      </div>

      <!-- Tablet / Mobile layout -->
      <div class="lg:hidden space-y-12">
        <!-- Atas 1 berita besar -->
        <NuxtLink
          to="/event/bakti-sosial-july-2025"
          class="block group"
        >
          <div class="lg:col-span-2">
            <img
              src="/article/baksos-1.jpg"
              alt="article 1"
              class="w-full h-auto object-cover mb-4 group-hover:opacity-90 transition"
            />
            <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
              CHARITY
            </span>
            <h3 class="text-xl font-semibold text-gray-900 group-hover:text-red-500 transition">
              Bakti Sosial Yayasan Yatim Piatu & Dhuafa Angku Budi Sati Bhakti Pertiwi.
            </h3>
            <p class="text-gray-500 text-sm mt-1">
              27 July 2025 | By Heartifact
            </p>
          </div>
        </NuxtLink>

        <!-- Bawah 3 grid berita -->
        <div class="grid md:grid-cols-3 gap-6 relative">
          <!-- garis vertikal pembatas tengah -->
          <div class="absolute top-0 bottom-0 left-1/3 w-px bg-gray-300 hidden md:block"></div>
          <div class="absolute top-0 bottom-0 left-2/3 w-px bg-gray-300 hidden md:block"></div>

          <div class="flex flex-col">
            <img src="/article/baksos-1.jpg" alt="" class="w-full h-auto object-cover mb-2" />
            <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
              COMMING SOON
            </span>
            <h4 class="text-md font-semibold text-gray-900">
              COMMING SOON
            </h4>
            <p class="text-gray-500 text-sm mt-1">
              12 June 2020 | By Rob Verger
            </p>
          </div>

          <div class="flex flex-col">
            <img src="/article/baksos-1.jpg" alt="" class="w-full h-auto object-cover mb-2" />
            <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
              COMMING SOON
            </span>
            <h4 class="text-md font-semibold text-gray-900">
              COMMING SOON
            </h4>
            <p class="text-gray-500 text-sm mt-1">
              8 June 2020 | By Stan Horaczek
            </p>
          </div>

          <div class="flex flex-col">
            <img src="/article/baksos-1.jpg" alt="" class="w-full h-auto object-cover mb-2" />
            <span class="uppercase text-red-500 text-xs font-semibold block mb-1">
              COMMING SOON
            </span>
            <h4 class="text-md font-semibold text-gray-900">
              COMMING SOON
            </h4>
            <p class="text-gray-500 text-sm mt-1">
              5 June 2020 | By Rob Verger
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// static
</script>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>