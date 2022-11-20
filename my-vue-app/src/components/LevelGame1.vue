<template>
    <audio autoplay loop preload="auto">
        <source src="../audio/audio.mp3">
    </audio>
    <div class="start_bg min-w-screen min-h-screen  ">
        <RouterLink :to="{ path: '/game1'}">
            <div class="text-white text-7xl p-[5%]">
                <p class=""><i class="fa-solid fa-circle-left test hover:text-c_gray ease-in-out"></i></p>
            </div>
        </RouterLink>
        
        <div class="flex flex-col justify-center items-center text-center">
            <div class="btn w-[40%] text-white text-5xl font-bold p-[20px] border-[5px] bg-c_gray border-white rounded hover:bg-white hover:border-c_gray hover:text-c_gray ease-in-out duration-300 " >
                <RouterLink :to="{ path: '/game1/play_game'}" @click="img.click_start(1)">
                    <p>Dễ</p>
                </RouterLink>
            </div>
            
            <div class="btn w-[40%] my-[3%] text-white text-5xl font-bold p-[20px] border-[5px] bg-c_gray border-white rounded hover:bg-white hover:border-c_gray hover:text-c_gray ease-in-out duration-300 " >
                <RouterLink :to="{ path: '/game1/play_game'}" @click="img.click_start(2)">
                    <p>Trung bình</p>
                </RouterLink>
            </div>
            <div class="btn w-[40%] text-white text-5xl font-bold p-[20px] border-[5px] bg-c_gray border-white rounded hover:bg-white hover:border-c_gray hover:text-c_gray " >
                <RouterLink :to="{ path: '/game1/play_game'}" @click="img.click_start(3)">
                    <p>Khó</p>
                </RouterLink>
            </div>
        </div>
    </div>
    </template>
    
    <style scoped>
    .start_bg{
        background-image: url("../assets/Start/bg_start.png");
        background-size: cover;
    }
    @-webkit-keyframes te {
        0% { color: #9c9c9c; } 
        50% { color: #fff;  } 
        100% { color: #9c9c9c;  } 
    }
    @-moz-keyframes te { 
        0% { color: #9c9c9c;  } 
        50% { color: #fff;  }
        100% { color: #9c9c9c;  } 
    }
    @-o-keyframes te { 
        0% { color: #9c9c9c; } 
        50% { color: #fff; } 
        100% { color: #9c9c9c;  } 
    }
    @keyframes te { 
        0% { color: #9c9c9c;  } 
        50% { color: #fff;  }
        100% { color: #9c9c9c;  } 
    } 
    .test {
        font-size:80px;
        font-weight:bold;
        -webkit-animation: te 1500ms infinite;
        -moz-animation: te 1500ms infinite; 
        -o-animation: te 1500ms infinite; 
        animation: te 1500ms infinite;
   }
   .btn {
    transition: 1s;
   }
    </style>
    
    <script setup>
    import { ImgStore } from '../stories/clickImg';
    const img = ImgStore();
    </script>