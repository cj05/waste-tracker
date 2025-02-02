<template>
    <div class="fixed top-0 right-0 w-full h-screen z-[0]">
        <LMap ref="map" v-model:zoom="zoom" v-model:center="center" @click="onClickMap">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </LTileLayer>
            <LCircleMarker v-for="coord in markerCoords" :lat-lng="coord.coord" class="pointer-events-none" color="red"
                :radius="sigmoid((Date.now() / 1000 - coord.lasttime) / 60 / 60 / 24 * 5 - 6) * 20 + 10">
                <!-- pov: i was bored, so basically right its a sigmoid function with a bit of offset -->>
                <LTooltip class="pointer-events-none"> Last Collection: {{
                    ((Date.now() / 1000 - coord.lasttime) / 60 / 60).toFixed(2) }} Hrs </LTooltip>
            </LCircleMarker>
        </LMap>
        <div class="fixed top-0 right-0">
            {{ center }}
            {{ zoom }}
        </div>
    </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LTooltip, LCircleMarker } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";

const sigmoid = (x: number) => 1 / (1 + Math.pow(2.7182821, -x)) 

const zoom = ref(16)
const center = ref([13.771513, 460.586636])
const markerCoords = ref([{ coord: [13.770002456596833, 460.5888676643372], lasttime: Date.now() / 1000 }, { coord: [13.78392380181997, 460.5827575922013], lasttime: Date.now() / 1000 - 60 * 60 * 24 * 2 }])

const onClickMap = (e: any) => {
    /*console.log(e)
    markerCoords.value.push([e.latlng.lat, e.latlng.lng])
    markerCoords.value = markerCoords.value.map(x => x)
    console.log(markerCoords.value)*/
}


</script>
