// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License](https://img.shields.io/badge/License-${data.license}-blue)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
