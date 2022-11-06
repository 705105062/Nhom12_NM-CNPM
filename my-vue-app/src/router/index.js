import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import StartGame1 from '../components/StartGame1.vue';
import StartGame2 from '../components/StartGame2.vue';
import ContentGame1 from '../components/ContentGame1.vue';
import BXH from '../components/BXH.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/game1",
        name: "game1",
        component: StartGame1,
      },
      {
        path: "/game2",
        name: "game2",
        component: StartGame2,
      },
      {
        path: "/game1/play_to_similar",
        name: "play_to_similar_pictures",
        component: ContentGame1,
      },
      {
        path: "/game1/bxh",
        name: "ranking_table",
        component: BXH,
      }
    ],
  });
  
   
  export default router;
  