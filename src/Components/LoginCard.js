import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import history from "../history";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl'
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
import logo from '../images/devchallenges.svg'


const Login = (props) => {
  // const { history } = props

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => state.auth)

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    dispatch(login(email, password))
    .then(() => {
      history.push("/profile");
      window.location.reload()
      console.log('then',isLoggedIn)
      setLoading(false)
    })
    .catch(() => {
      setLoading(false)
    })
  }

  console.log('history', history)
  console.log('state', isLoggedIn)

  // how to protect entering the dashoboard for loggedin users?

  //console.log('LL',loggedIn)

  //   if (isLoggedIn) {
  //     return <Redirect to="/profile" />;
  //  }

  return (
    <MuiCard className={classes.card}>  
      <img src={logo} alt="logo" />
      <form className={classes.formInputs} onSubmit={handleSubmit}>
        <FormControl>
          <Input
            id="email"
            type="email"
            name="email" 
            label="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            id="password"
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
            <a 
              href="/"
              className={classes.link}
            > 
              Register
            </a>
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