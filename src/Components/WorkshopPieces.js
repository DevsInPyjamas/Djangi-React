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
        this.pieceSelected = this.pieceSelected.bind(this);
        this.deselect = this.deselect.bind(this);
    }

    onPieceTypeSelect(id) {
        this.setState({selectedPieceType: id})
    }

    pieceSelected(piece) {
        this.setState(
            {
                selectedPiece: piece
            }
        )
    }

    deselect() {
        this.pieceSelected(null);
    }

    render() {
        return (
            <div className='container'>
                <button type="button" className="btn btn-info float-right mb-4 mt-4">Cerrar Sesión</button>
                <PieceTypeSelecter onPieceChange={ this.onPieceTypeSelect }/>
                {this.state.selectedPieceType !== null && <Table pieceType={ this.state.selectedPieceType }
                                                                 onPieceSelected = { this.pieceSelected }
                                                                 selectedPiece={ this.state.selectedPiece }/> }
                {this.state.selectedPieceType !== null && <FormEditor piece={ this.state.selectedPiece }
                onClear={ this.deselect } onInsert={ null } onDelete={ null } onUpdate={ null }/>}
            </div>
        )
    }
}