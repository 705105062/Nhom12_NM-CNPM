<template>
<audio autoplay loop preload="auto">
    <source src="../audio/audio.mp3">
</audio>
<div class="start_bg min-w-screen min-h-screen text-center flex flex-col justify-center items-center">
    <div class="btn" >
        <RouterLink :to="{ path: '/game1/choose_level'}">
            <p>Bắt đầu</p>
        </RouterLink>
    </div>
    
    <div class="btn my-[3%]" >
        <RouterLink :to="{ path: '/'}">
            <p>Về trang chủ</p>
        </RouterLink>
    </div>
    <div class="btn" >
        <RouterLink :to="{ path: '/game1/bxh'}">
            <p>Xem BXH</p>
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
