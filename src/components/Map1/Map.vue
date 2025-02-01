<template>
    <div class="fixed top-0 right-0 w-full h-screen z-[0]">
        <LMap ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></LTileLayer>
        </LMap>
    </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";

const zoom = ref(2)
</script>

<style></style>