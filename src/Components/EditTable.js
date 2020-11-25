import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from './Table'
import Input from './Input'
import { PrimaryButton } from './Button'

function createData(name, data) {
  return { name, data };
}

const rows = [
  createData('photo', 'photo'),
  createData('name', 'name' ),
  createData('bio', 'bio'),
  createData('phone', 'phone'),
  createData('email', 'email'),
  createData('password', 'pass'),
];

const EditTable = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>Change Info</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell>
                <Input label={row.name} placeholder={`Enter your ${row.name}`} />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PrimaryButton type="submit" text="Save" />
    </React.Fragment>
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
