import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const PrimaryButton = (props) => {
  const { text, onClick, type } = props

  const classes = useStyles()
  
  return (
    <MuiButton
      className={classes.primaryButton}
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
    >
      {text}
    </MuiButton>
  )
}

const TransparentButton = (props) => {
  const { text, onClick, type } = props

  const classes = useStyles()
  
  return (
    <MuiButton
      className={classes.transparentButton}
      variant="contained"
      color="primary"
      onClick={onClick}
      type={type}
    >
      {text}
    </MuiButton>
  )
}

const useStyles = makeStyles(() => ({
  primaryButton: {
    backgroundColor: '#2F80ED',
    borderRadius: '8px',
    margin: '8px 0',
    '&:hover': {
      backgroundColor: '#2F77D6'
    }
  },
  transparentButton: {
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid whitesmoke',
    boxShadow: 'none',
    borderRadius: '8px',
    margin: '8px 0',
    '&:hover': {
      backgroundColor: 'grey'
    }
  }
}))

export { PrimaryButton, TransparentButton }
