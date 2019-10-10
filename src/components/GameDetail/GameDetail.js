import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import PlayersList from "../PlayersList/PlayersList";
import gamesStore from "../../stores/gamesStore";
import Loading from "../../Loading";
import GuildsList from "./GuildsList";
// import SearchBar from "../SearchBar";

class GameDetail extends Component {
  // componentDidMount() {
  //   if (authStore.user) {
  //     profileStore.fetchProfile();
  //     profileStore.fetchHistory();
  //     profileStore.fetchNotification();
  //     cartStore.fetchCart();
  render() {
    const gameid = this.props.match.params.gameid;
    console.log("GAME ID", gameid);
    gamesStore.getGameById(gameid);
    if (gamesStore.loading) {
      return <Loading />;
    }

    return (
      <div>
        <h3> </h3>
        {/* <SearchBar store={gamesStore} /> */}
        <div className="card-deck">
          <GuildsList />
        </div>
        <div className="card-deck">
          <PlayersList />
        </div>
      </div>
    );
  }
}

export default observer(GameDetail);
