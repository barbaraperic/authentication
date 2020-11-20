// const User = require('./user.model')
//const mongoose = require('mongoose')
//const connect = require('../../utils/db')


const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

module.exports = me