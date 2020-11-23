import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from './Button'

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

function createData(field, data) {
  return { field, data };
}

const rows = [
  createData('PHOTO', 'photo'),
  createData('NAME', 'name' ),
  createData('BIO', 'bio'),
  createData('PHONE', 'phone'),
  createData('EMAIL', 'email'),
  createData('PASSWORD', 'pass'),
];

const BasicTable = () => {
  const classes = useStyles();

  return (
    <TableContainer style={{ width: '100%' }}>
      <Table 
        className={classes.table} 
        aria-label="simple table"
        style={{ width: 600, margin: 'auto' }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Profile</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="right">
              <Button text="Edit"/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.field}>
              <TableCell component="th" scope="row">
                {row.field}
              </TableCell>
              <TableCell align="center">{row.data}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable