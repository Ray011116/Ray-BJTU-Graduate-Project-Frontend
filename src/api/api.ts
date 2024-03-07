import axios from "axios";

export function getLoginUser() {
  return axios({
    url: "/api/user/get/login",
    method: "GET",
  });
}

export function userLogin(data: any) {
  return axios({
    url: "/api/user/login",
    method: "POST",
    data: data,
  });
}
