import React from "react";
import * as PropTypes from "prop-types";

export default class FormEditor extends React.Component{
    static propTypes = {
        piece: PropTypes.object,
        onClear: PropTypes.func.isRequired,
        onInsert: PropTypes.func.isRequired,
        onUpdateClicked: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            nombreValue: '',
            manufacturerValue: ''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.piece === null && prevProps.piece !== null) {
            this.setState({
                nombreValue: '',
                manufacturerValue: ''
            })
        }
        if(this.props.piece !== null) {
            if(prevProps.piece === null || prevProps.piece.name !== this.props.piece.name) {
                this.setState({
                    nombreValue: this.props.piece.name
                })
            }
            if(prevProps.piece === null || prevProps.piece.manufacturer !== this.props.piece.manufacturer) {
                this.setState({
                    manufacturerValue: this.props.piece.manufacturer
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
        this.setState({nombreValue: '', manufacturerValue: ''});
        this.props.onClear();
    };

    addClicked = () => {
        this.props.onInsert(this.state.nombreValue, this.state.manufacturerValue);
        this.setState({nombreValue: '', manufacturerValue: ''});
    };

    updateClicked = () => {
        this.props.onUpdateClicked(this.state.nombreValue, this.state.manufacturerValue);
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
                    <button type="button" className="btn btn-info" disabled={this.props.piece !== null}
                            onClick={this.addClicked}>Insertar</button>
                    <button type="button" className="btn btn-info" disabled={this.props.piece === null}>
                        Borrar
                    </button>
                    <button type="button" className="btn btn-info" disabled={this.props.piece === null}
                            onClick={this.updateClicked}>
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