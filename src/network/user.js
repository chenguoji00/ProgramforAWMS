import axios from "./axios";
//登录请求
export function getUser(params) {
  return axios({
    url: "/cc/query",
    params
  });
}
