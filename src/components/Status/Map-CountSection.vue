<script setup lang="ts">
interface Props {
  collected: number,
  uncollected: number
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col self-start max-md:max-w-full gap-40">
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div
          class="flex shrink-0 mx-auto aspect-square bg-green-500 h-[200px] rounded-[40px] w-[200px] max-md:mt-10 items-center justify-center text-4xl">
          {{ collected }}
        </div>

      </div>
      <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div class="flex flex-col grow max-md:mt-10">
          <div
            class="flex shrink-0 bg-red-500 aspect-square h-[200px] rounded-[40px] w-[200px] max-md:mr-1 items-center justify-center text-4xl">
            {{ uncollected }}
          </div>
        </div>
      </div>
    </div>


    <div
      class="flex flex-wrap flex-1 shrink gap-10 justify-center items-center text-4xl font-bold text-center basis-0 min-w-[240px] text-zinc-500 max-md:max-w-full">
      <div class="flex flex-col self-stretch my-auto rounded-[40px] w-[180px]">
        <router-link to="/map1">
          <div class="flex px-5 bg-slate-400 h-[180px] rounded-[40px] w-[180px] max-md:px-5 items-center justify-center">
            Map 1
          </div>
        </router-link>
      </div>
      <div class="flex flex-col self-stretch my-auto rounded-[40px] w-[180px]">
        <router-link to="/map2">
          <div class="flex px-5 bg-slate-400 h-[180px] rounded-[40px] w-[180px] max-md:px-5 items-center justify-center">
            Map 2
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>