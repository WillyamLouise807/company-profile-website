<template>
  <div class="relative min-h-screen">

    <section class="relative w-full  flex items-center justify-center text-center overflow-hidden">
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-3]"
        :style="{ backgroundImage: `url(${bgImage})` }"
      ></div>

      <!-- Dark Blur Overlay -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm z-[-2]"></div>

      <!-- White Gradient Fade (BOTTOM) -->
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-white"></div>

      <!-- Text Content -->
      <div class="relative z-10 px-4 max-w-4xl text-white">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
          Contact Us
        </h1>
        
      </div>
    </section>
    <!-- Background image with overlay -->
    <div class="absolute inset-0 -z-10">
      <img 
        src="assets/contact/bg-image.png" 
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>

    <div class="container mx-auto px-4 py-8 sm:py-16">

      <!-- Form Section (Top) -->
      <div class="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-2xl mb-10">
        <form @submit.prevent>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <!-- First Name -->
            <div>
              <label class="block text-sm text-white font-semibold mb-2">Nama Depan</label>
              <input
                type="text"
                placeholder="Nama Depan"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Last Name -->
            <div>
              <label class="block text-sm text-white font-semibold mb-2">Nama Belakang</label>
              <input
                type="text"
                placeholder="Nama Belakang"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Email -->
            <div class="sm:col-span-2">
              <label class="block text-sm text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Subject -->
            <div class="sm:col-span-2">
              <label class="block text-sm text-white font-semibold mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Phone -->
            <div class="sm:col-span-2">
              <label class="block text-sm text-white font-semibold mb-2">Telp</label>
              <div class="flex">
                <span class="inline-flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 text-gray-700 rounded-l-lg">
                  +62
                </span>
                <input
                  type="tel"
                  placeholder="821-0123-4567"
                  class="w-full px-4 py-3 rounded-r-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
                />
              </div>
            </div>

            <!-- Message -->
            <div class="sm:col-span-2">
              <label class="block text-sm text-white font-semibold mb-2">Pesan</label>
              <textarea
                rows="4"
                placeholder="Tuliskan pesan yang ingin Anda sampaikan pada kami!"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              ></textarea>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end mt-6 sm:mt-8 space-x-4">
            <button
              type="button"
              class="px-6 py-2.5 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Batalkan
            </button>
            <button
              type="submit"
              class="px-6 py-2.5 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>

      <!-- Contact Information Section (Bottom) -->
      <!-- Contact Information Section (Bottom) -->
      <div class="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left Column: Contact Info -->
          <div class="lg:pr-8 lg:border-r border-gray-300 border-opacity-50">
            <!-- Address -->
            <div class="mb-8 flex items-start">
              <div class="mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white mb-4">Address</h2>
                <p class="text-white">A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <!-- Call Us -->
            <div class="mb-8 flex items-start">
              <div class="mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512.457 512.457">
                  <path d="M505.847,376.187c-2.506-4.739-5.667-9.463-9.428-14.215c-8.571-10.83-20.227-21.791-34.287-32.906 c-9.809-7.755-20.237-15.145-30.657-21.961c-6.267-4.1-11.191-7.129-14.123-8.847c-24.749-14.092-53.262-12.224-67.987,11.507 c-0.684,0.812-1.553,1.841-2.567,3.034c-2.772,3.26-5.585,6.516-8.252,9.535c-0.576,0.651-0.576,0.651-1.151,1.298 c-4.427,4.973-8.479,9.158-8.33,9.057c-16.299,11.031-26.909,10.163-41.279-4.208L183.976,224.673 c-14.37-14.37-15.239-24.98-4.201-41.289c-0.107,0.158,4.078-3.894,9.051-8.321c0.647-0.575,0.647-0.575,1.298-1.151 c3.019-2.667,6.275-5.48,9.535-8.252c1.193-1.014,2.221-1.884,3.034-2.567c23.731-14.725,25.602-43.232,11.64-67.756 c-1.851-3.163-4.88-8.086-8.98-14.354c-6.816-10.42-14.206-20.848-21.961-30.657c-11.114-14.06-22.076-25.716-32.906-34.287 c-4.752-3.761-9.477-6.922-14.222-9.432c-22.077-11.67-49.146-7.606-66.816,10.03L46.514,39.592 c-76.079,76.079-55.111,166.746,35.804,257.661l66.43,66.451l66.458,66.437c90.913,90.913,181.581,111.881,257.666,35.795 l22.919-22.94C513.45,425.371,517.531,398.258,505.847,376.187z M465.629,412.819l-22.934,22.955 c-55.66,55.66-120.958,40.559-197.322-35.804l-66.456-66.434l-66.427-66.448c-76.366-76.366-91.467-141.664-35.8-197.331 l22.919-22.94c4.408-4.4,11.174-5.415,16.709-2.489c2.276,1.204,4.866,2.937,7.688,5.17c7.823,6.191,16.675,15.605,25.913,27.291 c6.887,8.712,13.561,18.13,19.727,27.554c3.689,5.64,6.357,9.977,7.74,12.337c3.849,6.764,3.612,9.72,2.477,10.358l-3.217,2.217 c-0.944,0.787-2.561,2.147-4.631,3.907c-3.449,2.934-6.901,5.915-10.144,8.78c-0.708,0.627-0.708,0.627-1.418,1.257 c-8.44,7.514-13.205,12.127-16.009,16.265c-22.372,33.057-19.645,66.377,9.36,95.382l103.808,103.808 c29.005,29.005,62.325,31.733,95.373,9.367c4.147-2.81,8.76-7.575,16.274-16.015c0.63-0.709,0.63-0.709,1.257-1.418 c2.865-3.243,5.847-6.695,8.78-10.144c1.76-2.069,3.12-3.686,3.907-4.631l2.217-3.217c0.637-1.135,3.594-1.371,10.589,2.611 c2.129,1.25,6.466,3.918,12.106,7.607c9.425,6.165,18.842,12.839,27.555,19.727c11.686,9.238,21.099,18.09,27.29,25.913 c2.233,2.821,3.966,5.412,5.173,7.693C471.054,401.659,470.037,408.419,465.629,412.819z"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-semibold text-white mb-2">Call Us</h2>
                <p class="text-white">+1 5589 55488 55</p>
              </div>
            </div>

            <!-- Email Us -->
            <div class="flex items-start">
              <div class="mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-semibold text-white mb-2">Email Us</h2>
                <p class="text-white">info@example.com</p>
              </div>
            </div>
          </div>

          <!-- Right Column: Operating Hours -->
          <div class="lg:pl-8 flex items-start">
            <div class="mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-white mb-4">Jam Operasional</h2>
              <p class="text-white mb-2">Senin - Jumat: 08.00 AM – 17.00 PM</p>
              <p class="text-white mb-2">Sabtu: 08.00 AM – 14.00 PM</p>
              <p class="text-white">Minggu/Tanggal Merah: Libur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <FooterComponent />
</template>

<script lang="ts" setup>
import FooterComponent from './footer.vue'

import bgImage from '@/assets/contact/bg-image.png'
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 1024px) {
  .lg\:border-r {
    border-right: none;
    padding-right: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .lg\:pl-8 {
    padding-left: 0;
  }
}

@media (max-width: 640px) {
  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  .max-w-4xl {
    padding: 1.5rem;
  }
}

/* Smooth transitions */
button {
  transition: all 0.3s ease;
}

/* Better input focus */
input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(14, 116, 144, 0.2);
  outline: none;
}

/* Custom divider */
.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 2rem 0;
}
</style>