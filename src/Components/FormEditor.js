import React from "react";
import * as PropTypes from "prop-types";

export default class FormEditor extends React.Component{
    static propTypes = {
        name: PropTypes.string,
        manufacturer: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            nombreValue: '',
            manufacturerValue: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.name !== this.props.name) {
            if(this.props.name === null) {
                this.setState({
                    nombreValue: ''
                })
            } else {
                this.setState({
                    nombreValue: this.props.name
                })
            }
        }
        if(prevProps.manufacturer !== this.props.manufacturer) {
            if(this.props.manufacturer === null) {
                this.setState({
                    manufacturerValue: ''
                })
            } else {
                this.setState({
                    manufacturerValue: this.props.manufacturer
                })
            }
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
                    <button type="button" className="btn btn-info" disabled={this.props.name === null}>
                        Borrar
                    </button>
                    <button type="button" className="btn btn-info" disabled={this.props.name === null}>
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