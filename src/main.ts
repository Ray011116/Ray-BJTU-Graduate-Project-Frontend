import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import store from "./store";
import "@/api/axiosInterceptor";
import "@/access/";
import "bytemd/dist/index.css";

const app = createApp(App);
app.config.warnHandler = () => null; // 控制台屏蔽vue warning
app.use(ArcoVue).use(store).use(router).mount("#app");
