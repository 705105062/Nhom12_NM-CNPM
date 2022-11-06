<template>
    <div class="bxh min-h-[700px]  text-center flex flex-col justify-center items-center">
        <div class="w-[40%] text-c_gray text-5xl font-bold p-[20px] border-[5px] bg-white border-c_gray rounded hover:bg-c_gray hover:border-white hover:text-white ease-in-out duration-300"
            @click="img.click_resume()">
            <p>Resume</p>
        </div>
        <div
            class="w-[40%] my-[3%] text-c_gray text-5xl font-bold p-[20px] border-[5px] bg-white border-c_gray rounded hover:bg-c_gray hover:border-white hover:text-white ease-in-out duration-300" @click="img.click_reset()">
                <p>Reset</p>
        </div>
        <div
            class="w-[40%] text-c_gray text-5xl font-bold p-[20px] border-[5px] bg-white border-c_gray rounded hover:bg-c_gray hover:border-white hover:text-white ease-in-out duration-300">
            <RouterLink :to="{ path: '/' }">
                <p>Go to Home</p>
            </RouterLink>
        </div>

    </div>

</template>

<style scoped>
.bxh {
    padding-bottom: 2%;
    background-image: url("../assets/game1/pause_game_2.jpg");
    background-size: cover;
}

.item_title {
    border-right: 5px solid #9C9C9C;
}
</style>

<script setup>
import { ImgStore } from '../stories/clickImg';
const img = ImgStore();
</script>