const inquirer = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const Employee = require("./lib/employee");
const Team = require("./lib/team");
const fs = require("fs");

let globalTeam = new Team("Avengers");

const addEmployee = (position) => {
    let message = ''
    switch(position) {
        case 'Manager':
            message = "What is the team manager's office number?";
            break;
        case 'Engineer':
            message = "What is the engineer's GitHub username?";
            break;
        case 'Intern':
            message = "What school did the intern go to?";
            break;
        default:
            message = '';
            break;
      }
    inquirer.prompt([
        {
            type: "input",
            message: `What is the ${position}'s name?`,
            name: "name"
        },
        {
            type: "input",
            message: `What is the ${postion}'s employee ID?`,
            name: "id"
        },
        {
            type: "input",
            message: `What is the ${position}'s email address?`,
            name: "email"
        },
        {
            type: "input",
            message: message,
            name: "info"
        },
    ]).then( (addedEmployee) => {
        globalTeam.addToTeam(addedEmployee);
    });
}

function nextPrompt (){
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add an engineer or intern to your team?",
            choices: [ "Engineer", "Intern", "No" ],
            name: "position"
        },
    ]).then( (position) => {
        if (position === "No") {
            // build HTML here later

            
        } else {
            addEmployee(position);
            nextPrompt ();    
        }
    });
}

addEmployee('Manager');
nextPrompt();