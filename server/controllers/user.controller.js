/* const me = (req, res) => {
  res.status(200).json({ data: req.user })
}
 */
/* const createUser = (userDetails) => {
  return User.create(userDetails)
} */

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
