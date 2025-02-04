<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import HistoryCard from '../components/History/HistoryCard.vue'
import MenuHeader from '@/components/MenuHeader.vue';
import moment from 'moment';
import { useLocalStorage } from '@vueuse/core';
interface HistoryItem {
  date: string
  completion: number
  driverData: {
    driverName: string, plateNumber: string, departureTime: string, arrivalTime: string
  }
  marker: {
    coord: number[]
    lasttime: number
    collected: boolean
  }[]
}



const historyItem = useLocalStorage("history", [
  { date: moment().subtract(1, 'days').format('YYYYMMDD'), driverData: { driverName:"Mr. Apple", plateNumber:"01-23456", departureTime:"10:00",arrivalTime:"10:45"}, completion: 50, marker: [{ "coord": [10, 10], "lasttime": 10, "collected": false }] },
  { date: moment().subtract(2, 'days').format('YYYYMMDD'), driverData: { driverName:"Mr. Bananae", plateNumber:"01-98765", departureTime:"13:00",arrivalTime:"14:15"}, completion: 70, marker: [{ "coord": [10, 10], "lasttime": 10, "collected": false }] },
  { date: moment().subtract(30, 'days').format('YYYYMMDD'), driverData: { driverName:"Mr. Grape", plateNumber:"01-34682", departureTime:"8:47",arrivalTime:"9:23"}, completion: 98, marker: [{ "coord": [10, 10], "lasttime": 10, "collected": false }] }
  //moment(date, "YYYYMMDD").fromNow()
])
const title = ref('History')
</script>

<template>
  <div class="p-10 min-h-screen bg-slate-200">
    <MenuHeader :title="title" />

    <main class="px-5 py-0 mx-auto my-10 max-w-[1400px] max-sm:mx-auto max-sm:my-5">
      <HistoryCard v-for="item in historyItem" :key="item.date" :date="item.date" :completion="item.completion"
        :marker="item.marker" :driver-info="item.driverData"/>
    </main>
  </div>
</template>