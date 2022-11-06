<template>
<div class="home_bg min-m-screen min-h-screen flex justify-between">
    <div class="mx-[9%] mt-[15%] py-[8%] flex justify-between items-center">
        <RouterLink :to=" { path: '/game1' } ">
            <div class="p-[8%] bg-white text-c_blue text-f_text rounded-[20px] border-[4px] border-double border-c_gray flex justify-center items-center opacity-95 hover:bg-c_gray hover:text-white ease-in-out duration-300 hover:border-white hover:border-double">
                <p class="text-[40px] font-black">Find similar pictures</p>
            </div>
        </RouterLink>
        <RouterLink :to=" { path: '/game2' } " class="mx-[2%]">
            <div class="p-[8%] bg-white text-c_blue text-f_text rounded-[20px] border-[4px] border-double border-c_gray flex justify-center items-center opacity-95 hover:bg-c_gray hover:text-white ease-in-out duration-300 hover:border-white hover:border-double">
                <p class="text-[40px] font-black">Find photos by theme</p>
            </div>
        </RouterLink>
    </div>
</div>

</template>
    
<style scoped>
.home_bg{
    background-image: url("../assets/Home/bg_home_9.png");
    background-size: cover;
    background-position: center;
}
</style>

<script setup>
</script>