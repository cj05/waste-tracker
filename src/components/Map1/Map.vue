<template>
    <div class="fixed top-0 right-0 w-full h-screen z-[0]">
        <LMap ref="map" v-model:zoom="zoom" v-model:center="center" @click="onClickMap" :use-global-leaflet="false">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </LTileLayer>
            <div v-for="coord in markerCoords">
                <div v-if="coord.temporary">
                    <LCircleMarker :lat-lng="coord.coord" class="pointer-events-none"
                        @click="(e: any) => onClickMarker(e, coord)" color="red"
                        :radius="2 / 18000 * Math.pow(2, zoom)">
                        <!-- pov: i was bored, so basically right its a sigmoid function with a bit of offset -->>
                        <LTooltip class="pointer-events-none"> trash <br /> Last Collection: {{
                            ((Date.now() / 1000 - coord.lasttime) / 3600).toFixed(2) }} Hrs </LTooltip>
                    </LCircleMarker>
                </div>
                <div v-else>
                    <LMarker :lat-lng="coord.coord" class="pointer-events-none"
                        @click="(e: any) => onClickMarker(e, coord)">
                        <LIcon :icon-url="Math.floor(Date.now()/86400000) -  Math.floor(coord.lasttime/86400) > 0?
                        trashmarker:collectedmarker" :icon-size="[60, 60]" />
                        <LTooltip class="pointer-events-none"> trash <br /> Last Collection: {{
                            ((Date.now() / 1000 - coord.lasttime) / 3600).toFixed(2) }} Hrs </LTooltip>
                    </LMarker>
                </div>
            </div>
        </LMap>

    </div>
    <div class="fixed top-0 right-0">
        {{ center }}
        {{ zoom }}
    </div>
    <button @click="toggleTemp" class="fixed z-120 bottom-4 left-4 px-4 py-2 bg-slate-400 text-white rounded"
        :class="temptoggle ? 'bg-slate-600' : ''">
        !
    </button>
    <Teleport defer to="#above">
        <div class="flex items-center justify-center">
            <button @click="toggleCreate"
                class="px-10 py-6 bg-blue-500 rounded-xl text-4xl font-bold text-center text-black bg-slate-400"
                :class="create ? 'bg-slate-600' : ''">
                +
            </button>
        </div>
    </Teleport>
</template>

<script setup lang="ts">

interface markers {
    coord: Array<number>
    lasttime: number
    temporary: boolean
}


import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip, LCircleMarker } from "@vue-leaflet/vue-leaflet";
import { ref, defineModel } from "vue";
import trashmarker from '../../assets/trashmarker.png'
import collectedmarker from '../../assets/collectedmarker.png'

const zoom = ref(16)
const center = ref([13.771513, 460.586636])
const markerCoords = defineModel<markers[]>('markerCoords')

const temptoggle = ref(false)
const create = ref(false)

const toggleTemp = () => {
    temptoggle.value = !temptoggle.value
}
const toggleCreate = () => {
    create.value = !create.value
}

const createTrash = (coord: number[]) => {
    markerCoords.value?.push({ coord: coord, lasttime: 0 , temporary: temptoggle.value})
    markerCoords.value = markerCoords.value?.map(x => x) // force refresh arr
}

const deleteTrash = (coord: number[]) => {
    // correct coord && (if temporary 0 => if create.value 0 => 1, 1 => 0,1 => 0)
    markerCoords.value = markerCoords.value?.filter(x => { return (x.coord[0] != coord[0] || x.coord[1] != coord[1]) || !( x.temporary || create.value) }) // force refresh arr
}

//const sigmoid = (x: number) => 1 / (1 + Math.pow(2.7182821, -x))

const onClickMap = (e: any) => {
    if (create.value) {
        createTrash([e.latlng.lat, e.latlng.lng])
    }
}

const onClickMarker = (e: any, o: any) => {
    console.log(e.target._latlng)
    const coord = [e.target._latlng.lat,e.target._latlng.lng]
    let marker = markerCoords.value?.find(x=>x.coord[0] == coord[0] && x.coord[1] == coord[1])
    if(marker && !marker.temporary && !create.value && ( Math.floor(Date.now()/86400000) -  Math.floor(marker.lasttime/86400)) > 0){
        marker.lasttime = Date.now()/1000
    }else{
        deleteTrash(coord)
    }
}


</script>
