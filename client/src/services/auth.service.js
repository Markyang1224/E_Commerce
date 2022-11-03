import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username: username,
      email: email,
      password: password,
      role: role,
    });
  }

  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  getCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    return currentUser;
  }
}

export default new AuthService();
