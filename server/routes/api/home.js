const homeController = require("../../controllers/homeController");
const router = require("express").Router();

router.route("/:id")
    .get(homeController.get);

module.exports = router;