// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let badges = {
  'Apache': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  'Boost': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
  'BSD': `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  'Creative Commons': `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
  'Eclipse': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
  'GNU': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  'The Organization for Ethical Source': `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`,
  'IBM': `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
  'ISC': `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
  'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  'Mozilla': `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  'Open Data Commons': `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`,
  'Perl': `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
  'SIL': `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`,
  'Unlicense': `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
  'WTFPL': `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
  'Zlib': `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`,
  'None': ``,

}
return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let links = {
  'Apache': `https://opensource.org/licenses/Apache-2.0`,
  'Boost': `https://www.boost.org/LICENSE_1_0.txt`,
  'BSD': `https://opensource.org/licenses/BSD-3-Clause`,
  'Creative Commons': `http://creativecommons.org/publicdomain/zero/1.0/`,
  'Eclipse': `https://opensource.org/licenses/EPL-1.0`,
  'GNU': `https://www.gnu.org/licenses/gpl-3.0`,
  'The Organization for Ethical Source': `https://firstdonoharm.dev`,
  'IBM': `https://opensource.org/licenses/IPL-1.0`,
  'ISC': `https://opensource.org/licenses/ISC`,
  'MIT': `https://opensource.org/licenses/MIT`,
  'Mozilla': `https://opensource.org/licenses/MPL-2.0`,
  'Open Data Commons': `https://opendatacommons.org/licenses/odbl/`,
  'Perl': `https://opensource.org/licenses/Artistic-2.0`,
  'SIL': `https://opensource.org/licenses/OFL-1.1`,
  'Unlicense': `http://unlicense.org/`,
  'WTFPL': `http://www.wtfpl.net/about/`,
  'Zlib': `https://opensource.org/licenses/Zlib`,
  'None': ``
}
return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === none ){
    return `This project does not contain a license. If you feel it needs to please contact ${data.questionsEmail}, thank you!`
  }
return `This is licensed for open source through ${license}.Please visit ${renderLicenseLink(license)} for more information.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License 
  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions

  Please contact me at ${data.questionsEmail} with any questions you may have. You can also find my GitHub at ${data.questionsGitHub}. Thank you! `;
}

module.exports = generateMarkdown;