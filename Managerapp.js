const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employee = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function CreateManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is your manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is your manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is your manager's email",
      },
      {
        type: "input",
        name: "office",
        message: "what is your manager's office number",
      },
    ])
    .then((answers) => {
      const management = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      employee.push(management)
    MoveFile()
    });
}
//function uses fs to writeiquiers respond   used to render the 
function MoveFile(){
    fs.appendFile("index.html", render(employee), (err) => {
        if (err) throw err;
      });
      return;

}
CreateManager();

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
