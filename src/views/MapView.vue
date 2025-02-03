<script setup lang="ts">
import HomeButton from '@/components/HomeButton.vue';
import Map from '../components/Map1/Map.vue';
import { ref } from 'vue';
interface MapTwoProps {
  title?: string;
}

defineProps<MapTwoProps>();

const stats = ref(true)
</script>

<template>
  <div class="overflow-hidden relative w-full h-screen bg-slate-200" role="region" aria-label="Map Two Container">

    <Map />
    <div class="absolute">
      <HomeButton />
    </div>

    <div class="absolute bottom-[60px] right-[52px] 
         max-md:right-10 max-md:bottom-10 
         max-sm:right-5 max-sm:bottom-5 flex flex-col gap-10" role="heading" aria-level="1" tabindex="0">
      <div id="above"></div>
      <div class="px-16 pt-24 pb-20 text-4xl font-bold text-center text-black bg-slate-400 
         min-w-[266px] rounded-[40px] 
         max-md:px-10 max-md:py-16 max-md:text-3xl 
         max-sm:px-8 max-sm:py-10 max-sm:text-2xl max-sm:min-w-[200px]" role="heading" aria-level="1" tabindex="0">

        Map 2
      </div>
    </div>
  </div>
</template>