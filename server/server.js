// Get the required packages to set up the server
const express = require("express");
const path = require("path");
const cors = require("cors");

// Import the models and routes
const db = require("./models");
const routes = require("./routes");

// Initiate the express server
const app = express();
const PORT = process.env.PORT || 3000;

// // Initiate the cors service
app.use('*', cors());

// Initiate the non-static asset middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Initiate the static asset middleware
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get(function(req,res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Initiate the routes
app.use(routes);

// Initiate Sequelize db
db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log("app listening on PORT " + PORT);
    });
});