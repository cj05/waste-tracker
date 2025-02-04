<template>
    <div class="fixed top-0 right-0 w-full h-screen z-[0]">
        <LMap ref="map" v-model:zoom="zoom" v-model:center="center" :use-global-leaflet="false">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </LTileLayer>
            <div v-for="coord in markerCoords">
                <div>
                    <LMarker :lat-lng="coord.coord" class="pointer-events-none">
                        <LIcon :icon-url="!coord.collected?
                        trashmarker:collectedmarker" :icon-size="[60, 60]" />
                        <LTooltip class="pointer-events-none"> trash,  {{ coord.collected?'collected at'+moment.unix(coord.lasttime).format("ddd, mmm D hA"):'uncollected' }} </LTooltip>
                    </LMarker>
                </div>
            </div>
        </LMap>

    </div>
    <div class="fixed top-0 right-0">
        {{ center }}
        {{ zoom }}
        {{ JSON.stringify(markerCoords) }}
    </div>
</template>

<script setup lang="ts">

interface markers {
    coord: Array<number>
    lasttime: number
    collected: boolean
}
import moment from 'moment';

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "@vue-leaflet/vue-leaflet";
import { ref, defineModel } from "vue";
import trashmarker from '../../assets/trashmarker.png'
import collectedmarker from '../../assets/collectedmarker.png'
import { useRoute } from 'vue-router';

const zoom = ref(16)
const center = ref([13.771513, 460.586636])
const route = useRoute();
const queryParams = route.query;
const markerCoords = ref(JSON.parse(queryParams.h as string))



//const sigmoid = (x: number) => 1 / (1 + Math.pow(2.7182821, -x))
//map3?h=[{"coord":[10,10],"lasttime":10,"collected":false}]


</script>
