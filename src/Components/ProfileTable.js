import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from './Table'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import Button from './Button'

const ProfileTable = () => {
  
  const classes = useStyles();
  
  const { user: currentUser } = useSelector(state => state.auth)

  console.log('>>', currentUser)
 
  //   if (!currentUser) {
  //   return <Redirect to="/" />
  // }
  

  const handleClick = () => {
    //history.push('/profile/edit');
  }

  //const field = ['email', 'password']

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
        <TableRow >
          <TableCell component="th" scope="row">
            Email
          </TableCell>
          <TableCell align="left">{currentUser.email}</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">
            ID
          </TableCell>
          <TableCell align="left" >{currentUser.id}</TableCell>
          <TableCell></TableCell>
        </TableRow>
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
  },
});

export default ProfileTable