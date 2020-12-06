const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generateTeam = (employees) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Test HTML</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="bg-danger text-white text-center">
      <h5 class="text-sm">My Team</h5>
    </header>
    <main class="container-lg">
    
    <div class="container d-flex justify-content-center flex-wrap">
    <div class="row">
      ${employees.forEach((employee) => {
        return `           
          <div class="card border rounded-lg" style="width: 15rem">
        <div class="card-body bg-primary text-white text-left p-3">
          <h4 class="card-title">${employee.getName}</h6>
          <h5 class="card-text">
              ${employee.getEmployeeIcon} 
              ${employee.getRole}
          </h5>
        </div>
        <div class="card-body bg-light">
          <ul
            class="list-group list-group-flush bg-white border border-light shadow"
          >
            <li class="list-group-item">${employee.getId}</li>
            <li class="list-group-item">${employee.getEmail}</li>
            <li class="list-group-item">${employee.getEmployeeItem}</li>
          </ul>
        </div>
      </div>`;
      })}
    </div>
  </div>
    </main>
  </body>
</html>
    `;
};

module.exports = generateTeam;
