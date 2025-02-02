<template>
    <div class="fixed top-0 right-0 w-full h-screen z-[0]">
        <LMap ref="map" v-model:zoom="zoom" :center="[13.771513, 460.586636]" @click="onClickMap">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </LTileLayer>
            <LMarker v-for="coord in markerCoords" :lat-lng="coord" class="pointer-events-none">
                <LIcon :icon-url="trashmarker" :icon-size="[20, 20]" />
                <LTooltip class="pointer-events-none"> trash </LTooltip>
            </LMarker>

            <LPolyline :lat-lngs="markerCoords" color="green" :weight="3"></LPolyline>
        </LMap>

    </div>
    <div class="fixed top-0 right-0">
        {{ markerCoords }}
        {{ zoom }}
    </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip, LPolyline } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import trashmarker from '../../assets/trashmarker.png'

const zoom = ref(18)
const markerCoords = ref([[13.773779849690504, 460.58910906314856], [13.773660016088508, 460.58914661407476], [13.77347245032728, 460.5891036987305], [13.773305725079801, 460.5891573429108], [13.773144209882918, 460.5890768766403], [13.77297227422813, 460.5891144275666], [13.772857650387984, 460.5890661478043], [13.772732606134639, 460.5891305208207], [13.77265966362262, 460.5890554189683], [13.772461676689566, 460.58910906314856], [13.772315791473707, 460.5890446901322], [13.772060492126844, 460.5890822410584], [13.771815612899513, 460.5890125036241], [13.771669727280447, 460.5890554189683], [13.771351904723671, 460.58896958827984], [13.771174757537283, 460.58901786804205], [13.770940297819466, 460.58894276618963], [13.770716258313865, 460.5889642238618], [13.7704453265319, 460.58890521526337], [13.770153553492495, 460.5889588594437], [13.76988262105844, 460.58887839317333], [13.769726313742108, 460.58892130851757], [13.769512693574145, 460.58888375759136], [13.769361596264313, 460.5888354778291], [13.769325124485254, 460.5886852741242], [13.769398068037695, 460.58830440044414], [13.769382437278377, 460.58800935745245], [13.769444960309402, 460.5878162384034]])

const onClickMap = (e: any) => {
    console.log(e)
    markerCoords.value.push([e.latlng.lat, e.latlng.lng])
    markerCoords.value = markerCoords.value.map(x => x)
    console.log(markerCoords.value)
}


</script>
