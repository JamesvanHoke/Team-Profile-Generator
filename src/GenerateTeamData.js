const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");

const userQuestions = [
  {
    type: "list",
    message: "Enter the employees role:",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    message: "Enter the employees Name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the employees ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the employees Email:",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the Manager's office number:",
    name: "officeNumber",
    when: (data) => data.role === "Manager",
  },
  {
    type: "input",
    message: "Enter the Engineer's Github:",
    name: "github",
    when: (data) => data.role === "Engineer",
  },
  {
    type: "input",
    message: "Enter the Intern's School:",
    name: "school",
    when: (data) => data.role === "Intern",
  },
];

async function generateTeamData() {
  let teamData;
  await inquirer.prompt(userQuestions).then((data) => {
    switch (data.role) {
      case "Manager":
        teamData = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        break;
      case "Engineer":
        teamData = new Engineer(data.name, data.id, data.email, data.github);
        break;
      case "Intern":
        teamData = new Intern(data.name, data.id, data.email, data.school);
        break;
    }
  });
  return teamData;
}

module.exports = generateTeamData;
