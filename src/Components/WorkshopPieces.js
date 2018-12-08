import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Table.js';
import PieceTypeSelecter from './PieceTypeSelecter';
import FormEditor from './FormEditor';
import {Redirect} from "react-router-dom";
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
            window.alert("Fallo al introducir pieza.")
        }

    }

    async loadPieces(pieceType){
        this.setState({
            pieceFromTypeList : await getAllPiecesFromConcreteType(pieceType)
        });
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
                onClear={ this.deselect } onInsert={ this.addButtonClicked } onDelete={ null } onUpdate={ null }/>}
            </div>
        )
    }
}