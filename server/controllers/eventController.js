const db = require("../models");

module.exports = {
    add: function(req, res) {
        db.Event.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Event.findAll({where: {HomeId: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Event.destroy({where: {id: req.params.id}})
        .then(deletedEvent => {deletedEvent ? res.send(true) : res.send(false);})
        .catch(err => res.status(422).json(err));
    }
};
