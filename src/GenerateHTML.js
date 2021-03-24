// Takes in our user responses as a parameter
const generatedEmployeeCard = function (employee) {
  // Initialize variables so we can assign them
  let roleSpecific;
  let roleIcon;

  // Switch function to check which is passed in and assign the role specific HTML content to a variable to we can pass it in later.
    switch (employee.getRole()) {
      case "Manager":
        roleSpecific = `Office Number: ${employee.getOfficeNumber()}`;
        roleIcon = "👨‍💼"
        break;
      case "Engineer":
        roleSpecific = `Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        roleIcon = "⌨"
        break;
      case "Intern":
        roleSpecific = `School: ${employee.getSchool()}`;
        roleIcon = "👨‍🎓"
        break;
      default:
        break;
    }
  
    //Returns back our generated HTML Cards
  return`
  <div class="card col-12 col-md-6 col-lg-4 m-4 p-0">
  <div class="card-header bg-primary text-light">
      <h3 class="card-name">${employee.getName()}</h3>
      <h4 class="card-role">${roleIcon} ${employee.getRole()}</h4>
  </div>
  <div class="card-body">
      <ul class="card-contents">
          <li class="card-info">ID: ${employee.getId()}</li>
          <li class="card-info">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li class="card-info">${roleSpecific}</li>
      </ul>
  </div>
</div>
`
}

module.exports = generatedEmployeeCard;
