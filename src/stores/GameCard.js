import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameCard extends Component {
  render() {
    const { games } = this.props;
    const gameName = `${games.name}`;

    return (
      <div className="col-lg-4 col-md-6 col-12">
        {/* <Link to={`/games/${game.id}`} className="card"> */}
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={games.image}
            alt={gameName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{gameName}</span>
          </h5>
          <small className="card-text">{games.description} </small>
        </div>
        {/* </Link> */}
      </div>
    );
  }
}

export default GameCard;
