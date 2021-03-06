import React, { Component } from "react";
import { observer } from "mobx-react";

// Components
import gamesStore from "../../stores/gamesStore";
import Loading from "../../Loading";
import GuildCard from "./GuildCard";
import PlayerCard from "../PlayersList/PlayerCard";
// import SearchBar from "../SearchBar";
import { Card } from "react-bootstrap";

class GameDetail extends Component {
  async componentDidMount() {
    const gameid = this.props.match.params.gameid;
    console.log("GAME ID", gameid);
    await gamesStore.getGameById(gameid);
    console.log("GAMEID", gameid);
  }

  render() {
    if (!gamesStore.game) {
      return <Loading />;
    }
    const GuildC = gamesStore.game.guilds.map(guild => (
      <GuildCard key={guild.id} guild={guild} />
    ));

    const PlayerC = gamesStore.game.players.map(player => (
      <PlayerCard key={player.id} player={player} />
    ));
    console.log("GAME", gamesStore.game);
    return (
      <div>
        <div className="cardtitle">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={gamesStore.game.image} />
            <Card.Body>
              <Card.Title>{gamesStore.game.name}</Card.Title>
              <Card.Text>{gamesStore.game.description}</Card.Text>
              <Card.Text>Released {gamesStore.game.year}</Card.Text>
              <Card.Text> Recruitment Zone</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        {/* <SearchBar store={gamesStore} /> */}
        <h2>Guilds List</h2>
        <div>
          <div className="card-deck">
            <div>{GuildC}</div>
          </div>
        </div>
        <h2>Players List</h2>
        <div className="card-deck">{PlayerC}</div>
      </div>
    );
  }
}

export default observer(GameDetail);
