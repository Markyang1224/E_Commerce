import axios from "axios";
const API_URL = "http://localhost:8080/api/commodity";

class CommodityService {
  postCommodity(name, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL + "/postCommodity",
      { name, description, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new CommodityService();
