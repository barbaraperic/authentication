import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
import emailIcon from '../images/email-24px.svg'
import passwordIcon from '../images/password.png'
import logo from '../images/devchallenges.svg'

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid #BDBDBD',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px',
  },
  header: {
    textAlign: 'left',
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
  icon: {
    width: '16px',
    filter: 'opacity(0.2) drop-shadow(0 0 0 black)',
  },
  login: {
    color: '#2F80ED',
    cursor: 'pointer'
  }
}));

const handleClick = (e) => {
  console.log(e)
  fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => console.log(res));
}


const Form = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.card}>
        <img src={logo} alt="logo" />
        <div className={classes.header}>
          <h3>Join thousands of learners around the world</h3>
          <p>Master real-life web development projects</p>
        </div>
        <div className={classes.formInputs}>
          <Input placeholder="email">
            <img className={classes.icon} src={emailIcon} alt="email" />
          </Input>
          <Input placeholder="password">
            <img className={classes.icon} src={passwordIcon} alt="email"/>
          </Input>
          <Button text="Start Coding Now" onClick={handleClick}/>
          <p>or continue with these social profile</p>
          <SocialLinks />
          <p>Already a member? <span className={classes.login}>Login</span></p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Form