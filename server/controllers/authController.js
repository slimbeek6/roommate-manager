const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/authconfig");

const Home = db.Home;

exports.signup = (req, res) => {
    Home.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(home => {
        res.send({message: "Home registered successfully! Please login now" });
    })
    .catch(error => {
        res.status(500).send({ message: error.message});
    });
};

exports.signin = (req, res) => {
    Home.findOne({where: {username:req.body.username}})
    .then(home => {
        if(!home) {
            return res.status(400).send({message: "Home not found"});
        }

        const validatePass = bcrypt.compareSync(req.body.password, home.password);

        if(!validatePass) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign({id: home.id}, config.secret, {
            expiresIn: 86400
        });

        res.status(200).send({
            id: home.id,
            username: home.usernam,
            email: home.email,
            accessToken: token
        });
    })
    .catch(error => {
        res.status(500).send({ message: error.message});
    });
};