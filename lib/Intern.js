// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
 class Intern extends Employee {
    constructor(name, id, school ){
    this.name = name;
    this.id = id;
    this.school = school;
    
}
getSchool(){
    return this.school
}
getRole(){
    return "Intern"
}
}

module.exports = Intern

// function Intern(name, id, email, school){

//     this.school = school;
// }

// module.exports = Intern