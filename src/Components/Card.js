import React from 'react'
import Input from './Input'
import { makeStyles } from '@material-ui/core/styles';
//import emailIcon from '../images/email.png'
import emailIcon from '../images/email-24px.svg'
import passwordIcon from '../images/password.png'

const useStyles = makeStyles(() => ({
  inputs: {
    margin: '16px',
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
    <div className={classes.inputs}>
      <Input placeholder="email">
        <img className={classes.icon} src={emailIcon} alt="email" />
      </Input>
      <Input placeholder="password">
        <img className={classes.icon} src={passwordIcon} alt="email"/>
      </Input>
    </div>
  )
}

export default Form