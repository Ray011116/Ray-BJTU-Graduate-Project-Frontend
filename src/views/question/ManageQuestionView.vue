<template>
  <div id="manageQuestionView">
    <h2>题目管理</h2>
    <a-table
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total: total,
      }"
      @page-change="onPageChange"
    >
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="doUpdate(record)"> 修改 </a-button>
          <a-button status="danger" @click="doDelete(record)"> 删除 </a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { deleteQuestion, listQuestionByPage } from "@/api/api";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "内容",
    dataIndex: "content",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "答案",
    dataIndex: "answer",
  },
  {
    title: "提交数",
    dataIndex: "submitNum",
  },
  {
    title: "通过数",
    dataIndex: "acceptedNum",
  },
  {
    title: "判题配置",
    dataIndex: "judgeCase",
  },
  {
    title: "判题用例",
    dataIndex: "judgeConfig",
  },
  {
    title: "用户ID",
    dataIndex: "userId",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "Optional",
    slotName: "optional",
  },
];

const router = useRouter();

const dataList = ref([]);
const total = ref(0);
const searchParams = ref({
  pageSize: 10,
  current: 1,
});

const loadData = async () => {
  const res = (await listQuestionByPage(searchParams.value)).data;
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("加载题目失败：" + res.message);
  }
};

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

/**
 * 监听searchParams变量，重新加载数据
 */
watchEffect(() => {
  loadData();
});

/**
 * 翻页回调函数
 * @param page
 */
const onPageChange = (page: number) => {
  searchParams.value.current = page;
};

/**
 * 点击删除题目
 * @param question
 */
const doDelete = async (question: any) => {
  const res = (await deleteQuestion({ id: question.id })).data;
  if (res.code === 0) {
    message.success("删除成功");
    loadData();
  } else {
    message.error("删除失败" + res.message);
  }
};

/**
 * 点击修改题目
 * @param question
 */
const doUpdate = (question: any) => {
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};
</script>

<style scoped>
#manageQuestionView {
  max-width: 80%;
  margin: auto;
}
</style>
