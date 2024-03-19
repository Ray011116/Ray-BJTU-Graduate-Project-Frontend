import axios from "axios";

/**
 * 用户登陆
 * @param data
 */
export function userLogin(data: any) {
  return axios({
    url: "/api/user/login",
    method: "POST",
    data: data,
  });
}

/**
 * 获取当前登录用户
 */
export function getLoginUser() {
  return axios({
    url: "/api/user/get/login",
    method: "GET",
  });
}

/**
 * 添加题目
 * @param data
 */
export function addQuestion(data: any) {
  return axios({
    url: "/api/question/add",
    method: "POST",
    data: data,
  });
}

/**
 * 删除题目
 * @param data
 */
export function deleteQuestion(data: any) {
  return axios({
    url: "/api/question/delete",
    method: "POST",
    data: data,
  });
}

/**
 * 更新题目（仅管理员）
 * @param data
 */
export function updateQuestion(data: any) {
  return axios({
    url: "/api/question/update",
    method: "POST",
    data: data,
  });
}

/**
 * 根据ID穿题目
 * @param params
 */
export function getQuestionById(params: any) {
  return axios({
    url: "/api/question/get",
    method: "GET",
    params: params,
  });
}

/**
 * 分页查询题目（非脱敏）
 * @param data
 */
export function listQuestionByPage(data: any) {
  return axios({
    url: "/api/question/list/page",
    method: "POST",
    data: data,
  });
}

/**
 * 分页查询题目（脱敏）
 * @param data
 */
export function listQuestionVOByPage(data: any) {
  return axios({
    url: "/api/question/list/page/vo",
    method: "POST",
    data: data,
  });
}
