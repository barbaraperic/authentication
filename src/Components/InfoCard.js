import React,  { useState } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/auth'
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl' 
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
import logo from '../images/devchallenges.svg'

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const InfoCard = (props) => {
  const { dispatch, state } = props

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  console.log('STATE',state)

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[2].value
    console.log('details',email, password)
    dispatch(register(email, password))
  }

  const classes = useStyles()

  return (
    <MuiCard className={classes.card}>
      <img src={logo} alt="logo" />
      <div className={classes.header}>
        <h3>"Join thousands of learners around the world"</h3>
        <p>"Master web development by making real-life projects"</p>
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
}));

export default connect(mapStateToProps)(InfoCard)

