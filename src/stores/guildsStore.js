import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";
// import data from "./data";
// const instance = axios.create({
//   baseURL: "./data"
// });

function errToArray(err) {
  return Object.keys(err).map(key => `${key}: ${err[key]}`);
}

class GuildsStore {
  guilds = [];
  guild = null;

  loading = true;

  query = "";

  errors = null;

  fetchAllGuilds = async () => {
    try {
      const res = await instance.get("/guild/");
      const guilds = res.data;
      this.guilds = guilds;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  getGuildById = async id => {
    try {
      const res = await instance.get(`/guild/${id}/`);
      const guild = res.data;
      this.guild = guild;
      console.log("is within store", guild);

      this.loading = false;
    } catch (error) {
      console.error("error", error);
    }
  };
  //   get filteredGuilds() {
  //     return this.guilds.filter(guild =>
  //       `${guild.name}`.toLowerCase().includes(this.query.toLowerCase())
  //     );
  //   }

  // getGuildById = id => this.guilds.find(guild => +guild.id === +id);
}

decorate(GuildsStore, {
  guilds: observable,
  guild: observable,
  loading: observable,
  errors: observable,
  query: observable
  // filteredGuilds: computed
});

const guildsStore = new GuildsStore();

guildsStore.fetchAllGuilds();
console.log(guildsStore);
export default guildsStore;
