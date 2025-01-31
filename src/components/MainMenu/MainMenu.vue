<script setup lang="ts">
import { ref } from 'vue'
import MenuHeader from '../MenuHeader.vue'
import MenuGrid from './MenuGrid.vue'

const title = ref('MENU')
</script>

<template>
  <MenuHeader :title="title" />
  <MenuGrid />
</template>