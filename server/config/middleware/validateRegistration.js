const db = require("../../models");
const Home = db.Home;

validateNameEmail = (req, res, next) => {
    Home.findOne({where: {username: req.body.username}})
    .then(home => {
        if (home) {
            res.status(400).send({message: "Username already in use, please try another"});
            return;
        }
        
        Home.findOne({where: {email: req.body.email}})
        .then(home => {
            if(home) {
                res.status(400).send({message: "Email already in use, please use login page"});
                return;
            }

            next();
        });
    });
};

const validateRegistration = { validateNameEmail: validateNameEmail};

module.exports = validateRegistration;