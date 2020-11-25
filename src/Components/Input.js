import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles'

const Input = (props) => {
  const { 
    value, 
    placeholder, 
    label, 
    children, 
    handleChange } = props 
  
  const classes = useStyles();

  return (
/*   <TextField
    className={classes.input}
    disableUnderline={true}
    label={label}
    placeholder={placeholder}
    startAdornment={
      <InputAdornment position="start">
        {children}
      </InputAdornment>
    }
  /> */
    <TextField
      className={classes.input}
      id="outlined-name"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      variant="outlined"
      InputProps={{
      startAdornment: <InputAdornment position="start">{children}</InputAdornment>,
      }}
  />
  )
}

const useStyles = makeStyles(() => ({
  input: {
    margin: '8px 0',
    paddingLeft: '4px',
    borderRadius: '8px',
    "&::placeholder": {
      color: "gray",
      fontSize: '8px'
    },
  },
}));

export default Input