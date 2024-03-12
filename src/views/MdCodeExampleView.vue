<template>
  <div class="home">
    <MDEditor :value="mdValue" :handle-change="onMdChange"></MDEditor>
    <CodeEditor :value="codeValue" :handle-change="onCodeChange"></CodeEditor>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MDEditor from "@/components/MDEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const codeValue = ref("");
const mdValue = ref("");

const onCodeChange = (v: string) => {
  codeValue.value = v;
  console.log("代码编辑器: ", v);
};
const onMdChange = (v: string) => {
  mdValue.value = v;
  console.log("Markdown编辑器: ", v);
};
</script>
