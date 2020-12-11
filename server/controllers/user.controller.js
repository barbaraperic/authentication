const User = require('../models/user.model')

exports.getUser = (req, res) => {
  User.findOne({
    email: req.body.email
  })
  .exec((err, user) => {
    res.json(user)
  })
}

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
