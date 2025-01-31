<script setup lang="ts">
interface Props {
  progress: number
}
defineProps<Props>()
</script>

<template>
  <header class="flex justify-between items-center w-full whitespace-nowrap max-md:max-w-full" role="banner">
    
    <div class="flex flex-col items-center self-stretch px-10 my-auto min-w-[240px] w-[1034px] max-md:px-5">
      <h1 class="text-7xl font-bold text-center text-black max-md:text-4xl">STATUS</h1>
      <div class="shrink-0 mt-9 max-w-full border-cyan-800 border-solid border-[10px] h-[13px] w-[400px]"></div>
      <div class="flex gap-5 justify-between self-stretch mt-3.5 text-4xl font-semibold bg-slate-400 text-slate-400 max-md:max-w-full">
        <div class="flex shrink-0 w-20 h-20 rounded-full bg-slate-400"></div>
        <div class="my-auto">Progression</div>
        <div class="flex z-10 shrink-0 mr-0 w-20 h-20 rounded-full bg-slate-400"></div>
      </div>
    </div>
  </header>
</template>