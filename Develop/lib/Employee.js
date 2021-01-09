// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}


module.exports = Employee

// What do we need to do?:
    //Build the employee class
        //How?
        //Use class and constructor
    //Then EXPORT the employee class

// since Employee is the basis for the questions, it will serve as the primary class, meaning that the rest of the js files (other than render) will be SUBCLASSES. That means they'll need to call on EMPLOYEE using "require (./employee)"