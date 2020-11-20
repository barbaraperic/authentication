//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('../config')
const signup = require('../utils/auth')
const connect = require('../utils/db')

var userRouter = require('../resources/user/user.router')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//mount router
app.post('/api/signup', signup)
app.use('/api/user', userRouter)

/*  connect('mongodb://localhost:27017/intro-to-mongodb')
  .then(() => app.listen(9000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e)) */

const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}


module.exports = start;