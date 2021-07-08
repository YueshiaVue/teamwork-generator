const inquirer = require("inquirer");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the teamm manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the team manager's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "office"
        },
    ])
}


const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "username"
        },
    ])
}


const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school did the intern go to?",
            name: "school"
        },
    ])
}