import React from 'react'
import MuiCard from '@material-ui/core/Card';

const Card = (props) => {
  const { children } = props
  return (
    <MuiCard style={styles.card}>
      { children }
    </MuiCard>
  )
}

const styles = {
  card: {
    border: '2px solid #BDBDBD',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px',
  }
}

export default Card