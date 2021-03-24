const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");

// Creates an array of questions for inquirer
const userQuestions = [
  {
    // Creates a list that the user can choose through, which role they pick decided what questions are available
    type: "list",
    message: "Enter the employees role:",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
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
    // Acts as an if statement for inquirer, if our role is === manager we get this question.
    when: (data) => data.role === "Manager",
  },
  {
    type: "input",
    message: "Enter the Engineer's Github:",
    name: "github",
    // Acts as an if statement for inquirer, if our role is === Engineer we get this question.
    when: (data) => data.role === "Engineer",
  },
  {
    type: "input",
    message: "Enter the Intern's School:",
    name: "school",
    // Acts as an if statement for inquirer, if our role is === Intern we get this question.
    when: (data) => data.role === "Intern",
  },
];

// Async function for running our inquirer prompts
async function generateTeamData() {
  // creates a variable for us to pass our responses into
  let teamData;
  // Begins user prompts based off our above array.
  await inquirer.prompt(userQuestions).then((data) => {
    // Switch statement based off of which role we picked
    switch (data.role) {
      // if we picked the manager role the user answers are passed into a new manager class object
      case "Manager":
        teamData = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        break;
      case "Engineer":
        // if we picked the Engineer role the user answers are passed into a new engineer class object
        teamData = new Engineer(data.name, data.id, data.email, data.github);
        break;
      case "Intern":
        // if we picked the Intern role the user answers are passed into a new Intern class object
        teamData = new Intern(data.name, data.id, data.email, data.school);
        break;
    }
  });
  // Pass back our newly generated objects.
  return teamData;
}

module.exports = generateTeamData;