import React, { Component, Redirect } from "react";
import { observer } from "mobx-react";

// Stores
import guildsStore from "../stores/guildStore";
import Loading from "../Loading";
import GuildCard from "../components/GameDetail/GuildCard";
// import SearchBar from "../SearchBar";
import { Card } from "react-bootstrap";

class GuildProfile extends Component {
  async componentDidMount() {
    const guildid = this.props.match.params.guildid;
    console.log("GUILD ID", guildid);
    await guildsStore.getGuildById(guildid);
    console.log("GAMEID", guildid);
  }

  render() {
    if (!guildsStore.guild) {
      return <Loading />;
    }
    console.log("GUILD", guildsStore.guild);

    return (
      <div className="cardtitle">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={guildsStore.tag} />
          <Card.Body>
            <Card.Title>{guildsStore.name}</Card.Title>
            <Card.Text>{guildsStore.description}</Card.Text>
            <Card.Text>Released {guildsStore.year}</Card.Text>
            <Card.Text> Recruitment Zone</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default observer(GuildProfile);
