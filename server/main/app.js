//var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser");
//const config = require('../config')
//const signup = require('../utils/auth')
const connect = require('../utils/db')
const signup = require('../routes/auth.routes')
//const User = require('../resources/user/user.model')

//const userRouter = require('../resources/user/user.router')

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mount router
// app.post('/api/signup', signup)
// app.use('/api/user', userRouter)

app.use('/signup', signup)

/* app.get('/', (req, res) => {
  res.send({ message: 'hello'})
}) */

/* app.get('/user/:id', async (req, res) => {
  res.send('hello')
}) */

/* app.get('/signup', async (req, res) => {
  try {
    res.status(200).json(await User.find({}).lean().exec())
  } catch(e) {
    console.error('ERROR',e)
    res.status(500).send()
  }
}) */

/* app.post('/user', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.create({ email, password })
    res.status(200).json(user)
  } catch(e) {
    res.status(500).send()
  }
}) */

connect('mongodb://localhost:27017/authentication')
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))