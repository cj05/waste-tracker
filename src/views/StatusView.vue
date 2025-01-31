<script setup lang="ts">
import { ref } from 'vue'
import StatusHeader from '../components/Status/StatusHeader.vue'
import DriverInfo from '../components/Status/DriverInfo.vue'
import MapSection from '../components/Status/MapSection.vue'
import TimeInfo from '../components/Status/TimeInfo.vue'
import MenuHeader from '../components/MenuHeader.vue'
const progressValue = ref(0)
const title = ref('MENU')
</script>

<template>
  <main>
    <MenuHeader :title="title" />
    <div class="flex items-center justify-center">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap gap-10 rounded-none min-w-[240px] w-[1725px] max-md:max-w-full">
          <div class="flex flex-col items-start max-md:max-w-full">
            <div class="self-stretch max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col">
                <DriverInfo />
                <TimeInfo />
              </div>
            </div>
          </div>
          <MapSection />
        </div>
      </div>
    </div>

    <footer class="fixed bottom-0 left-0 w-full bg-slate-400 min-h-[146px]">
    </footer>
  </main>
</template>