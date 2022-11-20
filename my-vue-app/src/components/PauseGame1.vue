<template>
    <div class="bxh min-h-[700px]  text-center flex flex-col justify-center items-center">
        <div class="btn"
            @click="img.click_resume()">
            <p>Tiếp tục</p>
        </div>
        <div
            class="btn my-[3%]" @click="img.click_reset()">
                <p>Làm mới</p>
        </div>
        <div
            class="btn" @click="img.click_go_to_Home()">
            <RouterLink :to="{ path: '/' }">
                <p>Về trang chủ</p>
            </RouterLink>
        </div>

    </div>

</template>

<style scoped>
.bxh {
    padding-bottom: 2%;
    background-image: url("../assets/game1/pause.png");
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