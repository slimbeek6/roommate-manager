const paymentController = require('../../controllers/paymentController');
const router = require('express').Router();

router.route("/")
    .post(paymentController.add);

//The expense route needs a put function to allow for updating payment status
router.route("/:id")
    .put(paymentController.edit)
    .get(paymentController.findAll)
    .delete(paymentController.delete);

module.exports = router;