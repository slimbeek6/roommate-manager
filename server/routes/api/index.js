//Establish the router
const router = require('express').Router();

//Import the different routes
const userRoutes = require('./users');
const expenseRoutes = require('./expenses');
const eventRoutes = require('./events');
const choreRoutes = require('./chores');

//Use the routes to create the router
router.use('/users',  userRoutes);
router.use('/chores', choreRoutes);
router.use('/events', eventRoutes);
router.use('/expenses', expenseRoutes);

//Export the router
module.exports = router;