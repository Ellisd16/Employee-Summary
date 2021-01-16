// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super calls on properties from the parent object "employee"
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
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