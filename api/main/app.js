//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const config = require('../config')
//const signup = require('../utils/auth')
const connect = require('../utils/db')
const User = require('../resources/user/user.model')

//var userRouter = require('../resources/user/user.router')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mount router
// app.post('/api/signup', signup)
// app.use('/api/user', userRouter)

app.get('/', (req, res) => {
  res.send({ message: 'hello'})
})

/* app.get('/user/:id', async (req, res) => {
  res.send('hello')
}) */

app.get('/users', async (req, res) => {
  try {
    res.status(200).json(await User.find({}).lean().exec())
  } catch(e) {
    console.error('ERROR',e)
    res.status(500).send()
  }
})

app.post('/user', async (req, res) => {
  console.log('>>>>',req.body)
  const { email, password } = req.body
  try {
    const user = await User.create({ email, password })
    console.log('USERRRR',user)
    res.status(200).json(user.JSON())
  } catch(e) {
    console.error('error ',e)
    res.status(500).send()
  }
})

connect('mongodb://localhost:27017/authentication')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))