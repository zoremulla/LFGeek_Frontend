import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import guildStore from "../stores/guildStore";

// Raw Data
import games from "./games";

class CreateGuildForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "WoW" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    name: "",
    games: [],
    platform: [],
    tag: "",
    description: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    guildStore.postForm(this.state, this.props.history);
  };
  // componentDidMount() {
  //   if (guildStore.user) {
  //     this.props.history.push("/guild/");
  //   }
  // }
  render() {
    const { name, platform, tag, description } = this.state;
    if (guildStore.guild) return <Redirect to="/guild" />;

    let gamesOptions = games.map(games => (
      <option value={games[0]}>{games[1]}</option>
    ));
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  name="name"
                  placeholder="name"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="games">Games</label>
                  <select onClick={this.selectGames}>
                    <option value={"--------"}>----------</option>
                    {gamesOptions}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="platform">Platform</label>
                <input
                  type="platform"
                  className="form-control"
                  id="platform"
                  value={platform}
                  name="platform"
                  placeholder="platform"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tag">Tag</label>
                <input
                  type="tag"
                  className="form-control"
                  id="tag"
                  value={tag}
                  name="tag"
                  placeholder="tag"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="description"
                  className="form-control"
                  id="description"
                  value={description}
                  name="description"
                  placeholder="description"
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(CreateGuildForm);
