import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export default ({ row }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {row.id}
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.manufacturer}</TableCell>
            <TableCell>{row.type_id.type_id}</TableCell>
        </TableRow>
    );
}