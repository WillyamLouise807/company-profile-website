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
      <div class="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-b from-transparent to-black"></div>

      <!-- Text Content -->
      <div class="relative z-10 px-4 max-w-4xl text-white">
        <h1 class="text-xl text-white text-center sm:text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
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

      <h1 class="text-xl text-center text-white sm:text-2xl md:text-3xl font-semibold leading-relaxed mb-4">
        Contact Us
      </h1>
      <p class="text-sm text-center sm:text-base md:text-lg text-white/80 mb-6">
        Kami senang mendengar dari Anda! Isi formulir di bawah dan kami akan segera menghubungi Anda kembali.
      </p>      

      <!-- Form Section (Top) -->
      <div class="mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-2xl mb-10">
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <!-- First Name -->
            <div>
              <label class="block text-sm text-white font-semibold mb-2">Nama Depan</label>
              <input
                v-model="namaDepan"
                type="text"
                placeholder="Nama Depan"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Last Name -->
            <div>
              <label class="block text-sm text-white font-semibold mb-2">Nama Belakang</label>
              <input
                v-model="namaBelakang"
                type="text"
                placeholder="Nama Belakang"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Email -->
            <div class="sm:col-span-2">
              <label class="block text-sm text-white font-semibold mb-2">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <!-- Subject -->
            <div class="sm:col-span-2">
              <label class="block text-sm text-white font-semibold mb-2">Subject</label>
              <input
                v-model="subject"
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
                  v-model="phone"
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
                v-model="message"
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

      <!-- Contact Information Make Own -->
      <div class="container mx-auto py-10 px-4 text-white">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <!-- Kiri -->                
          <div class="space-y-8">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="bg-red-600 p-3 rounded">
                <!-- Icon Location -->
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-red-600">Address</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <!-- Call Us -->
            <div class="flex items-start space-x-4">
              <div class="bg-red-600 p-3 rounded">
                <!-- Icon Phone -->
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.684l1.52 4.548a1 1 0 01-.211.992l-1.216 1.216a11.042 11.042 0 005.292 5.292l1.216-1.216a1 1 0 01.992-.211l4.548 1.52a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-red-600">Call Us</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <!-- Email Us -->
            <div class="flex items-start space-x-4">
              <div class="bg-red-600 p-3 rounded">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-red-600">Email Us</h4>
                <p class="text-white">info@example.com</p>
              </div>
            </div>
          </div>

          <!-- KANAN: Jam Operasional -->
          <div class="flex items-start space-x-4">
            <div class="bg-red-600 p-3 rounded">
              <!-- Icon Clock -->
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-red-600">Jam Operasional</h4>
              <p>Senin - Jumat : 08.00 AM – 17.00 PM</p>
              <p>Sabtu : 08.00 AM – 14.00 PM</p>
              <p>Minggu/Tanggal Merah : Libur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const namaDepan = ref('')
const namaBelakang = ref('')
const email = ref('')
const subject = ref('')
const phone = ref('')
const message = ref('')

const submitForm = async () => {
  try {
    const res = await axios.post('http://localhost:3000/send-email', {
      namaDepan: namaDepan.value,
      namaBelakang: namaBelakang.value,
      email: email.value,
      subject: subject.value,
      phone: phone.value,
      message: message.value,
    })

    alert('Email berhasil dikirim!')
  } catch (error: any) {
  console.error('DETAIL ERROR:', error?.response?.data || error)
  alert('Terjadi kesalahan saat mengirim email.')
  }
}


import FooterComponent from '../components/footer.vue'

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