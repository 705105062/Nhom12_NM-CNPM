<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
<style>
*{
  font-family: monospace;
}
</style>
