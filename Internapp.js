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
function CreateIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is your Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is your Interns's id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is your interns's email",
      },
      {
        type: "input",
        name: "school",
        message: "what is your Intern's School Name",
      },
    ])
    .then((answers) => {
      const newGuy = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      employee.push(newGuy);
      MoveFile();
    });
}
//function uses fs to writeiquiers respond   used to render the
function MoveFile() {
  
  fs.appendFile("index.html", render(employee), (err) => {
    if (err) throw err;
  });
  return;
}
CreateIntern();
