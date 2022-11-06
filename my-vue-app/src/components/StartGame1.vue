<template>
<div class="start_bg min-w-screen min-h-screen text-center flex flex-col justify-center items-center">
    <div class="w-[40%] text-white text-5xl font-bold p-[20px] border-[5px] bg-c_gray border-white rounded hover:bg-white hover:border-c_gray hover:text-c_gray ease-in-out duration-300" >
        <RouterLink :to="{ path: '/game1/play_to_similar'}" @click="img.click_start()">
            <p>Start</p>
        </RouterLink>
    </div>
    
    <div class="w-[40%] my-[3%] text-white text-5xl font-bold p-[20px] border-[5px] bg-c_gray border-white rounded hover:bg-white hover:border-c_gray hover:text-c_gray ease-in-out duration-300" >
        <RouterLink :to="{ path: '/'}">
            <p>Go to Home</p>
        </RouterLink>
    </div>
    <div class="w-[40%] text-white text-5xl font-bold p-[20px] border-[5px] bg-c_gray border-white rounded hover:bg-white hover:border-c_gray hover:text-c_gray ease-in-out duration-300" >
        <RouterLink :to="{ path: '/game1/bxh'}">
            <p>Go to Ranking</p>
        </RouterLink>
    </div>
</div>

</template>

<style scoped>
.start_bg{
    background-image: url("../assets/Start/bg_start.png");
    background-size: cover;
}
</style>

<script setup>
import { ImgStore } from '../stories/clickImg';
const img = ImgStore();
</script>