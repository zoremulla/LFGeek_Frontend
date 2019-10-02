import { decorate, observable, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

function errToArray(err) {
  return Object.keys(err).map(key => `${key}: ${err[key]}`);
}

class GamesStore {
  games = [];

  loading = true;

  query = "";

  errors = null;

  fetchGames = async () => {
    try {
      const res = await instance.get("/api/games/");
      const games = res.data;
      this.games = games;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  // addAuthor = async newAuthor => {
  //   try {
  //     const res = await instance.post("/api/games/", newAuthor);
  //     const author = res.data;
  //     this.games.unshift(author);
  //     this.errors = null;
  //   } catch (err) {
  //     this.errors = errToArray(err.response.data);
  //   }
  // };

  get filteredGames() {
    return this.games.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(this.query.toLowerCase())
    );
  }

  getGameById = id => this.games.find(author => +author.id === +id);
}

decorate(GamesStore, {
  games: observable,
  loading: observable,
  errors: observable,
  query: observable,
  filteredGames: computed
});

const gamesStore = new GamesStore();
gamesStore.fetchGames();

export default gamesStore;
