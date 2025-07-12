<template>
  <div class="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4">
    <div class="bg-white bg-opacity-95 w-full max-w-5xl rounded-lg p-10 shadow-2xl">
      <form @submit.prevent>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Nama Depan -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Nama Depan</label>
            <input
              type="text"
              placeholder="Nama Depan"
              class="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-cyan-700 focus:border-cyan-700"
            />
          </div>

          <!-- Nama Belakang -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Nama Belakang</label>
            <input
              type="text"
              placeholder="Nama Belakang"
              class="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-cyan-700 focus:border-cyan-700"
            />
          </div>

          <!-- Email -->
          <div class="col-span-1 sm:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              class="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-cyan-700 focus:border-cyan-700"
            />
          </div>

          <!-- Kategori -->
          <div class="col-span-1 sm:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              class="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-cyan-700 focus:border-cyan-700"
            />
          </div>

          <!-- Telepon -->
          <div class="col-span-1 sm:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Telp</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-500 rounded-l-md">
                +62
              </span>
              <input
                type="text"
                placeholder="821-0123-4567"
                class="w-full px-3 py-2 rounded-r-md border border-gray-300 shadow-sm focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>
          </div>

          <!-- Pesan -->
          <div class="col-span-1 sm:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Pesan</label>
            <textarea
              rows="4"
              placeholder="Tuliskan pesan yang ingin Anda sampaikan pada kami!"
              class="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-cyan-700 focus:border-cyan-700"
            ></textarea>
          </div>
        </div>

        <!-- Tombol -->
        <div class="flex justify-end mt-8 space-x-4">
          <button
            type="button"
            class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-200"
          >
            Batalkan
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  </div>
   <FooterComponent />
</template>


<script lang="ts" setup>
// Import FooterComponent dari file yang sama di folder 'pages'
import FooterComponent from './footer.vue'

</script>

<style>

</style>