// app.js 
const Person = require('./pattern');
const personObj1 = new Person();
personObj1.getName() // Josh Edward
personObj1.name = 'Emma Smith';
personObj1.getName(); //Emma Smith
const Person2 = require('./pattern');
const personObj2 = new Person2();
personObj2.getName(); // Josh Edward