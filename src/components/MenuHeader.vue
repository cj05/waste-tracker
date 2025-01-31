<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()
import HomeButton from './HomeButton.vue'
</script>

<template>
  <div class="flex justify-between items-start mx-auto my-0 max-sm:flex-col max-sm:items-center">
    <HomeButton/>
    <div class="flex flex-col items-center mb-8">
      <h1 class="text-7xl font-bold text-center text-black max-md:text-6xl max-sm:text-4xl">
        {{ title }}
      </h1>
      <div class="mt-10 w-full border-solid border-b-[10px] border-b-cyan-800 max-sm:mt-5"></div>
    </div>
    <div>

    </div>
  </div>
</template>