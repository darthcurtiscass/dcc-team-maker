//write function to write data to the HTML file.
const fs = require('fs')
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

const Employee = require('./lib/Employee.class');
const Manager = require('./lib/Manager.subclass');
const Engineer = require('./lib/Engineer.subclass');
const Intern = require('./lib/Intern.subclass');
const { run } = require('jest');

// empty array to recieve client entered data which will be pushed into generated HTML document.
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

//question array to ask
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
    message: "What is the Engineer's gitHub username?",
    name: "gitHub"
  },
]

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

function addManager() {
  inquirer
  .prompt(managerQuestions)

  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      employees.push(manager);
      chooseEmployee();
  })
}

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

function noThankYou() {
  fs.writeFile("index.HTML", generateHTML(employees), (err) => err ? console.log(err) : console.log('HTML created!'))
}

chooseEmployee();


// function writeHTML() {
//     inquirer
//         .prompt(employees)

//         .then((data) => {
//             fs.writeFile("index.HTML", generateHTML(data), (err) => err ? console.log(err) : console.log('HTML created!'));
//         })
        
// }
// writeHTML();

// when: (answers) => answers.position === 'Engineer',