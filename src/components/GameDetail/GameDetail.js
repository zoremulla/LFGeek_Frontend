import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import PlayersList from "../PlayersList/PlayersList";
import ClanList from "../GameDetail/ClanList";
import gamesStore from "../../stores/gamesStore";
// import SearchBar from "../SearchBar";

class GameDetail extends Component {
  // componentDidMount() {
  //   if (authStore.user) {
  //     profileStore.fetchProfile();
  //     profileStore.fetchHistory();
  //     profileStore.fetchNotification();
  //     cartStore.fetchCart();
  render() {
    if (gamesStore.loading) {
      return <Loading />;
    }
    const gameid = this.props.match.params.gameid;

    return (
      <div className="clans">
        <h3>Clans LFM</h3>
        // {/* <SearchBar store={gamesStore} /> */}
        <div className="card-deck">
          <ClanList />
        </div>
        <h3>Players LFG</h3>
        <div className="card-deck">
          <PlayersList />
        </div>
      </div>
    );
  }
}

export default observer(GameDetail);
