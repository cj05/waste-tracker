<script setup lang="ts">
import { computed, ref } from 'vue'
import DriverInfo from '../components/Status/DriverInfo.vue'
import MapCountSection from '../components/Status/Map-CountSection.vue'
import TimeInfo from '../components/Status/TimeInfo.vue'
import MenuHeader from '../components/MenuHeaderProgress.vue'
// our values
const collected = ref(5)
const total = ref(50)
const driverName = ref("Mr. [Censored]")
const plateNumber = ref("01-23456")
const departureTime = ref("10:00")
const arrivalTime = ref("10:45")
// computed auto calcs values when any variable in it changes
const percentComplete = computed(() => {return Math.floor(collected.value/total.value*100)}) // basically percent calc with round down
const uncollected = computed(() => {return total.value-collected.value})

</script>

<template>
  <main>
    <MenuHeader title="Status" :progressValue="percentComplete" />
    <div class="flex items-center justify-center">
      <div class="flex flex-wrap">
        <div class="flex flex-wrap gap-10 rounded-none min-w-[240px] w-[1725px] max-md:max-w-full">
          <div class="flex flex-col items-start max-md:max-w-full">
            <div class="self-stretch max-md:max-w-full">
              <div class="flex gap-5 max-md:flex-col">
                <DriverInfo :driverName="driverName" :plateNumber="plateNumber"/>
                <TimeInfo  :departureTime="departureTime" :arrivalTime="arrivalTime"/>
              </div>
            </div>
          </div>
          <!-- For the count and map buttons -->
          <MapCountSection :collected="collected" :uncollected="uncollected"/>
        </div>
      </div>
    </div>

    <footer class="fixed bottom-0 left-0 w-full bg-slate-400 min-h-[146px]">
    </footer>
  </main>
</template>