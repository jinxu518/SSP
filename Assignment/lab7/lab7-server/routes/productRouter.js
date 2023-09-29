const express = require('express');
const productController = require('../controllers/bookController');

const router = express.Router();


router.get('/', productController.fetchAll);
router.get('/:id', productController.fetchById);
router.post('/', productController.save);
router.put('/:id', productController.update);
router.delete('/:id', productController.deleteById);



module.exports = router;