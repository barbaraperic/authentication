import React from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
// import emailIcon from '../images/email-24px.svg'
// import passwordIcon from '../images/password.png'
import logo from '../images/devchallenges.svg'

const InfoCard = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value
    const user = { email, password }
    axios.post("/user", user )
      .then(res => console.log('RES', res.data))
  }

  const classes = useStyles()

  return (
    <MuiCard className={classes.card}>
      <img src={logo} alt="logo" />
      <div className={classes.header}>
        <h3>"Join thousands of learners around the world"</h3>
        <p>"Master web development by making real-life projects"</p>
      </div>
      <form 
        className={classes.formInputs}
        onSubmit={handleSubmit}
      >
        <Input name="email" label="email"/>
        <Input name="password" label="password"/>
        <Button type="submit">Submit</Button>
          <p>or continue with these social profile</p>
        <SocialLinks />
        <p>Already a member?
          <span className={classes.login}> Login</span>
        </p>
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

export default InfoCard