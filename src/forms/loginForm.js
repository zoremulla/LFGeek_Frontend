import React, { Component } from "react";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

// Styling
import "./LoginForm.css";
import { Container } from "semantic-ui-react";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    if (authStore.user) {
      this.props.history.push("/");
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    authStore.login(this.state, this.props.history);
  };

  render() {
    const { username, password } = this.state;
    return (
      <Container id="container">
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
                  LoginForm
                </button>
                <Link to="/signup/" className="btn btn-link my-2 my-sm-0">
                  Signup for an account
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(LoginForm);
