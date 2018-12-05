import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Table.js';
import PieceTypeSelecter from './PieceTypeSelecter';

export default class WorkshopPieces extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombreValue : '',
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
        return (
            <div className='container'>
                <PieceTypeSelecter/>
                <Table/>
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
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-info">Insertar</button>
                    <button type="button" className="btn btn-info">Borrar</button>
                    <button type="button" className="btn btn-info">Actualiza</button>
                    <button type="button" className="btn btn-info" onClick={ this.niggaPleaseCleanUpThatShit }>
                        Limpiar
                    </button>
                </div>
                <button type="button" className="btn btn-info float-right">Cerrar Sesión</button>
            </div>
        )
    }
}