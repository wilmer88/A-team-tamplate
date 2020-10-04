const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employee = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function CreateEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the engeneer's email",
      },
      {
        type: "input",
        name: "office",
        message: "what is your engeneer's office number",
      },
    ])
    .then((answers) => {
      const createdEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      employee.push(createdEngineer);
      MoveFile();
    });
}
//function uses fs to writeiquiers respond   used to render the
function MoveFile() {
  fs.writeFile("index.html", render(employee), (err) => {
    if (err) throw err;
  });
  return;
}
CreateEngineer();

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
