var express = require('express');
var router = express.Router();

const EnseignantsController = require('../controller/EnseignantsController');
const validEnsFields = require('../utils/validEnsFields');

router.get('/', EnseignantsController.getAll);
router.get('/:id', EnseignantsController.getMe);
router.post('/', validEnsFields, EnseignantsController.postNew);
router.put('/:id', validEnsFields, EnseignantsController.edit);
router.delete('/:id', EnseignantsController.delete);

module.exports = router;