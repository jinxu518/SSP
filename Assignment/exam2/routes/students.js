const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/StudentController');

router.get('/', studentsController.fetchAll);
router.get('/:studentId', studentsController.fetchById);
router.post('/', studentsController.save);
router.get('/:studentId/courses/:courseId', studentsController.fetchCourseById);
router.put('/:studentId', studentsController.update);
router.delete('/:studentId', studentsController.deleteById);

module.exports = router;