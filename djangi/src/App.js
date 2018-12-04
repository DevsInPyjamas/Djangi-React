import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.css';

const styles = theme=> ({
    textField:{
        marginLeft: theme.spacing.unit
    }
}
);

class App extends Component {
  render() {
    return (
        <form className={classes.container} noValidate autoComplete="off">

            <TextField
                id="outlined-email-input"
                label="UserName"
                className={styles}
                type="userName"
                name="userName"
                autoComplete="userName"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                className={styles}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />

            <Button variant="contained" color="primary" className={classes.button}>
                Join </Button>
        </form>

    );
  }
}

export default App;

