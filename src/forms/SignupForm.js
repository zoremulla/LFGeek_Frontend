// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import authStore from "../stores/authStore";
// import { observer } from "mobx-react";

// import "./LoginForm.css";

// class SignupForm extends Component {
//   state = {
//     username: "",
//     email: "",
//     password: ""
//   };

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     authStore.signup(this.state, this.props.history);
//   };
//   componentDidMount() {
//     if (authStore.user) {
//       this.props.history.push("/");
//     }
//   }
//   render() {
//     const { username, email, password } = this.state;

//     return (
//       <div className="col-6 mx-auto">
//         <div className="card my-5">
//           <div className="body">
//             <form onSubmit={this.handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   value={username}
//                   name="username"
//                   placeholder="Username"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   value={email}
//                   name="email"
//                   placeholder="Email"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   value={password}
//                   name="password"
//                   placeholder="Password"
//                   onChange={this.handleChange}
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 Sign up
//               </button>
//               <Link to="/login/" className="btn btn-link my-2 my-sm-0">
//                 I already have an account
//               </Link>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default observer(SignupForm);

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
