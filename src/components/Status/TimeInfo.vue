<script setup lang="ts">
interface Props {
  departureTime: string,
  arrivalTime: string,
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    <div class="flex flex-col text-2xl font-semibold text-neutral-400 max-md:mt-10">
      <div class="px-5 pt-2.5 pb-6 rounded-2xl bg-white max-md:pr-5">
        Departure Time : {{ departureTime }}
      </div>
      <div class="px-5 pt-3.5 pb-6 mt-6 rounded-2xl bg-white max-md:pr-5">
        Arrival Time : {{ arrivalTime }}
      </div>
    </div>
  </div>
</template>