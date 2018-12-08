import { Route } from "react-router-dom";
import * as React from "react";
import Login from "./Containers/Login/login.container";
import Pieces from "./Components/WorkshopPieces";
import NoPermission from "./Components/NoPermission";

export default () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/pieces" component={Pieces} />
    <Route exact path="/no_permission" component={NoPermission}/>
  </div>
);
