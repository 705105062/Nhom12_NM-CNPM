<template>
  <div class="content p-[5%] min-w-screen min-h-screen" v-if="img.game_status == 0">
    <div class="navbar text-c_gray font-bold text-4xl flex justify-between items-center">
      <div class="w-[auto] flex items-center">
        <div class="border rounded-full bg-white mr-[20px] px-[20px] py-[10px]" @click="img.click_pause()">
          <p class="btn_pause"><i class="fa-solid fa-pause"></i></p>
        </div>
        <div class="flex items-center w-[300px]">
          <span class="mx-[2%]">Điểm số: </span>
          <span>{{ img.score }}</span>
        </div>
      </div>
      <div class="w-[auto] flex items-center">
        <div>
          <p><i class="fa-solid fa-clock"></i></p>
        </div>
        <div class="mx-[10px]">
          <p>{{ img.time_play }}</p>
        </div>
        <div class="flex items-center">
          <p class="mr-[5px]">{{ a }}</p>
          <p>s</p>
        </div>
      </div>
    </div>
    <div class="w-[60%] mx-[20%]">
      <div>
        <div class="lv1 grid grid-cols-3 my-[3%] gap-[5px]" v-if="img.level == 1">
          <div v-for="item in img.list">
            <div @click="img.clickImg(item.id)">
              <div v-if="item.status == 2">
                <img :src="img.getImageUrl(item.image)">
              </div>
              <div v-else-if="item.status == 1">
                <img :src="img.getImageUrl(item.hidden)" alt="">
              </div>
              <div v-else>
                <img :src="img.getImageUrl(item.pass)" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="lv2 grid grid-cols-4 my-[3%] gap-[5px]" v-else-if="img.level == 2">
          <div v-for="item in img.list">
            <div @click="img.clickImg(item.id)">
              <div v-if="item.status == 2">
                <img :src="img.getImageUrl(item.image)">
              </div>
              <div v-else-if="item.status == 1">
                <img :src="img.getImageUrl(item.hidden)" alt="">
              </div>
              <div v-else>
                <img :src="img.getImageUrl(item.pass)" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="lv3 grid grid-cols-6 my-[3%] gap-[5px]" v-else>
          <div v-for="item in img.list">
            <div @click="img.clickImg(item.id)">
              <div v-if="item.status == 2">
                <img :src="img.getImageUrl(item.image)">
              </div>
              <div v-else-if="item.status == 1">
                <img :src="img.getImageUrl(item.hidden)" alt="">
              </div>
              <div v-else>
                <img :src="img.getImageUrl(item.pass)" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
  <div class="min-m-screen min-h-screen fixed top-0 left-0 right-0 bg-c_gray opacity-90 z-20 p-[5%]"
    v-else-if="img.game_status == 1">
    <PauseGame1 />
  </div>
  <div class="min-m-screen min-h-screen fixed top-0 left-0 right-0 bg-c_gray opacity-90 z-25 p-[5%]" v-else>
    <EndGame1 />
  </div>
  <audio autoplay loop>
    <source src="../audio/open-game.mp3">
  </audio>
</template>

<style scoped>
.lv3 img {
  width: 150px;
  height: 150px;
  border: 5px solid rgb(109, 119, 121);
}
.lv2 img {
  width: 200px;
  height: 200px;
  border: 5px solid rgb(109, 119, 121);
}
.lv1 img {
  width: 300px;
  height: 300px;
  border: 5px solid rgb(109, 119, 121);
}

.content {
  background-image: url('../assets/game1/bg_game1_1.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
  animation: 50s para infinite linear;
}

@keyframes para {
  100% {
    background-position: -5000px;
  }
}
</style>

<script setup>
import { onMounted } from 'vue';
import { ImgStore } from '../stories/clickImg';
import PauseGame1 from './PauseGame1.vue';
import EndGame1 from './EndGame1.vue';

const img = ImgStore();

onMounted(() => {

  img.on_start_game();
  if (img.game_status == 1) {
    clearInterval()
  }
  
  img.level = localStorage.getItem('level_game')
  img.click_start(img.level);
  console.log("line 99 content: " + img.level);
}

)

</script>