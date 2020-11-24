import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from './Table'
import Input from './Input'

const EditTable = () => {
  const classes = useStyles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={classes.header}>Change Info</TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
            <TableCell component="th" scope="row">
              <Input placeholder="name" label="name"/>
            </TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        
      </TableBody>
    </Table>
  )
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

export default EditTable
