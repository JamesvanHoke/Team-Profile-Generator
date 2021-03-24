const generateTeamData = require("./src/GenerateTeamData");
const moreMembersFn = require("./src/moreMembersFn")
const generateHTML = require("./src/GenerateHTML");
const fs = require("fs");

const HTMLTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<title>Team Profile</title>
</head>
<header class="row navbar navbar-light bg-danger">
<h1 class="col-12 text-center mb-4">Team Profile Generator</h1>
</header>
<body>
<div class= "row col-12">
`;

const HTMLTemplateEnd = `
</div>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>`;


// Creates our Index.html, then prompts user, passes in user prompts as html, when user is done finalizes html
async function init() {
    // Creates the starter index.html
  fs.writeFile("./dist/index.html", HTMLTemplate, (err) => {if (err) {console.error(err);}});

//   Lets our while loop run
  let moreMembers = true;

//   Keeps running until we tell it to stop
  while (moreMembers) {
    //   Wait until we get our prompt responses back
    const team = await generateTeamData();
    //  Pass our prompt responses into a new function that places them inside a template html
    const teamToCard = generateHTML(team);
    // Appends our newly created cards to the index.html
    fs.appendFile("./dist/index.html", teamToCard, (err) => {if (err) {console.error(err);}});  
    
    // runs an inquirer prompt asking if they user wants to add another team member
    moreMembers = await moreMembersFn()
}
// Tacks on our end html template parts
    fs.appendFile("./dist/index.html", HTMLTemplateEnd, (err) => {
      if (err) {
        console.error(err);
      }
    });
}

// Invokes our startup function
init();