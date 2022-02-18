const db = require("../models");

module.exports = {
    add: function(req, res) {
        db.Payment.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Payment.findAll({where: {HomeId: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    edit: function (req, res) {
        db.Payment.update({amount: req.body.amount, paidBy: req.body.paidBy}, { where: { id: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Payment.destroy({where: {id: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};