<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import HistoryCard from '../components/History/HistoryCard.vue'
import MenuHeader from '@/components/MenuHeader.vue';
import moment from 'moment';
interface HistoryItem {
  date: string
  completion:number
  driverData:{

  }
}


const historyItems: HistoryItem[] = [
  { date: moment().subtract(1, 'days').format('YYYYMMDD')   , driverData: {} ,completion:50},
  { date: moment().subtract(2, 'days').format('YYYYMMDD')   , driverData: {} ,completion:70},
  { date: moment().subtract(30, 'days').format('YYYYMMDD')   , driverData: {} ,completion:98}
  //moment(date, "YYYYMMDD").fromNow()
]
const title = ref('History')
</script>

<template>
  <div class="p-10 min-h-screen bg-slate-200">
    <MenuHeader :title="title" />

    <main class="px-5 py-0 mx-auto my-10 max-w-[1400px] max-sm:mx-auto max-sm:my-5">
      <HistoryCard v-for="item in historyItems" :key="item.date" :date="item.date" :completion="item.completion"/>
    </main>
  </div>
</template>