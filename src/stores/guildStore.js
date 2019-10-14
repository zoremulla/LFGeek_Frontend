import { instance } from "./instance";
import { decorate, observable } from "mobx";

class GuildStore {
  guilds = [];
  guild = "";
  loading = true;

  // guild = null;
  // setGuild = token => {
  //   if (token) {
  //     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  //     const decodedGuild = jwt_decode(token);
  //     this.guild = decodedGuild;
  //     localStorage.setItem("myToken", token);
  //   } else {
  //     // delete instance;
  //     localStorage.removeItem("myToken");
  //     this.guild = null;
  //   }
  // };

  fetchGuild = async () => {
    try {
      const res = instance.get("/guild/");
      const guild = res.data;
      this.guild = guild;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getGuildById(id) {
    return this.guild.find(guild => +guild.id === +id);
  }

  postForm = async (guildData, history) => {
    try {
      const res = await instance.post("/guild/", guildData);
      const guild = res.data;
      history.replace("/clanlist");
    } catch (err) {
      console.error(err.response);
    }
  };
}

decorate(GuildStore, {
  guild: observable,
  loading: observable
});

let guildStore = new GuildStore();
export default guildStore;
