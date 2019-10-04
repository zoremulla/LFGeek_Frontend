import { decorate, observable, computed } from "mobx";
// import axios from "axios";
import data from "./data";
// const instance = axios.create({
//   baseURL: "https://the-index-api.herokuapp.com"
// });

function errToArray(err) {
  return Object.keys(err).map(key => `${key}: ${err[key]}`);
}

class GamesStore {
  games = [...data];

  loading = true;

  query = "";

  errors = null;

  // fetchGames = async () => {
  //   try {
  //     const res = await instance.get("/api/games/");
  //     const games = res.data;
  //     this.games = games;
  //     this.loading = false;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
    return this.games.filter(game =>
      `${game.name}`.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  getGameById = id => this.games.find(game => +game.id === +id);
}

decorate(GamesStore, {
  games: observable,
  loading: observable,
  errors: observable,
  query: observable,
  filteredGames: computed
});

const gamesStore = new GamesStore();
// gamesStore.fetchGames();

export default gamesStore;
