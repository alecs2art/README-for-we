// TODO: Include packages needed for this application

const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?'
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {       
        type: 'list',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'  
    },
    {
        type: 'list',
        name: 'tests',
        message: 'What command should be run to run tests?'    
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'    
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
