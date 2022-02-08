//Import the user controller and initiate the router
const userController = require('../../controllers/userController');
const router = require('express').Router();

//Create the post route
router.route("/")
    .post(userController.add)

//Create the get and delete routes
router.route("/:id")
    .get(userController.findAll)
    .delete(userController.delete)

//Export the routes
module.exports = router;