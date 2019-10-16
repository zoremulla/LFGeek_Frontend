import React, { Component, Redirect } from "react";
import { observer } from "mobx-react";

// Stores
import guildsStore from "../stores/guildsStore";
import Loading from "../Loading";
import GameCard from "./GameList/GameCard";
// import SearchBar from "../SearchBar";
import { Card } from "react-bootstrap";
import gamesStore from "../stores/gamesStore";

class GuildProfile extends Component {
  async componentDidMount() {
    const guildid = this.props.match.params.guildid;
    console.log("GUILD ID", guildid);
    await guildsStore.getGuildById(guildid);
  }

  render() {
    if (!guildsStore.guild) {
      return <Loading />;
    }
    console.log("GUILD", guildsStore.guild);

    const games = guildsStore.guild.games.map(game => (
      <GameCard key={game} game={game} />
    ));

    return (
      <div className="cardtitle">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={guildsStore.guild.tag} />
          <Card.Body>
            <Card.Title>{guildsStore.guild.name}</Card.Title>
            <Card.Text>{guildsStore.guild.description}</Card.Text>
            <Card.Text>Released {guildsStore.guild.year}</Card.Text>
            <Card.Text> Recruitment Zone</Card.Text>
          </Card.Body>
        </Card>
        <div className="card-deck"> {games}</div>
      </div>
    );
  }
}

export default observer(GuildProfile);
