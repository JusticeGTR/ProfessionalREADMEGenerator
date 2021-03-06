// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
      return ''
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    case 'GNU GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'none':
      return ''
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/'
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/'
    case 'Apache 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/'
    case 'ISC':
      return 'https://choosealicense.com/licenses/isc/'
    case 'GNU GPLv2':
      return 'https://choosealicense.com/licenses/gpl-2.0/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  } else {
    return `${renderLicenseBadge(license)}  
[View License](${renderLicenseLink(license)})
`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Credits](#credits)
- [Tests](#tests)
- [Contact](#contact)
## Installation
${data.instructions}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributions
${data.contributions}
## Credits
${data.credits}
## Tests
${data.tests}
## Contact
[Email me!](${data.email})  
[GitHub](${data.github})
`;
}

module.exports = generateMarkdown;
