import { Route } from 'react-router-dom'
import * as React from "react";
import Login from "./Pages/Login";


export default () => (
    <div>
        <Route exact path="/" component={Login}/>
    </div>
);