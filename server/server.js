const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser");
const connect = require('./utils/db')
const signup = require('./routes/auth.routes')
const dbConfig = require('./config/db.config')

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.get('/', (req, res) => {
  res.send({ message: 'hello'})
})

app.use('/signup', signup)

connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => app.listen(4000, () => {
    console.log('server on http://localhost:4000')
  }))
  .catch(e => console.error(e))


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

