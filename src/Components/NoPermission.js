import React from "react";
import {Link} from "react-router-dom";

export default class NoPermission extends React.Component {
    render(){
        return(
            <div>
                No tienes permiso para acceder a esta vista
                <button>
                    <Link to="/" onClick={ NoPermission.clearSessionStorage }>Return</Link>
                </button>
            </div>
        )
    }

    static clearSessionStorage() {
        sessionStorage.clear();
    }
}