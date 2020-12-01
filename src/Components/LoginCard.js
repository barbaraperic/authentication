import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl'
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
import logo from '../images/devchallenges.svg'


const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loggedIn, setLoggedIn ] = useState(false)
  const dispatch = useDispatch()

  //const isLoggedIn = useSelector((state) => state.auth)

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(login(email, password))
    .then(() => {
      setLoggedIn(true)
    })
    .catch(() => {
      setLoggedIn(false)
    })
  }

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <MuiCard className={classes.card}>  
      <img src={logo} alt="logo" />
      <form className={classes.formInputs} onSubmit={handleSubmit}>
        <FormControl>
          <Input 
            type="email"
            name="email" 
            label="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password" 
            label="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
            <p>or continue with these social profile</p>
          <SocialLinks />
          <p>Don't have an account yet?
            <span className={classes.link}> Register</span>
          </p>
        </FormControl>
      </form>
    </MuiCard>
  )
}

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid #BDBDBD',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px',
    minWidth: '300px'
  },
  formInputs: {
    display: 'grid',
    '& p': {
      fontSize: '10px',
      color: '#BDBDBD'
    }
  },
  link: {
    color: '#2F80ED',
    cursor: 'pointer'
  },
}));

export default Login