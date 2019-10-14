import React, { Component } from "react";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import countries from "./countries";

class Signup extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: null,
    age: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.country) {
      return;
    }
    console.log(this.state.country);
    authStore.signup(this.state, this.props.history);
  };
  componentDidMount() {
    if (authStore.user) {
      this.props.history.push("/");
    }
  }

  selectCountry = event => {
    this.setState({ country: event.target.value });
  };
  render() {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      age
    } = this.state;
    let countriesOptions = countries.map(country => (
      <option value={country[0]}>{country[1]}</option>
    ));
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
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={first_name}
                  name="first_name"
                  placeholder="First Name"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={last_name}
                  name="last_name"
                  placeholder="Last Name"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  placeholder="Email"
                  required
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
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select onClick={this.selectCountry}>
                  <option value={"--------"}>----------</option>
                  {countriesOptions}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  value={age}
                  name="age"
                  placeholder="Age"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Signup
              </button>
              <Link to="/login" className="btn btn-link my-2 my-sm-0">
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Signup);
