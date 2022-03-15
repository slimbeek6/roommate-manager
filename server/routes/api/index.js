//Establish the router
const router = require('express').Router();

//Import the different routes
const homeRoutes = require('./homes');

//Use the routes to create the router
router.use('/homes', homeRoutes);

//Export the router
module.exports = router;