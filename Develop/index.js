// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'What is the description of your project? (i.e., motivation for, why, problem solved, and what did you learn?)',
    name: 'description',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'How do you install your project?',
    name: 'installation',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'Provide instructions and examples of how to use your project.',
    name: 'usage',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'Were there other collaborators on this project, if so who/what?',
    name: 'credits',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: '',
    name: '',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'Does your project have many features, if so summarize them here.',
    name: 'features',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'contributions',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  },
  {
    type: 'input',
    message: 'How can others test to your project?',
    name: 'tests',
    validate: (response) => {
      if(!response){
        return console.log('You must submit a response!');
      }
      return true
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.error('Error: ' + err) : console.log('README generator successful!')
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) =>
  writeToFile('myREADME.md', generateMarkdown(data))
  )
}

// Function call to initialize app
init();