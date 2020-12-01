import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from './Table'
import Input from './Input'
import Button from './Button'
import arrowIcon from '../images/arrow_back.svg'

function createField(fieldName) {
  return { fieldName };
}

const rows = [
  createField('name'),
  createField('email'),
  createField('password'),
]

const EditTable = () => {
  
  const [ user, setUser ] = useState({})

  const classes = useStyles();

  const handleChange = (e) => {
    const name = e.target.name
    setUser((prevState) => ({ 
      ...prevState,
      [name]: e.target.value}
    )
  )}

  console.log('USER',user)

  return (
    <React.Fragment>
      <div className={classes.arrow}>
        <img src={arrowIcon} alt="previous"/>
        <h3>Back</h3>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>Change Info</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>CHANGE PHOTO</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {rows && rows.map(row => (
            <TableRow>
              <TableCell>
                <Input 
                  name={row.fieldName}
                  value={user.name}
                  label={row.fieldName}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className={classes.button}>Save</Button>
    </React.Fragment>
  )
}

const useStyles = makeStyles({
  arrow: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center'
  },
  button: {
    margin: '16px',
    backgroundColor: '#023e8a',
    color: 'white',
    '&:hover': {
      backgroundColor: '#03045e'
    }
  },
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


{/* <TableRow>
              <TableCell>
                <Input
                  name={name} 
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            <Input
                  name={email} 
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            <Input
                  name={password} 
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow> */}