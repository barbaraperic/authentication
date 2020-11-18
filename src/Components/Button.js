import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#2F80ED',
    borderRadius: '8px',
    margin: '8px 0',
    '&:hover': {
      backgroundColor: '#2F77D6'
    }
  }
}))


const Button = (props) => {
  const { text } = props

  const classes = useStyles()
  
  return (
    <MuiButton
      className={classes.button}
      variant="contained"
      color="primary"
    >
      {text}
    </MuiButton>
  )
}

export default Button