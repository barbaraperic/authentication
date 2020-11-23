import React from 'react'
import logo from '../images/devchallenges.svg'

const CardHeader = (props) => {
  const { header, paragraph } = props
  return (
    <React.Fragment>
      <img 
        src={logo} 
        alt="logo" 
      />
      <div style={styles.header}>
        <h3>{header}</h3>
        <p>{paragraph}</p>
      </div>
    </React.Fragment>
  )
}

const styles = {
  header: {
    textAlign: 'left',
    '& h3': {
      fontSize: '16px',
    },
    '& p': {
      fontSize: '12px',
    }
  }
}

//PropTypes and default props

export default CardHeader

