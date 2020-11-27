const User = require('../resources/user/user.model')
// const Role = db.role;
//var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const userObj = User.create({ 
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  })
  try {
    const user = await User.create(userObj)
    res.status(200).json(user)
  } catch(e) {
    res.status(500).send()
  }
}

/* exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } res.send({ message: "User was registered successfully!" })
  })
} */

/* app.post('/user', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.create({ email, password })
    res.status(200).json(user)
  } catch(e) {
    res.status(500).send()
  }
}) */