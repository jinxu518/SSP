let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    }

    save(){
        const flag = db.find(user=>user.id===this.id);
        if(flag){
            console.log('exist user,please check')
        }else{
            db.push(this)
        }
    }

    edit(){
        const index = db.findIndex(user=>user.id===this.id);
        if(index>-1){
            db[index] = this;
        }else{
            console.log("this one is not exist,please check")
        }
    }

    static getById(id){
        return db.find(user=>user.id===id);
    }

    static getAll(){
        return db;
    }

    static deleteById(id){
        const index = db.findIndex(user => user.id === id);
        return db.splice(index, 1);
    }
}

new Student(4, 'Tina', 'Xing').save(); //save to db
// console.log(db);
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
// console.log(db);
Student.deleteById(4); //remove studentId=4 from db
// console.log(db);
Student.getAll(); //return db;
// console.log(db);
const stu1 = Student.getById(1); //return {id:1, fname: 'John', lname: 'Smith'}
// console.log(stu1);