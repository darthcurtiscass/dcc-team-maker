//write function to write data to the HTML file.
const fs = require('fs')
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

const Employee = require('./lib/Employee.class.js');
const Manager = require('./lib/Manager.subclass.js');
const Engineer = require('./lib/Engineer.subclass');
const Intern = require('./lib/Intern.subclass')

const employees = []
//Separate questions into separate arrays. One for engineer, one for manager, and so on...
//Add question array to ask what type of employee they'd like to add.

const employeeType = [

]

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




// function writeHTML() {
//     inquirer
//         .prompt(questions)

//         .then((data) => {
//             fs.writeFile("index.HTML", generateHTML(data), (err) => err ? console.log(err) : console.log('HTML created!'));
//         })
        
// }


function chooseEmployee() {
  inquirer
  .prompt(employeeType)

  .then((data) => {
    if(data.choice === 'Manager') {
      addManager()
    }

  })
}

function addManager() {
  inquirer
  .prompt(managerQuestions)

  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
      console.log(manager);
  })
}

addManager();
// writeHTML();

// when: (answers) => answers.position === 'Engineer',