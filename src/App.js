import React, {Component} from 'react';
import {
    Link, withRouter
} from 'react-router-dom'
import Routes from "./Routes";
import './App.css';

/*
const styles = theme=> ({
    textField:{
        marginLeft: theme.spacing.unit
    }
}
);*/

class App extends Component {
    render() {
        return (
            <div>
                <button>
                    <Link className="nav-link" to="/login">Login</Link>
                </button>
            <Routes/>
            </div>
        );
    }
}

export default withRouter(App);

