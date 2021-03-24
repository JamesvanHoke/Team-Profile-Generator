const inquirer = require("inquirer");

// Function to ask user if they want to run through the prompts again to add more team members
async function moreMembersFn(){
    const response = await inquirer.prompt({
        type:"confirm",
        message:"Do you want to add more members to your team?",
        name: "moreMembers"
    })
    // Passes back the response.
    return response.moreMembers
}

module.exports = moreMembersFn