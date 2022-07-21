import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://github.com/hariram2/demo/blob/json__branch/user.json"
  });
}
