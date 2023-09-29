const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: String,
  coursename: String,
  semester: String,
  grade: Number,
});

const Course = mongoose.model('Course', courseSchema);


module.exports = Course;