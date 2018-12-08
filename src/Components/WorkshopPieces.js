import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Table.js';
import PieceTypeSelecter from './PieceTypeSelecter';
import FormEditor from './FormEditor';
import {Redirect} from "react-router-dom";

import {insertPieza} from "../PetitionMaker";
import {updatePieza} from "../PetitionMaker";

import {getAllPiecesFromConcreteType, insertPieza} from "../PetitionMaker";


export default class WorkshopPieces extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPieceType: null,
            selectedPiece: null,
            pieceFromTypeList: null
        };
        this.onPieceTypeSelect = this.onPieceTypeSelect.bind(this);
        this.pieceSelected = this.pieceSelected.bind(this);
        this.deselect = this.deselect.bind(this);
        this.logOut = this.logOut.bind(this);
        this.addButtonClicked = this.addButtonClicked.bind(this);
        this.modifyButtonClicked = this.modifyButtonClicked.bind(this);
    }

    onPieceTypeSelect(id) {
        this.setState({selectedPieceType: id});
        this.loadPieces(id);
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

    async addButtonClicked(name, manufacturer) {
        try{
            const res = await insertPieza(name, manufacturer, this.state.selectedPieceType);
            this.setState({
                pieceFromTypeList: this.state.pieceFromTypeList.concat(res)
            })
        }catch (e) {
            window.alert("Fallo al introducir pieza.");
        }

    }

    async modifyButtonClicked(name, manufacturer) {
        try{
            const res = await updatePieza(name, manufacturer, this.state.selectedPiece.id);
        }catch(e){
            window.alert("Fallo al modificar pieza.");
        }
    }

    logOut(e) {
        e.preventDefault();
        sessionStorage.clear();
        this.forceUpdate();
    }

    render() {
        if(sessionStorage.getItem('logged_user') === null) {
            return (
                <Redirect to='/'/>
            )
        }
        return (
            <div className='container'>
                <button type="button" className="btn btn-info float-right mb-4 mt-4" onClick={ this.logOut }>Cerrar Sesión</button>
                <PieceTypeSelecter onPieceChange={ this.onPieceTypeSelect }/>
                {this.state.selectedPieceType !== null && <Table onPieceSelected = { this.pieceSelected }
                                                                 selectedPiece={ this.state.selectedPiece }
                                                                 itemsList={ this.state.pieceFromTypeList }/>}
                {this.state.selectedPieceType !== null && <FormEditor piece={ this.state.selectedPiece }
                onClear={ this.deselect } onInsert={ this.addButtonClicked } onDelete={ null } onUpdateClicked={ this.modifyButtonClicked() }/>}
            </div>
        )
    }
}
