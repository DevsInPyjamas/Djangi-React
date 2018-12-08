import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Table.js';
import PieceTypeSelecter from './PieceTypeSelecter';
import FormEditor from './FormEditor';
import {Redirect} from "react-router-dom";

import {insertPieza} from "../PetitionMaker";
import {updatePieza} from "../PetitionMaker";
import {getAllPiecesFromConcreteType} from "../PetitionMaker";
import {deletePieza} from "../PetitionMaker";


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
        this.deleteButtonClicked = this.deleteButtonClicked.bind(this);
    }

    onPieceTypeSelect(id) {
        this.setState({selectedPieceType: id});
        this.loadPieces(id);
    }

    async loadPieces(pieceType){
        this.setState({
            pieceFromTypeList : await getAllPiecesFromConcreteType(pieceType)
        });
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
            const pos = this.state.pieceFromTypeList.findIndex((piece) => piece.id === res.id);
            this.setState({
                pieceFromTypeList: [
                    ...this.state.pieceFromTypeList.slice(0, pos),
                    res,
                    ...this.state.pieceFromTypeList.slice(pos+1)
                ]
            })
        }catch(e){
            window.alert("Fallo al modificar pieza.");
        }
    }

    async deleteButtonClicked(){
        try{
            const pos = this.state.pieceFromTypeList.findIndex((piece) => piece.id === this.state.selectedPiece.id);
            const res = await deletePieza(this.state.selectedPiece.id);
            this.setState({
                pieceFromTypeList: [
                    ...this.state.pieceFromTypeList.slice(0, pos),
                    ...this.state.pieceFromTypeList.slice(pos+1)
                ]
            })
        }catch(e){
            window.alert("Fallo al borrar pieza");
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
                onClear={ this.deselect } onInsert={ this.addButtonClicked } onDelete={ this.deleteButtonClicked }
                                                                      onUpdateClicked={ this.modifyButtonClicked }/>}
            </div>
        )
    }
}
