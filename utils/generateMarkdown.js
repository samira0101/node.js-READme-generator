// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/label-license-red${license})
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/)
    `;
  } else {
    return ' ';
  }
}
// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The following licence applies to this application:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }
// Function that returns the license in the table conten
// If there is no license, return an empty stringt
function renderLicenseTable(license){
  if (license !== 'no license') {
    return `
    * [License](#license)`;
  } else {
    return ' ';
  }
}
// Function to generate markdown for README file
function generateMarkdown(data) {
  return `
  # ${data.title}


  ${renderLicenseBadge(data.license)}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.title}
  ${data.description}
  ## [Installation](#table-of-contents)
  ${data.installation}
  
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
 
  ## [Contributing](#table-of-contents)
  ${data.contributing}
  
  ## [Tests](#table-of-contents)
  ${data.tests}
  
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.username})
  [Email: ${data.email}]
`;
}

module.exports = generateMarkdown;