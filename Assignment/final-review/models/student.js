const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentId: {
        type: String,
        unique: true
    },
    firstname: String,
    lastname: String, 
    courses: [{
        courseId: String,
        coursename: String,
        semester: String,
        grade: Number
    }]
});

module.exports = mongoose.model('Student', studentSchema);