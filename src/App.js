import React, {Component} from 'react';
import {
    withRouter
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
            <div className='justify-content-center'>
            <Routes/>
            </div>
        );
    }
}

export default withRouter(App);

