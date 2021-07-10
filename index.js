const inquirer = require("inquirer");
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
            message: `What is the ${position}'s employee ID?`,
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
        nextPrompt();
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
    ]).then( ({position}) => {
        if (position === "No") {
            let html = generateHTML(globalTeam.getTeam());
            fs.writeFileSync('index.html', html);
            console.log(html)
        } else {
            addEmployee(position);
        }
    });
}

function generateHTML (teams) {
    console.log(teams)
    let elements = teams.map( ({name,id,info,email,position}) => {
        let infoType = '';
        switch(position) {
            case 'Manager':
                infoType = 'Office Number'
                break;
            case 'Engineer':
                infoType = 'GitHub';
                break;
            default:
                infoType = 'School';
                break;
        }
        return `
        <div class="col-md-3">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header"> ${position}: ${name}</div>
                <div class="card-body">
                <p class="card-text"> ID: ${id}</p>
                <p class="card-text"> Email: ${email}</p>
                <p class="card-text"> ${infoType}: ${info}</p>
                </div>
            </div>
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
        <header>
            <h1>Avengers Assemble</h1>
        </header>
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
