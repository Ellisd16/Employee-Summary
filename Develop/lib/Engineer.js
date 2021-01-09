// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const employee = require("./Employee");

class Engineer {
    constructor(name, id, email, github) {
        //super calls on functions from the parent object "employee"
        super(name, id, email);
        this.github = github;

    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer;

//I can plug in the same class stuff i that i used in Manager to save myself some time

// The main thing for enginer is to add the "Github link"