import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getAllTypePieces } from '../PetitionMaker';
import { LoaderComponent } from './Loader.js';
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

class SimpleTable extends React.Component {
    static proptypes = {classes: PropTypes.object.isRequired,};

    constructor(props) {
        super(props);
        this.state = { pieceTypesList: null };
    }

    async componentDidMount() {
        this.setState({ pieceTypesList : await getAllTypePieces() });
    }

    render() {
        const { classes } = this.props;
        if(this.state.pieceTypesList !== null) {
            return (
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>TipoPieza</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.pieceTypesList.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            );
        } else {
            return(<LoaderComponent/>);
        }
    }
}

export default withStyles(styles)(SimpleTable);