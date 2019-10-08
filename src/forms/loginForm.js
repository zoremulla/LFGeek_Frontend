import React, { Component } from "react";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    authStore.login(this.state, this.props.history);
  };
  componentDidMount() {
    if (authStore.user) {
      this.props.history.push("/gamelist");
    }
  }
  render() {
    const { username, password } = this.state;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to="/register" className="btn btn-link my-2 my-sm-0">
                Don't have an account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Signup);
