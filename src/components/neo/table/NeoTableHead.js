import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const NeoTableHead = () => {
    return ( 
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Close approach date</TableCell>
                <TableCell align="right">Miss distance (km)</TableCell>
                <TableCell align="right">Diameter (m)</TableCell>
                <TableCell align="right">Velocity (km/h)</TableCell>
                <TableCell align="right">Orbiting body</TableCell>
                <TableCell align="right">More info</TableCell>
            </TableRow>
        </TableHead>
     );
}
 
export default NeoTableHead;