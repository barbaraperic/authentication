var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send({ message: 'hello'})
})

app.get('/hello', (req, res) => {
  console.log('res',res)
  res.send({ message: 'hello'})
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok'})
})

module.exports = app;