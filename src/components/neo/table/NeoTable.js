import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';
import NeoTableHead from './NeoTableHead';
import TablePaginationActions from './TablePaginationActions';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import { rowsArray } from './rowsCreator';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));


export const NeoTable = ({ data }) => {
  const rows = rowsArray(data);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const roundNum = num => {
      return Math.round(num);
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>

        <NeoTableHead />

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (       
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.closeApproachDate}</TableCell>
                  <TableCell align="right">{roundNum(row.distance)}</TableCell>
                  <TableCell align="right">{roundNum(row.diameterMin)}-{roundNum(row.diameterMax)}</TableCell>
                  <TableCell align="right">{roundNum(row.velocity)}</TableCell>
                  <TableCell align="right">{row.orbitingBody}</TableCell>
                  <TableCell align="right">
                    <IconButton target="_blank" href={row.url} color='secondary'>
                      <LinkIcon />
                    </IconButton>
                  </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}      
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>

        </Table>
      </div>
    </Paper>
  );
}
