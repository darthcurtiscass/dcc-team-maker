//write function to write data to the HTML file.
const fs = require('fs')
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

const employees = []
//Separate questions into separate arrays. One for engineer, one for manager, and so on...
//Add question array to ask what type of employee they'd like to add.

const managerQuestions = [
  {
    type: 'input',
    message: "What is the Manager's name?",
    name: "name",
  },
  {
    type: 'input',
    message: "What is the Manager's id?",
    name: "id",
  },
  {
    type: 'input',
    message: "What is the Manager's email?",
    name: "email",
  },
  {
    type: 'input',
    message: "What is the Manager's office number?",
    name: "officeNumber",
  },
]

const engineerQuestions = [
  {
    when: (answers) => answers.position === 'Engineer',
    type: 'input',
    message: "What is the Engineer's name?",
    name: "name",
  },
  {
    when: (answers) => answers.position === 'Engineer',
    type: 'input',
    message: "What is the Engineer's id number?",
    name: "id",
  },
  {
    when: (answers) => answers.position === 'Engineer',
    type: 'input',
    message: "What is the Engineer's email?",
    name: "email"
  },
  {
    when: (answers) => answers.position === 'Engineer',
    type: 'input',
    message: "What is the Engineer's gitHub username?",
    name: "gitHub"
  },
]

const internQuestions = [
  {
    when: (answers) => answers.position === 'Intern',
    type: 'input',
    message: "What is the Intern's name?",
    name: "name",
  },
  {
    when: (answers) => answers.position === 'Intern',
    type: 'input',
    message: "What is the Intern's id?",
    name: "id",
  },
  {
    type: 'input',
    message: "What is the Intern's email?",
    name: "email",
  },
  {
    type: 'input',
    message: "Where does the Intern's attend school?",
    name: "school",
  },
]


function writeHTML() {
    inquirer
        .prompt(questions)

        .then((data) => {
            fs.writeFile("index.HTML", generateHTML(data), (err) =>
      err ? console.log(err) : console.log('HTML created!'));
        })
        const Manager = new Manager(data.name, data.officeNumber)
}

function init() {
  inquirer
    .prompt(managerQuestions)

    .then((data)) => {
      //push answers from question array to employee array
      //create new Manager with answers from questions.
    }
}

writeHTML();

