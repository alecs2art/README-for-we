// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Title:
  ${data.projectName}

  ## Description:
  ${data.description}

  ## Table of Contents:
    * [Licenses](#license)
    * [Dependencies](#dependencies)
    * [Tests](#tests)
    * [Usage](#usage)
    * [Contribution](#contributing)
    * [GitHub](#username)
    * [Email](#email)
  
  ## Licenses:
  ${data.license}

  ## Dependencies:
  ${data.dependencies}

  ## Tests:
  ${data.tests}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contributing}

  ## Github:
  ${data.username}

  ## Email:
  ${data.email}
  `;

}

module.exports = generateMarkdown;
