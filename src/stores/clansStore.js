import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";
// import data from "./data";
// const instance = axios.create({
//   baseURL: "./data"
// });

// function errToArray(err) {
//   return Object.keys(err).map(key => `${key}: ${err[key]}`);
// }

class GuildsStore {
  guilds = null;

  loading = true;

  query = "";

  errors = null;

  fetchAllGuilds = async () => {
    try {
      const res = await instance.get("");
      const guilds = res.data;
      this.guilds = guilds;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  //   get filteredGuilds() {
  //     return this.guilds.filter(guild =>
  //       `${guild.name}`.toLowerCase().includes(this.query.toLowerCase())
  //     );
  //   }

  getGuildById = id => this.guilds.find(guild => +guild.id === +id);
}

decorate(GuildsStore, {
  games: observable,
  loading: observable,
  errors: observable,
  query: observable,
  filteredGuilds: computed
});

const clansStore = new clansStore();

clansStore.fetchAllGuilds();

export default clansStore;
