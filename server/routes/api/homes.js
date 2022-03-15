const homeController = require("../../controllers/homeController");
const router = require("express").Router();

router.route("/:id")
    .get(homeController.get)
    .delete(homeController.delete);

router.route("/")
    .post(homeController.post);

module.exports = router;