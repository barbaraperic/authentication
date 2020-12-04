import React, { useState } from 'react'
import history from "../history";

import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from './Table'
import Input from './Input'
import Button from './Button'
import arrowIcon from '../images/arrow_back.svg'

const EditTable = () => {
  
  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  
  const classes = useStyles();

  const handleClick = () => {
    history.push('/profile')
    window.location.reload()
  }

  return (
    <React.Fragment>
      <div className={classes.arrow}>
        <img src={arrowIcon} alt="previous"/>
        <a href="/profile" onClick={handleClick}>Back</a>
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
          <TableRow>
            <TableCell>
              <Input
                name="name"
                value={name}
                label="name"
                onChange={(e) => setName(e.target.value)}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Input
                name="email"
                value={email}
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Input
                name="password"
                value={password}
                label="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
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