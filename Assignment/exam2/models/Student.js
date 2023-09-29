const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: String,
  coursename: String,
  semester: String,
  grade: Number,
});

const studentSchema = new mongoose.Schema({
  studentId: { type: String, unique: true },
  firstname: String,
  lastname: String,
  courses: [courseSchema],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;