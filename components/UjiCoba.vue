<template>
  <section class="relative mx-auto py-10 bg-white overflow-hidden font-poppins">
    <div class="relative bg-[url('/asset/index/our-journey-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black/50 to-black/10"></div>

      <!-- pakai container yang sama -->
      <div class="relative max-w-screen-2xl mx-auto px-4 py-10 md:py-48">
        <div class="w-12 h-1 bg-red-600 mb-3"></div>

        <p class="text-md tracking-wide text-red-500 font-bold">
          Discover the history of GBJ
        </p>
        <h2 class="text-7xl font-bold text-white mt-2 py-12">
          Turning idea <br />
          into an invention
        </h2>
        <p class="mt-4 text-gray-100 text-2xl">
          Do you know how our first innovation was made?
        </p>
      </div>
    </div>

    <div class="flex overflow-x-auto gap-20 py-36 md:px-40 px-10">
      <!-- LEFT -->
      <div class="w-1/4 min-w-[380px] bg-white flex items-center">
        <div class="px-8">
          <!-- parent flex untuk teks + gambar -->
          <div class="flex items-end gap-4">
            <!-- dua baris teks -->
            <div class="flex flex-col ">
              <h1 class="uppercase tracking-[0.86em] text-gray-500 font-extrabold text-xs mb-1">
                OUR HISTORY OF
              </h1>
              <h2 class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                CREATING
              </h2>
            </div>

            <!-- gambar panah: posisinya align-bottom ke teks, tapi “nembus” ke atas -->
            <img
              src="/asset/index/element-our-story.png"
              alt="element"
              class="object-contain pt-5 h-[125px] -translate-y-2"
            />
          </div>

          <!-- INNOVATION tetap di bawah sendiri -->
          <h2 class="text-4xl md:text-5xl font-extrabold text-red-700 mt-2 pl-7">
            INNOVATION
          </h2>

          <p class="text-md text-gray-600 leading-relaxed mt-4 pl-7">
            Lahirnya PT Global Bestindo Jaya membuka jalan bagi industri nasional untuk menikmati produk-produk berkualitas tinggi, sama seperti mimpi para pendirinya untuk menghadirkan standar baru di tanah air. Inilah kisah tentang bagaimana perusahaan ini perlahan mengubah wajah industri Indonesia, dan membantu ribuan pelaku usaha memenuhi kebutuhannya dengan lebih baik.
          </p>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="flex-1">
        <div class="min-w-max flex flex-col">

          <!-- ROW 1: DESKRIPSI ATAS -->
          <div class="flex justify-between items-end">
            <!-- Awal Banner -->
            <div class="flex-shrink-0 w-[125px] pl-6 pr-6 pt-6"></div>
            <!-- 2018 kosong (bawah) -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6"></div>
            <!-- 2019 deskripsi atas -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Jaringan Mulai Melebar</h3>
                <p class="text-gray-600 text-xs">
                  Setahun berjalan, mereka tak tinggal diam. 2019 jadi saksi saat perusahaan memperluas jaringan distribusi dan menggandeng mitra-mitra ritel nasional. Produk yang tadinya hanya ada di beberapa titik, kini mulai mudah ditemui di berbagai daerah. Semuanya terasa seperti jalan yang kian terbuka lebar.
                </p>
              </div>
            </div>
            <!-- 2020 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6"></div>
            <!-- 2021 deskripsi atas -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Menyapa Nusantara</h3>
                <p class="text-gray-600 text-xs">
                  Cerita berlanjut di 2021. Perusahaan memperkuat distribusi ke seluruh Indonesia. Dari kota besar hingga pelosok daerah, produk mereka kini hadir lebih dekat. Seperti kisah yang semakin seru, layanan pun jadi lebih merata ke seluruh penjuru negeri.
                </p>
              </div>
            </div>
            <!-- 2022 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6"></div>
            <!-- 2023 deskripsi atas -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6">
              <div class="bg-white p-4">                
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Gudang Surabaya Dibuka</h3>
                <p class="text-gray-600 text-xs">
                  Tahun 2023, perusahaan membuka gudang baru di Surabaya. Fasilitas ini jadi pusat logistik untuk mempercepat pengiriman ke Indonesia Timur. Seperti menambah “jantung” baru, layanan jadi lebih cepat dan pelanggan di timur merasakan kualitas yang sama.
                </p>
                <img
                  src="/asset/index/gudang.png"
                  alt="Gudang Surabaya"
                  class="w-[200px] h-auto mt-3 object-cover"
                />
              </div>
            </div>
            <!-- 2024 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6"></div>
            <!-- 2025 deskripsi atas -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pt-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Menyapa Dunia Maya</h3>
                <p class="text-gray-600 text-xs">
                  Akhirnya, 2025 jadi awal transformasi digital. PT Global Bestindo Jaya meluncurkan akun Instagram resmi—jendela baru untuk bercerita langsung kepada konsumen, membangun kedekatan, dan memperluas jangkauan secara online. Sebuah langkah kecil yang jadi awal perjalanan besar di dunia maya.
                </p>
              </div>
            </div>
            <!-- 2026 kosong untuk gambar kosong -->
            <div class="flex-shrink-0 w-[125px] pl-6 pr-6 pt-6"></div>
            <!-- tambahkan blok selanjutnya -->
          </div>

          <!-- ROW 2: STRIP + TAHUN -->
          <div class="relative">
            <!-- background panjang -->
            <div class="absolute inset-0 bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-sky-500"></div> <!-- bg-red-900/10 -->

            <div class="relative z-10 flex">
              <!-- Awal Banner -->
              <div class="flex-shrink-0 w-[125px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[400px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <div class="flex-shrink-0 w-[125px] h-[256px]">
                <img src="/asset/index/2021-history.png"
                    alt=""
                    class="w-full h-full object-cover" />
              </div>
              <!-- tambahkan tahun lainnya -->
            </div>
          </div>

          <!-- ROW 3: DESKRIPSI BAWAH -->
          <div class="flex justify-between items-start">
            <!-- Awal Banner -->
            <div class="flex-shrink-0 w-[125px] pl-6 pr-6 pb-6"></div>
            <!-- 2018 deskripsi bawah -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Awal Sebuah Mimpi</h3>
                <p class="text-gray-600 text-xs">
                  Semuanya bermula pada 2018. PT Global Bestindo Jaya lahir dari semangat menghadirkan produk berkualitas tinggi untuk masyarakat Indonesia. Di ruang kerja sederhana, visi besar dirumuskan, tenaga disatukan. Layaknya permulaan sebuah kisah panjang, tahun ini jadi pondasi untuk langkah-langkah berikutnya.
                </p>
              </div>
            </div>
            <!-- 2019 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6"></div>
            <!-- 2020 deskripsi bawah -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Produk Unggulan Pertama</h3>
                <p class="text-gray-600 text-xs">
                  Tahun ini jadi titik penting. PT Global Bestindo Jaya meluncurkan produk unggulan pertamanya—hasil kerja keras dan riset panjang. Respon pasar positif, dan produk ini seakan jadi simbol bahwa mimpi mereka di tahun awal benar-benar berada di jalur yang tepat.
                </p>
              </div>
            </div>
            <!-- 2021 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6"></div>
            <!-- 2022 deskripsi bawah -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Lini Premium Hadir</h3>
                <p class="text-gray-600 text-xs">
                  Tahun ini bab baru dimulai. PT Global Bestindo Jaya meluncurkan lini produk premium—bukan sekadar produk baru, tapi bukti inovasi dan peningkatan kualitas. Dengan lini ini, mereka menjawab kebutuhan konsumen yang ingin standar lebih tinggi.
                </p>
              </div>
            </div>
            <!-- 2023 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6"></div>
            <!-- 2024 deskripsi bawah -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6">
              <div class="bg-white p-4">
                <h3 class="text-red-600 font-bold mb-2 text-xl uppercase">Teknologi Digital Masuk Cerita</h3>
                <p class="text-gray-600 text-xs">
                  Memasuki 2024, PT Global Bestindo Jaya mulai mengintegrasikan teknologi digital ke dalam sistem operasionalnya. Proses jadi lebih cepat dan efisien—mulai dari stok, distribusi, sampai pelayanan pelanggan. Ini tanda mereka siap menghadapi era baru yang serba digital.
                </p>
              </div>
            </div>
            <!-- 2025 kosong -->
            <div class="flex-shrink-0 w-[400px] pl-6 pr-6 pb-6"></div>
            <!-- 2026 kosong untuk gambar kosong -->
            <div class="flex-shrink-0 w-[125px] pl-6 pr-6 pb-6"></div>
            <!-- tambahkan blok selanjutnya -->
          </div>
        </div>
      </div>      
    </div>
    <!-- Bottom Nav -->
      <div class="flex justify-center mt-8">
        <div class="flex items-center gap-2 text-gray-600 text-sm bg-gray-100 rounded-full px-6 py-3">
          <span>Scroll horizontally to explore our journey</span>
          <div class="text-lg">→</div>
        </div>
      </div>
  </section>
</template>

<style>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* scrollbar custom */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #dc2626;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #b91c1c;
}
</style>
