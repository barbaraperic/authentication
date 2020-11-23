import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'
import emailIcon from '../images/email-24px.svg'
import passwordIcon from '../images/password.png'

const Form = (props) => {
  const { handleSubmit, buttonText, linkText } = props

  const classes = useStyles();

  return (
    <form 
      className={classes.formInputs}
      onSubmit={handleSubmit}
    >
      <Input placeholder="email">
        <img className={classes.icon} src={emailIcon} alt="email" />
      </Input>
      <Input placeholder="password">
        <img className={classes.icon} src={passwordIcon} alt="email"/>
      </Input>
      <Button text={buttonText} type="submit" />
        <p>or continue with these social profile</p>
      <SocialLinks />
      <p>Already a member?
        <span className={classes.login}> {linkText}</span>
      </p>
    </form>
  )
}

const useStyles = makeStyles(() => ({
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

export default Form