<template>
    <div class="mx-auto mt-52 mb-0 max-w-[1718px] max-sm:mt-24">
        <div class="grid gap-10 grid-cols-[repeat(3,1fr)] max-md:gap-10 max-md:grid-cols-[1fr]">
            <router-link v-for="item in [{text:'MAP 1',link:'/map1'}, {text:'MAP 2',link:'/map2'}, {text:'HISTORY',link:'/history'}]" :to="item.link"
                class="px-16 py-24 text-6xl font-semibold text-center text-black bg-slate-400 max-md:px-5 max-md:py-16 max-md:text-5xl max-sm:px-5 max-sm:py-10 max-sm:text-4xl"
                >
                {{ item.text }}
            </router-link>

            <router-link to="/status"
                class="col-span-3 px-16 py-24 text-6xl font-semibold text-center text-black bg-slate-400 max-md:px-5 max-md:py-16 max-md:text-5xl max-sm:px-5 max-sm:py-10 max-sm:text-4xl">
                Status
            </router-link>
        </div>
    </div>
</template>