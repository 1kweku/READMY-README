// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    { 
      type: 'input',
      question: 'What is the title of this project?',
      name: 'title'
    },

    {
      type: 'input',
      question: 'Provide a short description of your project',
      name: 'description'
    },


    { type: 'input',
      question: 'What problem does it solve?',
      name: 'problem' 
    },

    { type: 'input',
      question: 'What did you learn?',
      name: 'learn' 
    },

    {
      type: 'input',
      question: 'Table of Contents',
      name: 'toc'
    },

    { type: 'input',
      question: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
      name: 'installation' 
    },

    {
      type: 'input',
      question: 'Provide instructions and examples for use. Include screenshots using ![alt text](assets/images/screenshot.png)',
      name: 'usage'
    },

    {
      type: 'input',
      question: 'How can we test your application?',
      name: 'test'
    },

    { type: 'input',
    question: 'Add your GitHub link ',
    name: 'GitHub'
    },

    { type: 'input',
    question: 'Add your email address',
    name: 'Email'
    },

    {
      type: 'input',
      question: 'To contribute to the project, pull requests are welcome.',
      name: 'contribute',
    },

    { type: 'input',
    question: 'Enter any questions your have regarding the project.',
    name: 'Questions',
    },

    {
      type: 'list',
      question: 'Choose a license for the application',
      name: 'license',
      choices: ['No license', 'Apache', 'MIT',  'Berkely Source Distribution (BSD 3)', 'GMU General Public License (GPL)', 'Mozilla Public License (MPL)', 'Eclipse Public License (EPL)' ]
    },

 ];

// TODO: Create a function to write README file
function writeToFile(responses) {
   // console.log(responses);
    fs.writeFile('README.md', generateMarkdown(responses), (err) =>
    err ? console.error(err) : console.log ('Succesfully created README')
    )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses)=> { 
    writeToFile(responses)
  }) 
}

// Function call to initialize app
init();
