const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(answers) {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter title of project",
      name: "title",
    },
    {
      type: "input",
      message: "Description of project",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install the project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions for use",
      name: "usage",
    },
    {
      type: "input",
      message: "Test Instructions",
      name: "test",
    },
    {
      type: "input",
      message: "List your collaborators ",
      name: "credits",
    },
    {
      type: "list",
      name: "license",
      message: "What types of licenses?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LPGLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "Your github link",
      name: "github",
    },
    {
      type: "input",
      message: "You email address",
      name: "email",
    },
  ]);
}

promptUser()