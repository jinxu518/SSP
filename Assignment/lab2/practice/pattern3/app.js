// app.js 
const personObj = require('./pattern');
personObj.getName(); // Josh Edward
personObj.name = 'Emma Smith';
personObj.getName(); //Emma Smith
const cachedObj = require('./pattern');// cached in the same module