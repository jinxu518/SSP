const Student = require('../models/Student');

exports.fetchAll = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

exports.fetchById = async (req, res, next) => {
  try {
    const student = await Student.findOne({ studentId: req.params.studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error });
  }
};

exports.save = async (req, res, next) => {
  try {
    const studentData = req.body;
    const savedStudent = await new Student(studentData).save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error saving student', error });
  }
};

exports.fetchCourseById = async (req, res, next) => {
  try {
    const student = await Student.findOne({ studentId: req.params.studentId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const course = student.courses.find(
      (course) => course.courseId === req.params.courseId
    );
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

exports.update = async (req, res, next) => {
  try {
    const studentData = req.body;
    const student = await Student.findOneAndUpdate(
      { studentId: req.params.studentId },
      studentData,
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      studentId: req.params.studentId,
    });
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};
