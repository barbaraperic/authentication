import React from 'react'
import axios from 'axios';
import Card from './Card'
import Form from './Form'
import CardHeader from './CardHeader'

class RegisterCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const email = event.target[0].value
    const password = event.target[1].value
    const user = { email, password }
    axios.post("/user", user )
      .then(res => console.log('RES', res.data))
    }

  render() {
    return (
      <Card>
        <CardHeader 
          header="Join thousands of learners around the world"
          paragraph="Master web development by making real-life projects"
        />
        <Form 
          handleSubmit={this.handleSubmit}
          buttonText="Start coding now"
          linkText="Login"
        />
      </Card>
    )
  }
}

const styles = {
  card: {
    border: '2px solid #BDBDBD',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px',
  }
}

export default RegisterCard