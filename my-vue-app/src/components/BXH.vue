<template>
<div class="bxh min-w-screen min-h-screen text-center px-[10%] pt-[10%]">
    <div class="min-h-[600px] bg-white rounded opacity-70 text-[24px] text-black p-[10%] font-bold ">
        <div class="title_bxh grid grid-cols-9 border-[5px] border-solid border-c_gray">
            <div class="stt item_title col-span-1">
                <p>Top</p>
            </div>
            <div class="name item_title col-span-3">
                <p>Tên người chơi</p>
            </div>
            <div class="date item_title col-span-3">
                <p>Ngày chơi</p>
            </div>
            <div class="score col-span-2">
                <p>Điểm</p>
            </div>
        </div>
        <div class="content_bxh grid grid-cols-9 mt-[2%] mb-[1%]">
            <div class="col-span-1">
                <p>1</p>
            </div>
            <div class="col-span-3">
                <p>Nguyễn Đức Lập</p>
            </div>
            <div class="col-span-3">
                <p>17-10-2022</p>
            </div>
            <div class="col-span-2">
                <p>2000</p>
            </div>
        </div>
    </div>
    <div class="fixed bottom-[2%] right-[5%] bg-white rounded-full p-[2%] text-3xl text-c_gray hover:bg-c_gray hover:text-white ease-in-out duration-300">
        <RouterLink :to="{ path: '/game1'}">
            <p><i class="fa-solid fa-house"></i></p>
        </RouterLink>
    </div>
</div>

</template>

<style scoped>
.bxh{
    background-image: url("../assets/BXH/bg_bxh_1.png");
    background-size: cover;
}
.item_title {
    border-right: 5px solid #9C9C9C;
}
</style>

<script setup>

</script>