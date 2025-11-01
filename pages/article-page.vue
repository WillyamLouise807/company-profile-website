<template>
  <!-- Banner Responsive -->
  <div class="w-full mt-16 rounded-2xl overflow-hidden relative">
    <!-- Smartphone -->
    <div class="relative block sm:hidden">
      <img 
        src="/article/banner-handphone.png" 
        alt="Banner Handphone"
        class="w-full h-auto object-cover"
      />
     
    </div>

    <!-- Tablet -->
    <div class="relative hidden sm:block lg:hidden">
      <img 
        src="/article/banner-tablet.png" 
        alt="Banner Tablet"
        class="w-full h-auto object-cover"
      />

    </div>

    <!-- Desktop -->
    <div class="relative hidden lg:block">
      <img 
        src="/article/banner-dekstop.png" 
        alt="Banner Desktop"
        class="w-full h-auto object-cover"
      />

    </div>
  </div>

  <!-- Content -->
  <div class="bg-[#ffffff] container mx-auto py-12 px-4 sm:px-8 text-black font-poppins">
    <!-- Breadcrumb -->
    <nav class="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink to="/" class="hover:underline text-black">Home</NuxtLink>
        </li>
        <li>/</li>
        <li class="text-black font-semibold">Article</li>
      </ol>
    </nav>

    <!-- Grid Artikel -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(article, index) in articles"
        :key="index"
        class="bg-white rounded-2xl overflow-hidden hover:shadow-md transition duration-300"
      >
        <div class="w-full h-56 sm:h-64 lg:h-72 overflow-hidden">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-xs sm:text-sm lg:text-base text-gray-500 mb-1">{{ article.date }}</p>
          
          <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 leading-snug">
            {{ article.title }}
          </h2>
          
          <p class="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {{ article.description }}
          </p>
          
          <NuxtLink
            :to="article.link"
            class="text-red-600 hover:underline text-xs sm:text-sm lg:text-base font-medium"
          >
            Read more &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script setup>
import FooterComponent from '../components/footer.vue'

const articles = [
  {
    title: 'Bakti Sosial Yayasan Yatim Piatu & Dhuafa Angku Budi Sati Bhakti Pertiwi.',
    description:
      'Pada tanggal 27 Juli 2025, Heartifact dengan penuh semangat menyelenggarakan sebuah kegiatan Bakti Sosial yang bertujuan untuk memberikan dampak positif dan menghadirkan..',
    date: '27 Juli 2025',
    image: '/article/baksos-1.jpg',
    link: '/event/bakti-sosial-july-2025',
  },
  {
    title: 'Bakti Sosial Bodhiarama Meditation Centre, Bogor',
    description:
      'Pada tanggal 26 Oktober 2025, Heartifact dengan penuh semangat menyelenggarakan sebuah kegiatan Bakti Sosial yang bertujuan untuk memberikan dampak positif dan menghadirkan..',
    date: '26 Oktober 2025',
    image: '/article/baksos-2.jpg',
    link: '/event/bakti-sosial-october-2025',
  },
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
