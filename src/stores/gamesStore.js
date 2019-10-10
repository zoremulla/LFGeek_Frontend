import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

function errToArray(err) {
  return Object.keys(err).map(key => `${key}: ${err[key]}`);
}

class GamesStore {
  games = [];

  game = null;

  loading = true;

  query = "";

  errors = null;

  fetchAllGames = async () => {
    try {
      const res = await instance.get("gamelist/");
      const games = res.data;
      this.games = games;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  // get filteredGames() {
  //   return this.games.filter(game =>
  //     `${game.name}`.toLowerCase().includes(this.query.toLowerCase())
  //   );
  // }

  getGameById = id => {
    // try and catch
    try {
      this.game = this.games.find(game => +game.id === +id);
    } catch (error) {
      console.log("error", error);
    }
  };
}

decorate(GamesStore, {
  games: observable,
  loading: observable,
  errors: observable,
  query: observable
  //   filteredGames: computed
});

const gamesStore = new GamesStore();

gamesStore.fetchAllGames();

export default gamesStore;
