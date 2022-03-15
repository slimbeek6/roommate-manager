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

<<<<<<< HEAD
// router.route("/auth/signin")
//     .post(authController.signin);
=======
router.route("/login")
    .post(authController.login);
>>>>>>> d92b26fbb39719d975e5895020d7194ecb7df8d3

// module.exports = router;