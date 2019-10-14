import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;
  setUser = token => {
    if (token) {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      localStorage.setItem("myToken", token);
    } else {
      // delete instance;
      localStorage.removeItem("myToken");
      this.user = null;
    }
  };

  signup = async (userData, history) => {
    try {
      await instance.post("/register/", userData);
      history.replace("/gameslist/");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  login = async (userData, history) => {
    try {
      const res = await instance.post("/login/", userData);
      const user = res.data;
      this.setUser(user.access);
      history.replace("/gameslist");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
