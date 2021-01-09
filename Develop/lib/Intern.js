// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Intern {
    constructor(name, id, email, school) {
        //super calls on functions from the parent object "employee"
        super(name, id, email);
        this.school = school;

    }
    getschool() {
        return this.github
    }
    getRole() {
        return "Intern"
    }
}
module.exports = Intern;

//for INTERN, i can plug in the same stuff from the other classes
// I just have to add "SCHOOL" 