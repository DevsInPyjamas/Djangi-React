import { Route } from 'react-router-dom'
import * as React from "react";
import Login from "./Pages/Login";
import Pieces from "./Pages/WorkshopPieces";

export default () => (
    <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/pieces" component={Pieces}/>
    </div>
);