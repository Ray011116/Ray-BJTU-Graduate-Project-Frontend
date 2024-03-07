import axios from "axios";

export function getLoginUser() {
  return axios({
    url: "/api/user/get/login",
    method: "GET",
  });
}
