<script setup lang="ts">
import HomeButton from '@/components/HomeButton.vue';
import Map from '../components/Map1/Map.vue';
import { ref, onMounted, watchEffect } from 'vue';
interface MapTwoProps {
  title?: string;
}

interface markers {
  coord: Array<number>
  lasttime: number
}

defineProps<MapTwoProps>();
const markerCoords = ref<markers[]>()


watchEffect(() => localStorage.setItem("markers",JSON.stringify(markerCoords.value)))

onMounted(() => {
  // update
  console.log(localStorage.getItem("markers"))

  try {
    let str = localStorage.getItem("markers")
    console.log("obj:",str??'[]')
    let markersobj = JSON.parse(str??'[]')
    console.log(markersobj)
    //markerCoords.value = markersobj
  } catch (e) {
    console.log(e)
    markerCoords.value = [{ coord: [13.770002456596833, 460.5888676643372], lasttime: Date.now() / 1000 }, { coord: [13.78392380181997, 460.5827575922013], lasttime: Date.now() / 1000 - 60 * 60 * 24 * 2 }]

  }


})
</script>

<template>
  <div class="overflow-hidden relative w-full h-screen bg-slate-200" role="region" aria-label="Map Two Container">

    <Map v-model:markerCoords="markerCoords" />
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