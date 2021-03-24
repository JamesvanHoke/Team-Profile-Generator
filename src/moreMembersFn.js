const inquirer = require("inquirer");

async function moreMembersFn(){
    const response = await inquirer.prompt({
        type:"confirm",
        message:"Do you want to add more members to your team?",
        name: "moreMembers"
    })
    return response.moreMembers
}

module.exports = moreMembersFn