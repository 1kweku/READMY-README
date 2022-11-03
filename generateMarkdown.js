// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No license') {
    return ''
  }
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'Berkely Source Distribution (BSD 3)') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'GNU General Public License (GPL)') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'Mozilla Public License (MPL)') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'Eclipse Public License (EPL)') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  ${data.toc}

  ## Description 
  Provide a short description explaining the why you built your project, what problem it solves and what you learned from building your project.
  - ${data.description}
  - ${data.problem}
  - ${data.learn}

  ## Installation
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  Test instructions
  ${data.test}

  ## Contributing
  How to contribute 
  ${data.contribute}

  ## Questions
  Please enter any questions you have regarding this project
  ${data.Questions}

  ## Contact 
  Please provide your GitHub link as well as an email.
  -${data.GitHub}
  -${data.Email}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
