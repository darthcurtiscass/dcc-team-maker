//write function to write data to the HTML file.
const fs = require('fs')
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js')

const questions = [
    //create a list options and main menu with options for types of employees and an option to deny the option.
    //create array of question objects to give terminal prompts to answer.
    //one to obtain the type of employee
      {
        type: 'list',
        message: 'What type of employee would you like to add to your team?',
        name: 'position',
        choices: ['Manager','Engineer','Intern', "I don't want to add more team members"]
      },
      {
        type: 'input',
        message: "What is your employee's name?",
        name: "name",
      },
      {
        type: 'input',
        message: "What is your employee's id number?",
        name: "id",
      },
      {
        type: 'input',
        message: "What is your employee's office number?",
        name: "officeNumber",
      },
      {
        type: 'input',
        message: "What is your employee's gitHub username?",
        name: "gitHub"
      },
      {
        type: 'input',
        message: "What is your employee's email?",
        name: "email"
      }
    
    
    //one to obtain their name.
    //one to obtain their email.
    //one to obtain their ID.
    //one to obtain their office number.
]

// const managerQuestions = () => {
//     if(position === 'Manager') {
//         return [
//             {
//                 type: "input",
//                 message: 'What is your favorite color?',
//                 name: 'test',
//             }
//         ]
//     }
// }

function writeHTML() {
    inquirer
        .prompt(questions)

        .then((data) => {
            fs.writeFile("index.HTML", generateHTML(data), (err) =>
      err ? console.log(err) : console.log('HTML created!'));
        })
}


writeHTML();

