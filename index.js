// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project in a few words ?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the suitble license for this project',
        choices: ['mit', 'apache', 'no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Type in the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Insert your test instructions here',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
const writeFile = fileContent => {
    return new Promise((fulfill, reject) => {
        fs.writeFile('README.md', fileContent,  err => {
            if (err) {
                reject(err);
                return;
            }
            fulfill({
                ok: true,
                message: 'File successfully created!'
            });
        });
    });
};

// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeInfo => {
        return readmeInfo;
    })
}

// Function call to initialize app
init()
.then(readmeInfo => {
    console.log(readmeInfo);
    return generateMarkdown(readmeInfo);
})
.then(page => {
    return writeFile(page);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
