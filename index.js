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
        addedEmployee["position"] = position    // Added key of value into object
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
            generateHTML(globalTeam.getTeam());
        } else {
            addEmployee(position);
            nextPrompt ();    
        }
    });
}

function generateHTML (teams) {

    let elements = teams.forEach( ({name,id,info,email,position}) => {
        let infoType = '';
        switch(position) {
            case 'Manager':
                infoType = 'Office Number'
                break;
            case 'Engineer':
                infoType = '';
                break;
            default:
                infoType = '';
                break;
        }
        return `
        <div class="col-md-3">
            <h1> ${position}: ${name}</h1>
            <h2> ID: ${id}</h2>
            <h2> Email: ${email}</h2>
            <h2> ${infortype}: ${info}</h2>
        </div>`;
    });

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
            ${elements}
        </div>
      </div>
    </div>
    </body>
    </html>`;
}
  

addEmployee('Manager');
nextPrompt();