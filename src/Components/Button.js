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
    color: '#828282',
    backgroundColor: 'white',
    border: '1px solid #828282',
    boxShadow: 'none',
    borderRadius: '12px',
    margin: '8px 0',
    '&:hover': {
      backgroundColor: '#E8E8E8',
      boxShadow: 'none'
    }
  }
}))

export { PrimaryButton, TransparentButton }
