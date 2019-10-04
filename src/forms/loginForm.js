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
      <Container className="container">
        <div className="card">
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Username</label>
                <input
                  className="input-group-prepend span"
                  type="text"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Password</label>
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

              <button type="submit" className="login_btn login_btn:hover">
                LoginForm
              </button>
              <Link to="/signup/" className="links">
                Signup for an account
              </Link>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default observer(LoginForm);
