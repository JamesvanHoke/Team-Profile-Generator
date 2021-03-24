const generatedEmployeeCard = function (employee) {
  let roleSpecific;
  console.log (employee.getRole())
    switch (employee.getRole()) {
      case "Manager":
        roleSpecific = `Office Number: ${employee.getOfficeNumber()}`;
        break;
      case "Engineer":
        roleSpecific = `Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
        break;
      case "Intern":
        roleSpecific = `School: ${employee.getSchool()}`;
        break;
      default:
        break;
    }
  
  return`<div class="card">
  <div class="card-header">
      <h2 class="card-name">${employee.getName()}</h3>
      <h3 class="card-role">${employee.getRole()}</h4>
  </div>
  <div class="card-body">
      <ul class="card-contents">
          <li class="card-info">ID: ${employee.getId()}</li>
          <li class="card-info"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></li>
          <li class="card-info">${roleSpecific}</li>
      </ul>
  </div>
</div>;`
}

module.exports = generatedEmployeeCard;
