// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const created = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// project title, description, installation instructions, usage info, contribution guidelines,
//test instructions, license, badges, github username, email adress
inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is your project\'s title?',
            name: 'projectTitle',
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
            type: 'input',
            message: 'How do you test the project?',
            name: 'test',
          },
          {
            type: 'list',
            message: 'What kind of license would you like to use?',
            name: 'license',
            choices: ['GNU GPLv3', 'MIT', 'Apache 2.0', 'ISC', ' GNU GPLv2', 'none'],
          },
          {
            type: 'checklist',
            message: 'What badges would you like to use?',
            name: 'badges',
            choices: ['GitHub License', 'GitHub Forks', 'GitHub Repo Stars', 'GitHub package.JSON Version', 'GitHub Commit Activity', 'GitHub Contributors', 'none'],
          },
          {
            type: 'input',
            message: 'Enter your github username:',
            name: 'gitUserName',
          },
          {
            type: 'input',
            message: 'Enter your email:',
            name: 'email',
          },
          {
            type: 'list',
            message: 'Would you like a Table of Contents?',
            name: 'tableOfContents',
            choices: ['Yes', 'No'],
          },
        ])
    .then((response) =>
    writeToFile('README.md', created(response))
    );

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, function(err){
        if(err)
            return console.log(err);
        console.log(data)
        
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
