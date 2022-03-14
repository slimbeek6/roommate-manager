const db = require('../models');

module.exports = {
    get: function(req,res) {
        db.Home.findAll({where: { id: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    post: function(req,res) {
        db.Home.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function(req,res) {
        db.Home.destroy({where: {id: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}