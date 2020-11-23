import React from 'react'
import Form from './Form'
import CardHeader from './CardHeader'
import Card from './Card'

const Login = () => {
  return (
    <Card>
      <CardHeader />
      <Form 
        buttonText="Login"
        linkText="Register"
      />
    </Card>
  )
}

export default Login