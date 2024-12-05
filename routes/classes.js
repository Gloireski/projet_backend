var express = require('express');
var router = express.Router();

const ClassesController = require('../controller/ClassesController');
const validClassesFields = require('../utils/validClassesFields');


router.get('/', ClassesController.getAll);
router.get('/:id/details', ClassesController.getMe)
router.post('/', validClassesFields, ClassesController.postNew);
router.put('/:id', validClassesFields, ClassesController.edit);
router.delete('/:id', ClassesController.delete);

module.exports = router;