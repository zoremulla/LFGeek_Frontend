import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

class PlayerCard extends Component {
  render() {
    const player = this.props.player;
    // const profileName = `${profile.username}`;
    console.log("PROFILE", player);

    return (
      /* <div className="card">
        <img src={player.image} className="card-img-top" alt="{profileName}" />
        <div className="card-body">
          <h5 className="card-title">{player.username}</h5>
          <p className="card-text">{player.cv}</p>
          <p className="card-text">I am following these games </p>
          <p className="card-text">{player.games} </p>
          <p className="card-text"> Currently in these clans </p>
          <p className="card-text">{player.clansjoined}</p>
          <small className="text-muted">Country: {player.country}</small>
          <br></br>
        </div>
      </div> */
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={player.image} />
          <Card.Body>
            <Card.Title>{player.username}</Card.Title>
            <Card.Text>{player.cv}</Card.Text>
            <Card.Text>Country: {player.country}</Card.Text>
            <Button variant="primary">Profile</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PlayerCard;
