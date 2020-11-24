import React from 'react'
import MuiInput from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles'

const Input = (props) => {
  const { children, placeholder, label } = props 
  
  const classes = useStyles();

  return (
    <MuiInput
      className={classes.input}
      disableUnderline={true}
      label={label}
      placeholder={placeholder}
      startAdornment={
        <InputAdornment position="start">
          {children}
        </InputAdornment>
      }
    />
  )
}

const useStyles = makeStyles(() => ({
  input: {
    margin: '8px 0',
    paddingLeft: '4px',
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    "&::placeholder": {
      color: "gray",
      fontSize: '8px'
    },
  },
}));

export default Input