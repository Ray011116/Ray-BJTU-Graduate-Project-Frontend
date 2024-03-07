<template>
  <div id="userLoginView">
    <h2>用户登录</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入不小于8位的密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" style="width: 160px" type="primary"
          >提交</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { userLogin } from "@/api/api";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 表单信息
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
});

const router = useRouter();
const store = useStore();

/**
 * 提交表单
 */
const handleSubmit = async () => {
  const res = await userLogin(form);
  await store.dispatch("user/getLoginUser");
  // 登录成功，跳转到主页
  if (res.data.code === 0) {
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败：" + res.data.message);
  }
};
</script>
