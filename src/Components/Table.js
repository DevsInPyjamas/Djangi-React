import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
        onPieceSelected: PropTypes.func.isRequired,
        selectedPiece: PropTypes.object,
        itemsList: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            pieceFromTypeList: null,
        }
    }

    handleClick = (event, piece) => {
        const { selectedPiece } = this.props;
        if(selectedPiece === piece) {
            this.setState({selectedPiece: null});
            this.props.onPieceSelected(null);
        } else {
            this.setState( {selectedPiece: piece});
            this.props.onPieceSelected(piece);
        }
    };

    render(){
        const {classes} = this.props;
        if(this.props.itemsList !== null) {
            if(this.props.itemsList.length === 0) {
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
                                {this.props.itemsList.map(row => {
                                    let styles = {};
                                    if(this.props.selectedPiece === row && this.props.selectedPiece !== null) {
                                        styles.backgroundColor = '#24A2B6';
                                        styles.color = '#FFF';
                                    }
                                    return (
                                        <TableRow key={row.id} row={row} onClick={ e =>
                                            this.handleClick(e, row)}
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