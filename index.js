// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const create = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// project title, description, installation instructions, usage info, contribution guidelines,
//test instructions, license, badges, github username, email adress
const questions = [
        {
            type: 'input',
            message: 'What is your project\'s title?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'Describe your project:',
            name: 'description',
          },
          {
            type: 'input',
            message: 'Enter the installation instructions:',
            name: 'instructions',
          },
          {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'How can others contribute to your project?',
            name: 'contributions',
          },
          {
              type:'input',
              message:'Who helped contribute to your project?',
              name:'credits',
          },
          {
            type: 'input',
            message: 'How do you test the project?',
            name: 'tests',
          },
          {
            type: 'list',
            message: 'What kind of license would you like to use?',
            name: 'license',
            choices: ['GNU GPLv3', 'MIT', 'Apache 2.0', 'ISC', ' GNU GPLv2', 'none'],
          },
          {
            type: 'input',
            message: 'Enter your github link:',
            name: 'github',
          },
          {
            type: 'input',
            message: 'Enter your email:',
            name: 'email',
          },
    ];


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, function(err){
        if(err)
            return console.log(err);
        console.log(data)
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt (questions) 
    .then((response) =>
        writeToFile('README.md', create(response))
);
}

// Function call to initialize app
init();