//write function to write data to the HTML file.
const fs = require('fs')
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js')

const questions = [
    //create a list options and main menu with options for types of employees and an option to deny the option.
    //create array of question objects to give terminal prompts to answer.
    //one to obtain the type of employee
      {
        type: 'rawlist',
        message: 'What type of employee would you like to add to your team?',
        name: 'position',
        choices: ['Manager','Engineer','Intern', "I don't want to add more team members"]
      },
      {
        when: (answers) => answers.position === 'Manager',
        type: 'input',
        message: "What is the Manager's name?",
        name: "name",
      },
      {
        when: (answers) => answers.position === 'Manager',
        type: 'input',
        message: "What is the Manager's id?",
        name: "id",
      },
      {
        when: (answers) => answers.position === 'Manager',
        type: 'input',
        message: "What is the Manager's email?",
        name: "email",
      },
      {
        when: (answers) => answers.position === 'Manager',
        type: 'input',
        message: "What is the Manager's office number?",
        name: "officeNumber",
      },
      {
        when: (answers) => answers.officeNumber === ,
        type: 'rawlist',
        message: 'What type of employee would you like to add to your team?',
        name: 'position',
        choices: ['Manager','Engineer','Intern', "I don't want to add more team members"]
      },
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
      {
        when: (answers) => answers.position === 'Engineer',
        type: 'rawlist',
        message: 'What type of employee would you like to add to your team?',
        name: 'position',
        choices: ['Manager','Engineer','Intern', "I don't want to add more team members"]
      },
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
        when: (answers) => answers.position === 'Intern',
        type: 'input',
        message: "What is the Intern's email?",
        name: "email",
      },
      {
        when: (answers) => answers.position === 'Intern',
        type: 'input',
        message: "Where does the Intern's attend school?",
        name: "school",
      },
      {
        when: (answers) => answers.position === 'Intern',
        type: 'rawlist',
        message: 'What type of employee would you like to add to your team?',
        name: 'position',
        choices: ['Manager','Engineer','Intern', "I don't want to add more team members"]
      },
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

