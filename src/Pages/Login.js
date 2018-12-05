import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Home extends Component {
    render() {
        return (
            <Grid className='container'>
                <Grid columns={12} padded centered >

                    <form noValidate autoComplete="off">

                        <div><TextField
                            id="outlined-email-input"
                            label="UserName"
                            type="userName"
                            name="userName"
                            autoComplete="userName"
                            margin="normal"
                            variant="outlined"
                        /></div>
                        <div>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        /></div>

                        <div>
                        <Button variant="contained" color="primary">
                            Join </Button></div>
                    </form>


                </Grid>
            </Grid>
        )
    }
}
