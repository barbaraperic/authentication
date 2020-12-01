import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from './Table'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import Button from './Button'

function createData(field, data) {
  return { field, data };
}



const ProfileTable = () => {

  const user = useSelector(state => state.auth.user)
  const history = useHistory()

  console.log(user)

  const classes = useStyles();

  const handleClick = () => {
    history.push('/dashboard/edit');
  }

  const rows = [
    createData('NAME', 'name' ),
    createData('EMAIL', user.email),
    createData('PASSWORD', 'pass'),
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={classes.header}>Profile</TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="right">
            <Button onClick={handleClick}>
              Edit
            </Button>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.field}
            </TableCell>
            <TableCell align="center">{row.data}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const useStyles = makeStyles({
  header: {
    fontSize: '24px'
  },
  field: {
    fontSize: '13px',
    color: '#BDBDBD',
    fontWeight: '500'
  }
});

export default ProfileTable