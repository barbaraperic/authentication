const config = require('../config/dev')
const User = require('../resources/user/user.model')
const jwt = require('jsonwebtoken')

const newToken = (user) => {
  return jwt.sign({ id: user.id }), config.secret.jwt, {
    expiresIn: config.secrets.jwt
  }
}

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

  const signup = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: 'need email and password' })
    }
  
    try {
      const user = await User.create(req.body)
      const token = newToken(user)
      return res.status(201).send({ token })
    } catch (e) {
      return res.status(500).end()
    }
  }
  
/*   const signin = async (req, res) => {
    
  }
  
  const protect = async (req, res, next) => {
    
  } */

  module.exports = [newToken, verifyToken, signup]