const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
const adminSchema = new mongoose.Schema({
    username: String,
    password: String
  });
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    module: Array,
    curriculum: String,
    project: String,
    guidance: String,
    Tools: String,
    career: String
  });

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);
  
  module.exports = {
    User,
    Admin,
    Course
  }