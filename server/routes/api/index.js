//Establish the router
const router = require('express').Router();

//Import the different routes
const userRoutes = require('./users');
const expenseRoutes = require('./expenses');
const eventRoutes = require('./events');
const choreRoutes = require('./chores');
const homeRoutes = require('./home');
const authRoutes = require('./auth');

//Use the routes to create the router
router.use('/users',  userRoutes);
router.use('/chores', choreRoutes);
router.use('/events', eventRoutes);
router.use('/expenses', expenseRoutes);
router.use('/homes', homeRoutes);
router.use('/auth', authRoutes);

//Export the router
module.exports = router;