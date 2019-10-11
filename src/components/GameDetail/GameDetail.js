import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import PlayersList from "../PlayersList/PlayersList";
import gamesStore from "../../stores/gamesStore";
import Loading from "../../Loading";
import GuildsList from "./GuildsList";

// import SearchBar from "../SearchBar";
import { Card } from "react-bootstrap";
import guildsStore from "../../stores/guildsStore";

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

    // const guildsbygame= this.game.guilds.map(guild => )
    return (
      <div>
        <div className="cardtitle">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={gamesStore.game.image} />
            <Card.Body>
              <Card.Title>{gamesStore.game.name}</Card.Title>
              <Card.Text> Recruitment Zone</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br></br>
        <text></text>

        {/* <SearchBar store={gamesStore} /> */}
        <div className="cards"></div>
        <div className="cards">{/* <PlayersList /> */}</div>
      </div>
    );
  }
}

export default observer(GameDetail);
