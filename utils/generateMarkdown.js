// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
license = response.license
function renderLicenseBadge(license) {
  switch(license) {
    case 'none':
      response = ''
      break;
    case 'GNU GPLv3':
      response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'MIT':
      response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
      case 'Apache 2.0':
        response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
      case 'ISC':
        response = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        break;
      case 'GNU GPLv2':
        response = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'none':
      response = ''
      break;
    case 'GNU GPLv3':
      response = 'https://choosealicense.com/licenses/gpl-3.0/'
      break;
    case 'MIT':
      response = 'https://choosealicense.com/licenses/mit/'
      break;
      case 'Apache 2.0':
        response = 'https://choosealicense.com/licenses/apache-2.0/'
        break;
      case 'ISC':
        response = 'https://choosealicense.com/licenses/isc/'
        break;
      case 'GNU GPLv2':
        response = 'https://choosealicense.com/licenses/gpl-2.0/'
        break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
if(license === 'none') {
  return ''
} else {
    return `##License\n${renderLicenseBadge(license)}\n${renderLicenseLink(license)}`
  
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
