import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Table.js';
import PieceTypeSelecter from './PieceTypeSelecter';
import FormEditor from './FormEditor';

export default class WorkshopPieces extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPieceType: null,
            selectedPiece: null
        };
        this.onPieceTypeSelect = this.onPieceTypeSelect.bind(this);
    }

    onPieceTypeSelect(id) {
        this.setState({selectedPieceType: id})
    }

    render() {
        return (
            <div className='container'>
                <button type="button" className="btn btn-info float-right mb-4 mt-4">Cerrar Sesión</button>
                <PieceTypeSelecter onPieceChange={ this.onPieceTypeSelect }/>
                {this.state.selectedPieceType !== null && <Table pieceType={ this.state.selectedPieceType }/> }
                {this.state.selectedPieceType !== null && <FormEditor objectToEdit={ this.state.selectedPiece }/> }
            </div>
        )
    }
}