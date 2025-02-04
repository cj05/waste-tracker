<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import moment from 'moment';
const props = defineProps({
  date: {
    type: String,
    required: true
  },
  completion:{
    type:  Number,
    required:true
  }
})

const display = computed(()=>moment().diff(props.date, "days"))

</script>

<template>
  <article class="flex gap-5 justify-between mb-16 max-md:flex-col max-sm:mb-10">
    <h2 class="text-5xl font-medium text-black max-md:mb-5 max-md:text-4xl">
      {{display>1?display+" days ago":display == 1?"Yesterday":"Today"}}
    </h2>
    <div class="flex flex-1 gap-5 max-md:w-full max-sm:flex-col">
      <div class="flex-1 rounded bg-slate-400 h-[145px] max-sm:h-[120px]" role="img" aria-label="History content"></div>
      <div class="shrink-0 rounded bg-slate-400 h-[145px] w-[185px] max-sm:w-full max-sm:h-[120px] flex items-center justify-center text-4xl">
        {{ props.completion }}
      </div>
    </div>
  </article>
</template>