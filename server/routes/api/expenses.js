const expenseController = require('../../controllers/expenseController');
const router = require('express').Router();

router.route("/")
    .post(expenseController.add);

//The expense route needs a put function to allow for updating payment status
router.route("/:id")
    .put(expenseController.edit)
    .get(expenseController.findAll)
    .delete(expenseController.delete);

module.exports = router;