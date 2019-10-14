import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
class GameCard extends Component {
  render() {
    const game = this.props.game;
    const gameName = `${game.name}`;
    console.log("GAME", game);
    return (
      //  {/* <Link to={`/detailgame/${game.id}`} className="card">
      //    <img src={game.image} className="card-img-top" alt="{gameName}" />
      //    <div className="card-body">
      //      <h5 className="card-title">{gameName}</h5>
      //      <p className="card-text">{game.genre}</p>
      //      <p className="card-text">{game.developer}</p>
      //      <p className="card-text">{game.platform}</p>
      //      <p className="card-text">Released: {game.year}</p>
      //      <small className="text-muted">{game.description}</small>
      //    </div>
      // </Link>  */}
      /* <div class="card" style="width: 18rem;">
        <img src={game.image} className="card-img-top" alt={gameName} />
        <div class="card-body">
          <h5 className="card-title">{gameName}</h5>
        </div>
      </div> */
      // {/* <CardDeck> */}
      <Link to={`/detailgame/${game.id}`} className="card">
        <Card>
          <Card.Img variant="top" src={game.image} alt={gameName} />
          <Card.Body>
            <Card.Title>{gameName}</Card.Title>
            <Card.Text>{game.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Released: {game.year}</small>
          </Card.Footer>
        </Card>
      </Link>
    );
  }
}
export default GameCard;
