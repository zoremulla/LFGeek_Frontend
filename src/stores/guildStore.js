import { instance } from "./instance";
import { decorate, observable } from "mobx";

class GuildStore {
  // guilds = [];
  guild = "";
  loading = true;

  fetchGuild = async () => {
    try {
      const res = instance.get("guild/");
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
      this.guild = guild;
      history.replace("guild/");
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
