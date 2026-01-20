<template>
  <div class="bg-white">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 py-10 mt-10 font-poppins text-black">
      <!-- Breadcrumb -->
      <nav class="text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-2">
          <li>
            <RouterLink to="/product" class="hover:underline text-black font-medium">Product</RouterLink>
          </li>
          <li>/</li>
          <li>
            <RouterLink to="/produk/sliding-rail" class="hover:underline text-black font-medium">
              Sliding Rail
            </RouterLink>
          </li>
          <li>/</li>
          <li class="text-black font-semibold">Galvanis</li>
        </ol>
      </nav>

      <!-- Product Section -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-start">
        <!-- Deskripsi -->
        <div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Sliding Rail Galvanis
          </h1>

          <p class="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            The Glatino Sliding Door Rail is designed to make it easy to install a strong, durable, and space-saving sliding door. Made of high-quality galvanized steel, this rail can support up to 100 kg and is equipped with casters.
          </p>

          <!-- Variant Selector -->
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Type:</label>
            <select
              v-model="selectedVariant"
              class="border rounded-lg px-3 py-2 w-full sm:w-60"
            >
              <option
                v-for="item in variants"
                :key="item.code"
                :value="item"
              >
                {{ item.type }}
              </option>
            </select>
          </div>

          <!-- Product Description -->
          <div class="mb-6 space-y-1">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">Product Description:</h2>

            <p class="capitalize text-sm sm:text-base">
              Material: <span class="font-semibold">Galvanis / Iron</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Bracket: <span class="font-semibold">4 PCS (All Size)</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Code: <span class="font-semibold">{{ selectedVariant.code }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Type: <span class="font-semibold">{{ selectedVariant.type }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Track: <span class="font-semibold">{{ selectedVariant.track }}</span>
            </p>
            <p class="capitalize text-sm sm:text-base">
              Capacity Max:
              <span class="font-semibold">{{ selectedVariant.capacity }}</span>
            </p>
          </div>

          <!-- Marketplace -->
          <div class="mb-8">
            <h2 class="text-base sm:text-lg font-semibold mb-3">
              Available in Marketplace:
            </h2>
            <div class="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <a
                href="https://www.tokopedia.com/glatino-official-store"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img src="/asset/product/tokopedia 1.png" class="w-14 sm:w-16" />
              </a>
              <a
                href="https://shopee.co.id/Glatino-Rel-Pintu-Geser-Material-Galvanis-Steel-Sleding-Rail-i.1442585495.28823455864"
                target="_blank"
                class="hover:scale-105 transition-transform"
              >
                <img src="/asset/product/shopee 1.png" class="w-14 sm:w-16" />
              </a>
            </div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div class="space-y-6 flex flex-col items-center w-full">
          <transition name="fade" mode="out-in">
            <img
              :key="selectedImage"
              :src="selectedImage"
              class="rounded-2xl shadow-lg w-full aspect-video object-contain bg-white"
            />
          </transition>

          <!-- Thumbnail -->
          <div class="grid grid-cols-2 gap-4">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="selectedImage = image"
              class="rounded-xl cursor-pointer border-2 h-48 object-contain"
              :class="{
                'border-red-600': selectedImage === image,
                'border-transparent': selectedImage !== image
              }"
            />
          </div>
        </div>
      </div>

      <!-- Katalog -->
      <div class="border-t border-gray-200 my-20 py-8">
        <h2 class="text-2xl font-bold text-center mb-8 text-red-700">
          SEE OUR OTHER PRODUCT IN THIS CATALOG
        </h2>
        <div class="flex justify-center">
          <NuxtLink
            v-for="item in katalogLinks"
            :key="item.slug"
            :to="`/produk/katalog-13/${item.slug}`"
            class="block bg-white rounded-xl border shadow-sm hover:shadow-md transition w-44"
          >
            <img :src="item.image" class="w-full h-32 object-contain bg-white" />
            <div class="bg-gray-50 text-center py-4 text-red-600 font-semibold text-sm">
              {{ item.name }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import FooterComponent from '@/components/footer.vue'

// Images
import produk1 from '/asset/product/sliding-rail/galvanis/produk-1.png'
import produk2 from '/asset/product/sliding-rail/galvanis/produk-2.png'

const images = [produk1, produk2]
const selectedImage = ref(images[0]!)

// Product Variants (GALVANIS)
const variants = [
  { code: 'SLD - G2', type: 'G2', track: '1600 MM', capacity: '80 KG' },
  { code: 'SLD - G3', type: 'G3', track: '1800 MM', capacity: '80 KG' },
  { code: 'SLD - G4', type: 'G4', track: '2100 MM', capacity: '80 KG' },
  { code: 'SLD - G5', type: 'G5', track: '2400 MM', capacity: '80 KG' },
  { code: 'SLD - G6', type: 'G6', track: '3000 MM', capacity: '100 KG' }
]

const selectedVariant = ref(variants[0]!)

const katalogLinks = [
  {
    slug: 'aluminium',
    name: 'Aluminium',
    image: '/asset/product/sliding-rail/aluminium.png'
  }
]
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
