const db = require("../models");

module.exports = {
    add: function(req, res) {
        db.Expense.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Expense.findAll({ where: { homeId: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: (req, res) => {
        db.Expense.destroy({
          where: { id: req.params.id }
        }).then(deletedExpense => {
          deletedExpense ? res.send(true) : res.send(false);
        }).catch(err => res.status(422).json(err));
    }
};