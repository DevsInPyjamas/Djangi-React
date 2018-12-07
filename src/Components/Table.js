import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Nibba from './TableRow';
import {getAllPiecesFromConcreteType} from "../PetitionMaker";
import {LoaderComponent} from "./Loader";
/*
* code adapted from: https://material-ui.com/demos/tables/
* */
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class PieceTable extends React.Component {
    static
    propTypes = {
        classes: PropTypes.object.isRequired,
        pieceType: PropTypes.string.isRequired,
        onPieceSelected: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            pieceFromTypeList: null,
            selectedPieceId: null
        }
    }

    async loadPieces(){
        this.setState({
            pieceFromTypeList : await getAllPiecesFromConcreteType(this.props.pieceType)
        });
    }

    componentDidMount() {
        this.loadPieces();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.pieceType !== this.props.pieceType) {
            this.setState({pieceFromTypeList: null});
            this.loadPieces();
        }
    }

    handleClick = (event, id, name, manufacturer) => {
        const { selectedPieceId } = this.state;
        if(selectedPieceId === id) {
            this.setState({selectedPieceId: null});
            this.props.onPieceSelected(null, null);
        } else {
            this.setState( {selectedPieceId: id});
            this.props.onPieceSelected(name, manufacturer);
        }
    };

    render(){
        const {classes} = this.props;
        if(this.state.pieceFromTypeList !== null) {
            if(this.state.pieceFromTypeList.length === 0) {
                return(
                    <div className="alert alert-danger mt-4" role="alert">
                        No hay piezas de ese tipo.
                    </div>
                );
            } else {
                return (
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Manufacturer</TableCell>
                                    <TableCell>ID Tipo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.pieceFromTypeList.map(row => {
                                    let styles = {};
                                    if(this.state.selectedPieceId === row.id) {
                                        styles.backgroundColor = '#24A2B6';
                                        styles.color = '#FFF';
                                    }
                                    return (
                                        <TableRow key={row.id} row={row} onClick={ e =>
                                            this.handleClick(e, row.id, row.name, row.manufacturer)}
                                                   style={styles}>
                                            <TableCell component="th" scope="row" style={styles}>
                                                {row.id}
                                            </TableCell>
                                            <TableCell style={styles}>{row.name}</TableCell>
                                            <TableCell style={styles}>{row.manufacturer}</TableCell>
                                            <TableCell style={styles}>{row.type_id.type_id}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                );
            }
        } else {
            return(<LoaderComponent/>);
        }
    }
}
export default withStyles(styles)(PieceTable);