const User = require('./user.model')

/* const me = (req, res) => {
  res.status(200).json({ data: req.user })
}
 */
const createUser = (userDetails) => {
  return User.create(userDetails)
}

module.exports = createUser