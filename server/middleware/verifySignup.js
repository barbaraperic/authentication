const User = require('../resources/user/user.model')

const checkDuplicateEmail = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    
    next();
  });
};


const verifySignUp = { checkDuplicateEmail };

module.exports = verifySignUp;