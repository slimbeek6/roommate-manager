//Import the event controller and initiate the router
const eventController = require('../../controllers/eventController');
const router = require('express').Router();

//Create the post route
router.route("/")
    .post(eventController.create)

//Create the get and delete routes
router.route("/:id")
    .get(eventController.findAll)
    .delete(eventController.delete)

//Export the routes
module.exports = router;