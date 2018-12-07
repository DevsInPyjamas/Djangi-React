import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "react-router-dom/es/Link";
import {checkLogin} from "../PetitionMaker.js";

const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      userValue: "",
      passValue: ""
    };
  };

  userValueChanged = (e) => {
    this.setState({userValue: e.target.value})
  };

  passValueChanged = (e) => {
    this.setState({passValue: e.target.value})
  };

  async login() {
    const res = await checkLogin(this.state.userValue, this.state.passValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <button><Link to='/pieces'>DEBUG TASKS</Link></button>
        <Typography variant="headline">Sign in</Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="userName">User Name</InputLabel>
            <Input
              id="userName"
              name="userName"
              autoComplete="userName"
              autoFocus
              onChange={this.userValueChanged}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.passValueChanged}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="raised"
            color="secondary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    );
  }
}

export const Login = withStyles(styles)(LoginComponent);
