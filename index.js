const generateTeamData = require("./src/GenerateTeamData");
const moreMembersFn = require("./src/moreMembersFn")
const generateHTML = require("./src/GenerateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

const HTMLTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<title>Team Profile</title>
</head>
<body>`;

const HTMLTemplateEnd = `
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>`;

async function init() {
  fs.writeFile("./dist/index.html", HTMLTemplate, (err) => {if (err) {console.error(err);}});
  let moreMembers = true;

  while (moreMembers) {
    const team = await generateTeamData();
    const teamToCard = generateHTML(team);
    fs.appendFile("./dist/index.html", teamToCard, (err) => {if (err) {console.error(err);}});  

    moreMembers = await moreMembersFn()
}
    fs.appendFile("./dist/index.html", HTMLTemplateEnd, (err) => {
      if (err) {
        console.error(err);
      }
    });
}
init();
