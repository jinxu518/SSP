const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');


router.get('/:studentId', studentController.getByStudentId);
router.post('/', studentController.upsertStudent);
router.get('/:studentId/courses/:courseId', studentController.getByStudentIdAndCourseId);


module.exports = router; 