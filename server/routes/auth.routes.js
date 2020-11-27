//const { verifySignUp } = require("../middleware/index");
const User = require('../resources/user/user.model')
const express = require('express')
const router = express.Router()
var bcrypt = require("bcryptjs");

router.post('/', async (req, res) => {
  const user = await User.create({ 
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  })
  console.log('>>>>', user)
  try {
    res.status(200).json(user)
  } catch(e) {
    console.log('ERROR',e)
    res.status(500).send()
  }
})

module.exports = router

//router.get('/about', function (req, res) {


/* module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  })

  app.post(
    "/",
    [
      verifySignUp.checkDuplicateEmail
    ],
    controller.signup
  );

}; */
