<template>
    <div class="fixed top-0 right-0 w-full h-screen z-[0]">
        <LMap ref="map" v-model:zoom="zoom" v-model:center="center" @click="onClickMap">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </LTileLayer>
            <LMarker v-for="coord in markerCoords" :lat-lng="coord" class="pointer-events-none">
                <LIcon :icon-url="trashmarker" :icon-size="[60, 60]" />
                <LTooltip class="pointer-events-none"> trash </LTooltip>
            </LMarker>
        </LMap>

    </div>
    <div class="fixed top-0 right-0">
        {{ center }}
        {{ zoom }}
    </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip, LPolyline } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import trashmarker from '../../assets/trashmarker.png'

const zoom = ref(16)
const center = ref([13.771513, 460.586636])
const markerCoords = ref([ [ 13.770002456596833, 460.5888676643372 ], [ 13.78392380181997, 460.5827575922013 ] ])

const onClickMap = (e: any) => {
    /*console.log(e)
    markerCoords.value.push([e.latlng.lat, e.latlng.lng])
    markerCoords.value = markerCoords.value.map(x => x)
    console.log(markerCoords.value)*/
}


</script>
