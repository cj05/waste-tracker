<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import HistoryCard from '../components/History/HistoryCard.vue'
import MenuHeader from '@/components/MenuHeader.vue';

interface HistoryItem {
  date: string
}


const historyItems: HistoryItem[] = [
  { date: 'Yesterday' },
  { date: '2 days ago' },
  { date: '3 days ago' }
]
const title = ref('History')
</script>

<template>
  <div class="p-10 min-h-screen bg-slate-200">
    <MenuHeader :title="title" />

    <main class="px-5 py-0 mx-auto my-10 max-w-[1400px] max-sm:mx-auto max-sm:my-5">
      <HistoryCard v-for="item in historyItems" :key="item.date" :date="item.date" />
    </main>
  </div>
</template>