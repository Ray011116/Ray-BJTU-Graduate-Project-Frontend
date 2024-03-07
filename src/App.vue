<template>
  <div id="app">
    <BasicLayout></BasicLayout>
  </div>
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "vue";

/**
 * 全局初始化函数，系统全局单次调用的代码
 */
const doInit = () => {
  console.log("BJTU 20级 饶睿的毕设");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
const store = useStore();

router.beforeEach((to, from, next) => {
  // 判断当前用户是否有权限
  if (to.meta?.access === "canAdmin") {
    if (store.state.user.loginUser?.userRole !== "admin") {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
