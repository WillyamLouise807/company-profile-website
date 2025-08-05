<template>

    <div class="w-full h-auto overflow-hidden mt-16 rounded-2xl">
      <img
        src="/article/banner.jpg"
        alt="Article & Event Banner"
        class="w-full h-auto"
      />
    </div>

  <div class="bg-[#ffffff] container mx-auto py-12 px-4 sm:px-8 text-black font-poppins">

    <!-- Hero Header -->
    <!-- <div class="w-full bg-black rounded-2xl overflow-hidden mb-10">
      <div class="grid grid-cols-1 md:grid-cols-3 min-h-[300px]">
        Bagian Tulisan (66%)
        <div class="col-span-2 flex flex-col items-center justify-center text-center px-6 sm:px-12 bg-black bg-opacity-90 text-white">
          <h1 class="text-3xl sm:text-4xl font-bold mb-4">Article & Event</h1>
          <p class="text-sm sm:text-base text-gray-300 max-w-xl">
            Temukan informasi terbaru seputar produk, acara, dan kegiatan kami.
          </p>
        </div>

        Bagian Gambar (33%)
        <div class="relative flex items-center justify-center">
          <img
            src="/article/banner.jpg"
            alt="Article Banner"
            class="max-h-[280px] w-auto object-contain"
          />
        </div>
      </div>
    </div> -->

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
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-auto object-cover"
        />
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-1">{{ article.date }}</p>
          <h2 class="text-2xl font-semibold mb-2">{{ article.title }}</h2>
          <p class="text-md text-gray-600 mb-4 line-clamp-3">{{ article.description }}</p>
          <NuxtLink
            :to="article.link"
            class="text-red-600 hover:underline text-sm font-medium"
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
// Import FooterComponent dari file yang sama di folder 'pages'
import FooterComponent from '../components/footer.vue'

const articles = [
  {
    title: 'Bakti Sosial Yayasan Yatim Piatu & Dhuafa Angku Budi Sati Bhakti Pertiwi.',
    description:
      'Glatino turut mengadakan bakti sosial di panti asuhan sebagai bentuk kepedulian terhadap sesama.',
    date: '27 Juli 2025',
    image: '/article/baksos-1.jpg',
    link: '/event/bakti-sosial-july-2025',
  },
  // {
  //   title: 'Pameran Produk Baru 2025',
  //   description:
  //     'Kami memperkenalkan berbagai produk terbaru dengan fitur unggulan pada pameran di Jakarta Convention Center.',
  //   date: '15 Juni 2025',
  //   image: '/article/pameran-2025.jpg',
  //   link: '/event/article/pameran-2025',
  // },
  // {
  //   title: 'Kunjungan Ke Pabrik',
  //   description:
  //     'Rekanan bisnis kami diajak untuk melihat langsung proses produksi di pabrik Glatino.',
  //   date: '20 Mei 2025',
  //   image: '/article/factory-visit.jpg',
  //   link: '/event/article/factory-visit',
  // },
  // {
  //   title: 'Bakti Sosial Panti Asuhan',
  //   description:
  //     'Glatino turut mengadakan bakti sosial di panti asuhan sebagai bentuk kepedulian terhadap sesama.',
  //   date: '27 Juli 2025',
  //   image: '/article/baksos-1.jpg',
  //   link: '/event/bakti-sosial-july-2025',
  // },
  // {
  //   title: 'Pameran Produk Baru 2025',
  //   description:
  //     'Kami memperkenalkan berbagai produk terbaru dengan fitur unggulan pada pameran di Jakarta Convention Center.',
  //   date: '15 Juni 2025',
  //   image: '/article/pameran-2025.jpg',
  //   link: '/event/article/pameran-2025',
  // },
  // {
  //   title: 'Kunjungan Ke Pabrik',
  //   description:
  //     'Rekanan bisnis kami diajak untuk melihat langsung proses produksi di pabrik Glatino.',
  //   date: '20 Mei 2025',
  //   image: '/article/factory-visit.jpg',
  //   link: '/event/article/factory-visit',
  // },
  // {
  //   title: 'Bakti Sosial Panti Asuhan',
  //   description:
  //     'Glatino turut mengadakan bakti sosial di panti asuhan sebagai bentuk kepedulian terhadap sesama.',
  //   date: '27 Juli 2025',
  //   image: '/article/baksos-1.jpg',
  //   link: '/event/bakti-sosial-july-2025',
  // },
  // {
  //   title: 'Pameran Produk Baru 2025',
  //   description:
  //     'Kami memperkenalkan berbagai produk terbaru dengan fitur unggulan pada pameran di Jakarta Convention Center.',
  //   date: '15 Juni 2025',
  //   image: '/article/pameran-2025.jpg',
  //   link: '/event/article/pameran-2025',
  // },
  // {
  //   title: 'Kunjungan Ke Pabrik',
  //   description:
  //     'Rekanan bisnis kami diajak untuk melihat langsung proses produksi di pabrik Glatino.',
  //   date: '20 Mei 2025',
  //   image: '/article/factory-visit.jpg',
  //   link: '/event/article/factory-visit',
  // },
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
