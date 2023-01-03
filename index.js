//write function to write data to the HTML file.
const fs = require('fs')
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

const Employee = require('./lib/Employee.class');
const Manager = require('./lib/Manager.subclass');
const Engineer = require('./lib/Engineer.subclass');
const Intern = require('./lib/Intern.subclass');
const { run } = require('jest');

// empty array to recieve client entered data which will be pushed into generated HTML document through the writeHTML function.
const employees = []

//question array to ask what type of employee they'd like to add.
const employeeType = [
  {
    type: 'list',
    message: "What type of employee would you like to add?",
    name: "choice",
    choices: ["Manager", "Engineer", "Intern", "No thank you"],
  }
]

//question array to ask questions specific to the Manager employee type.
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
//question array to ask questions specific to the Engineer employee type.
const engineerQuestions = [
  {
    type: 'input',
    message: "What is the Engineer's name?",
    name: "name",
  },
  {
    type: 'input',
    message: "What is the Engineer's id number?",
    name: "id",
  },
  {
    type: 'input',
    message: "What is the Engineer's email?",
    name: "email"
  },
  {
    type: 'input',
    message: "What is the Engineer's github username?",
    name: "github"
  },
]
//question array to ask questions specific to the Intern employee type.
const internQuestions = [
  {
    type: 'input',
    message: "What is the Intern's name?",
    name: "name",
  },
  {
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
    message: "Where does the Intern attend school?",
    name: "school",
  },
]
// Interprets which type of employee the client would like to enter and sends them questions from that chosen array.
function chooseEmployee() {
  inquirer
  .prompt(employeeType)

  .then((data) => {
    if(data.choice === 'Manager') {
      addManager()
    }
    if(data.choice === 'Engineer') {
      addEngineer()
    }
    if(data.choice === 'Intern') {
      addIntern()
    }
    if(data.choice === 'No thank you'){
      noThankYou()
    }
  })
}
// Prompts user for questions in the managerQuestions array and sends the answers to the employees array.
function addManager() {
  inquirer
  .prompt(managerQuestions)

  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      employees.push(manager);
      chooseEmployee();
  })
}
// Prompts user for questions in the engineerQuestions array and sends the answers to the employees array.
function addEngineer() {
  inquirer
  .prompt(engineerQuestions)

  .then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
      console.log(engineer);
      employees.push(engineer);
      chooseEmployee();
  })
}
// Prompts user for questions in the InternQuestions array and sends the answers to the employees array.
function addIntern() {
  inquirer
  .prompt(internQuestions)

  .then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school)
    console.log(intern);
    employees.push(intern);
    chooseEmployee();
  })
}
// Sends client side data inputs to a written file caleed index.HTML
function noThankYou() {
  fs.writeFile("index.html", generateHTML(employees), (err) => err ? console.log(err) : console.log('HTML created!'))
}

chooseEmployee();