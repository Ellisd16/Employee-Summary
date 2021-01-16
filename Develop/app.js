const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let team = [];



//Here starts our first set of questions
const employeeQuestions = () => {
    inquirer
        .prompt([{
            name: "name",
            type: "input",
            message: "Hi there! What is your name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your id?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "role",
            type: "list",
            message: "What is you position?",
            choices: ["Manager", "Engineer", "Intern"]
        }
        ])
        //Here we're diverging into the different categories, depending on what the user chose
        .then(answers => {
            console.log(answers.name, answers.id, answers.email, answers.role);
            // const employee = new Employee(answers.name, answers.id, answers.email, answers.role)

            const role = answers.role;
            const name = answers.name;
            const id = answers.id;
            const email = answers.email;
            switch (role) {
                case "Manager":
                    inquirer
                        .prompt({
                            name: "officeNumber",
                            type: "input",
                            message: "What is your office number?",
                        })
                        .then((answers) => {
                            const manager = new Manager(name, id, email, answers.officeNumber);
                            team.push(manager);
                            addEmployees();
                        })

                    break

                case "Engineer":
                    inquirer
                        .prompt({
                            name: "Github",
                            type: "input",
                            message: "What is your Github account?",
                        })
                        .then(() => {
                            const engineer = new Engineer(name, id, email, answers.Github);
                            team.push(engineer);
                            addEmployees();
                        });

                    break

                case "Intern":
                    inquirer
                        .prompt({
                            name: "school",
                            type: "input",
                            message: "What is the name of your school?"
                        })
                        .then(() => {
                            const intern = new Intern(name, id, email, answers.school);
                            team.push(intern);
                            addEmployees();
                        });
            }
        })
};
employeeQuestions();

function addEmployees() {
    inquirer
        .prompt({
            name: "addMore",
            type: "confirm",
            message: "Would you like to add another employee?",
        })
        .then((answers) => {
            if (answers === true) {
                employeeQuestions();
            } else {
                console.log("For sure! Getting that page ready for you!");
                console.log(team)
                renderHtml();
            }
        });
}








const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { restoreDefaultPrompts } = require("inquirer");
const Employee = require("./lib/Employee");

//call on render in here
const renderHtml = () => {
    render(team);
    fs.writeFile(outputPath, render(team), (err) => {
        if (err) throw err;
        else console.log("HTML is good to go! SHAKA BRAH!")
    })

};



//Ok so what do i need?

//Write code to use inquirer (use to get info on team & create objects for each member)

//Call the "RENDER" function to gather employee info



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
