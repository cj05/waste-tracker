<script setup lang="ts">
import imgurl from '../assets/home.png'
</script>


<template>
    <div>
        <router-link to="/" class="home-button">
            <img :src="imgurl" alt="Home" class= "h-24 w-24"/>
        </router-link>
    </div>
</template>