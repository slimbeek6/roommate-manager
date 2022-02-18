const router = require("express").Router();
const authController = require("../../controllers/authController");

router.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.route("/signup")
    .post(authController.signup);

router.route("/signin")
    .post(authController.signin);

module.exports = router;