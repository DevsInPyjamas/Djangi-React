import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div className='justify-content-center container-fluid container'>
                <button>
                    <Link to='/pieces'>
                        Boton temporal para hacer debug menor que 3
                    </Link>
                </button>
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
            </div>
        )
    }
}
