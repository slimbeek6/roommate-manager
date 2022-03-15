// const router = require("express").Router();
// const authController = require("../../controllers/authController");
// const { validateRegistration } = require("../../config/middleware");

// router.use(function(req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
// });

// router.route("/auth/signup")
//     .post(validateRegistration.validateNameEmail, authController.signup);

// router.route("/auth/signin")
//     .post(authController.signin);

// module.exports = router;