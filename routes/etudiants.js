var express = require('express');
var router = express.Router();

const EtudiantsController = require('../controller/EtudiantsController');
const validFields = require('../utils/validFields');

router.get('/', EtudiantsController.getAll);
router.get('/:id', EtudiantsController.getMe);
router.post('/', validFields, EtudiantsController.postNew);
router.put('/:id', validFields, EtudiantsController.edit);
router.delete('/:id', EtudiantsController.deleteEtud);

module.exports = router;