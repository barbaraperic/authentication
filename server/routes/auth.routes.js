const { verifySignUp } = require("../middleware/index");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateEmail,
    ],
    controller.signup
  );

  app.post("/signin", controller.signin);

  app.get("/hello", controller.updateUser)

  app.put("/profile/edit", controller.updateUser)

};
