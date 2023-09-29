// Pattern3 - pattern3.js
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
module.exports = new Person('Josh Edward');

// // Pattern3 - cached.js
// const personObj2 = require('./pattern3');
// // cached
// console.log('---inside cached.js ---');
// personObj2.getName(); //Emma Smith
