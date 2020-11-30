import React,  { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl' 
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
import logo from '../images/devchallenges.svg'

const InfoCard = () => {
  const dispatch = useDispatch()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { message } = useSelector(state => state.message);
  //const [ success, setSuccess ] = useState(false)

  console.log('message', message)

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[2].value
    dispatch(register(email, password))
      .then(res => console.log('this', res))
  }

  const classes = useStyles()

  return (
    <React.Fragment>
      <MuiCard className={classes.card}>
        <img src={logo} alt="logo" />
        <div className={classes.header}>
          <h3>Join thousands of learners around the world</h3>
          <p>Master web development by making real-life projects</p>
        </div>
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
            <p>Already a member?
              <span className={classes.login}> Login</span>
            </p>
          </FormControl>
        </form>
      </MuiCard>
      {message && 
        <div className={classes.success}>
          {message}
        </div>
      }
    </React.Fragment>
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
  header: {
    textAlign: 'center',
    '& h3': {
      fontSize: '16px',
    },
    '& p': {
      fontSize: '12px',
    }
  },
  formInputs: {
    display: 'grid',
    '& p': {
      fontSize: '10px',
      color: '#BDBDBD'
    }
  },
/*   icon: {
    width: '16px',
    filter: 'opacity(0.2) drop-shadow(0 0 0 black)',
  }, */
  login: {
    color: '#2F80ED',
    cursor: 'pointer'
  },
  success: {
    color: 'white',
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundColor: '#379634',
    padding: '11px',
    width: '40%',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
  }
}));

export default InfoCard

