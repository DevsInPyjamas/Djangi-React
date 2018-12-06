import React from "react";
import * as PropTypes from "prop-types";

export default class FormEditor extends React.Component{
    static propTypes = {
        objectToEdit: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            nombreValue: '',
            manufacturerValue: ''
        }
    }


    nombreValueChanged = (e) => {
        this.setState({nombreValue: e.target.value})
    };

    manufacturerValueChanged = (e) => {
        this.setState({manufacturerValue: e.target.value})
    };

    niggaPleaseCleanUpThatShit = () => {
        this.setState({nombreValue: '', manufacturerValue: ''})
    };


    render() {
        return(
            <>
                <div className="input-group mb-3 mt-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Nombre Pieza" aria-label="Nombre Pieza"
                           aria-describedby="basic-addon1" onChange={ this.nombreValueChanged }
                           value={ this.state.nombreValue }/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Fabricante</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Fabricante" aria-label="Fabricante"
                           aria-describedby="basic-addon1" onChange={ this.manufacturerValueChanged }
                           value={ this.state.manufacturerValue }/>
                </div>
                <div className="btn-group mb-5 mt-2" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-info">Insertar</button>
                    <button type="button" className="btn btn-info" disabled={this.props.objectToEdit === null}>
                        Borrar
                    </button>
                    <button type="button" className="btn btn-info" disabled={this.props.objectToEdit === null}>
                        Actualiza
                    </button>
                    <button type="button" className="btn btn-info" onClick={ this.niggaPleaseCleanUpThatShit }>
                        Limpiar
                    </button>
                </div>
            </>
        );
    }
}