import React from 'react'
import axios from 'axios';

import Form from './Form'
import logo from '../images/devchallenges.svg'
class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value
    this.setState({ email: email, password: password }, () => {
      const user = { email, password }
      axios.post("/user", user )
      .then(res => console.log('RES', res))
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.card}>
          <img src={logo} alt="logo" />
          <div className={styles.header}>
            <h3>Join thousands of learners around the world</h3>
            <p>Master real-life web development projects</p>
          </div>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      </React.Fragment>
    )
  }
}

const styles = {
  card: {
    border: '2px solid #BDBDBD',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px',
  },
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

export default Card