import React, {Component} from 'react';
import {
    Route, Router,
    Switch
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Login from './Pages/Login';
import {IntlProvider} from 'react-intl';


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
            <IntlProvider locale="es">
                <Router><div>
                    <Grid style={{marginTop: '7em'}}>
                        <Route exact path='/Login' component={Login}/>
                    </Grid>
                </div></Router>
            </IntlProvider>
        )
    }
}

export default App;

