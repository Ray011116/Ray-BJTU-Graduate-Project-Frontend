<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view></router-view>
    </template>
    <template v-else>
      <BasicLayout></BasicLayout>
    </template>
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";

const route = useRoute();

/**
 * 全局初始化函数，系统全局单次调用的代码
 */
const doInit = () => {
  console.log("BJTU 20级 饶睿的毕设");
};

onMounted(() => {
  doInit();
});
</script>
