// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Manager {
    constructor(name, id, email, officeNumber) {
        //super calls on functions from the parent object "employee"
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}
module.exports = Manager;

// What do i need for "manager"?
    //pull from "employee"
        //add to it
    //list office number
    // export manager