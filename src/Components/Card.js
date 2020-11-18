import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'
import Button from './Button'
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
  inputs: {
    display: 'grid',
  },
  icon: {
    width: '16px',
    filter: 'opacity(0.2) drop-shadow(0 0 0 black)',
  }
}));


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
        <div className={classes.inputs}>
          <Input placeholder="email">
            <img className={classes.icon} src={emailIcon} alt="email" />
          </Input>
          <Input placeholder="password">
            <img className={classes.icon} src={passwordIcon} alt="email"/>
          </Input>
          <Button text="Start Coding Now"/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Form