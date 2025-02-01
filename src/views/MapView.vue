<script setup lang="ts">
import HomeButton from '@/components/HomeButton.vue';
import MapComp from '../components/Map1/Map.vue';
interface MapTwoProps {
  title?: string;
}

defineProps<MapTwoProps>();
</script>

<template>
  <div 
    class="overflow-hidden relative w-full h-screen bg-slate-200"
    role="region"
    aria-label="Map Two Container"
  >
    <MapComp/>
    <div class="absolute">
      <HomeButton/>
    </div>
    
    <div
      class="absolute px-16 pt-24 pb-20 text-4xl font-bold text-center text-black bg-slate-400 bottom-[60px] min-w-[266px] right-[52px] rounded-[40px] max-md:right-10 max-md:bottom-10 max-md:px-10 max-md:py-16 max-md:text-3xl max-sm:right-5 max-sm:bottom-5 max-sm:px-8 max-sm:py-10 max-sm:text-2xl max-sm:min-w-[200px]"
      role="heading"
      aria-level="1"
      tabindex="0"
    >
      Map 2
    </div>
  </div>
</template>