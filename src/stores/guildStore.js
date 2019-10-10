import { instance } from "./instance";
import { decorate, observable } from "mobx";

class GuildStore {
  guild = "";
  loading = true;

  fetchProfile = async () => {
    try {
      const res = instance.get("/guild/");
      const guild = res.data;
      this.guild = guild;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getProfileById(id) {
    return this.guild.find(guild => +guild.id === +id);
  }
}

decorate(GuildStore, {
  guild: observable,
  loading: observable
});

let guildStore = new GuildStore();
export default guildStore;
