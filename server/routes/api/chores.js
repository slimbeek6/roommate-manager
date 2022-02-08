//Import the chore controller and initiate the router
const choreController = require('../../controllers/choreController');
const router = require('express').Router();

//Create the post route
router.route("/")
    .post(choreController.add)

//Create the get and delete routes
router.route("/:id")
    .put(choreController.edit)
    .get(choreController.findAll)
    .delete(choreController.delete)

//Export the routes
module.exports = router;