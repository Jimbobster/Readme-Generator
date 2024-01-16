const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install the application?"
    },
    {
      type: "input",
      name: "usage",
      message: "What are the instructions for using the application?"
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT", "Apache 2.0", "GPL", "ISC", "None"]
    },
    {
      type: "input",
      name: "contributing",
      message: "List any collaborators"
    },
    {
      type: "input",
      name: "tests",
      message: "Have you performed any tests?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }

];
// function to write the README file
function writeToFile(fileName, data) {
  const outputDir = path.join(__dirname, 'output');
  const outputFile = path.join(outputDir, fileName);

  // Create the 'output' directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // write to the specified file
  fs.writeFileSync(outputFile, data);
  console.log(`${fileName} generated successfully at ${outputFile}`);
}
// initialize the program
async function init() {
    try {
      const userInput = await inquirer.prompt(questions);
      const markdownContent = generateMarkdown(userInput);
      const outputFileName = "README.md";
      writeToFile(outputFileName, markdownContent);
    } catch (error) {
      console.error("An error occurred:", error);
    }
}

// call to initialize the program
init();