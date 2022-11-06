<template>
  <div class="content p-[5%] min-w-screen min-h-screen" v-if="img.game_status == 0">
    <div class="navbar text-c_gray font-bold text-4xl flex justify-between items-center">
      <div class="w-[auto] flex items-center">
        <div class="border rounded-full bg-white mr-[20px] px-[20px] py-[10px]" @click="img.click_pause()">
          <p class="btn_pause"><i class="fa-solid fa-pause"></i></p>
        </div>
        <div class="flex items-center">
          <span class="mx-[2%]">Score: </span>
          <span>{{ img.score }}</span>
        </div>
      </div>
      <div class="w-[auto] flex items-center">
        <div>
          <p><i class="fa-solid fa-clock"></i></p>
        </div>
        <div class="mx-[10px]">
          <p>{{ img.time_play}}</p>
        </div>
        <div class="flex items-center">
          <p class="mr-[5px]">{{ a }}</p>
          <p>s</p>
        </div>
      </div>
    </div>
    <div class="w-[60%] mx-[20%]">
      <div class="grid grid-cols-6 my-[3%] gap-[5px]">
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
  <div class="min-m-screen min-h-screen fixed top-0 left-0 right-0 bg-c_gray opacity-90 z-20 p-[5%]"
    v-else-if="img.game_status == 1">
    <PauseGame1 />
  </div>
  <div class="min-m-screen min-h-screen fixed top-0 left-0 right-0 bg-c_gray opacity-90 z-25 p-[5%]" v-else>
    <EndGame1 />
  </div>
</template>

<style scoped>
img {
  width: 150px;
  height: 150px;
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
    if(img.game_status == 1) {
      clearInterval()
    }
  }
  
)

</script>