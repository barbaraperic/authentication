import React from 'react'
import MuiInput from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

/* const styles = {
  input: {
    margin: '8px',
    padding: '4px',
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '250px',
  }
} */

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    margin: '8px',
    paddingLeft: '4px',
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '250px'
  },
}));

const Input = (props) => {
  const { children, placeholder } = props 
  const classes = useStyles();

  return (
    <MuiInput
      className={classes.input}
      id="input-with-icon-adornment"
      disableUnderline={true}
      placeholder={placeholder}
      startAdornment={
        <InputAdornment position="start">
          {children}
        </InputAdornment>
      }
    />
  )
}

export default Input