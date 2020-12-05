const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generateManager = (employees) => {
  console.log(employees);
  return `
    <div class="container d-flex justify-content-center flex-wrap">
      <div class="row">
        ${employees
          .filter(({ employee }) => employee.constructor === Manager)
          .forEach((employee) => {
            return `           
            <div class="card border rounded-lg" style="width: 15rem">
          <div class="card-body bg-primary text-white text-left p-3">
            <h4 class="card-title">${employee.getName()}</h6>
            <h5 class="card-text">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
</svg>  Manager
            </h5>
          </div>
          <div class="card-body bg-light">
            <ul
              class="list-group list-group-flush bg-white border border-light shadow"
            >
              <li class="list-group-item">${employee.getId()}</li>
              <li class="list-group-item">${employee.getEmail()}</li>
              <li class="list-group-item">${employee.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>`;
          })}
      </div>
    </div>
    `;
};

const generateEngineers = (employees) => {
  return `
    <div class="container d-flex justify-content-center flex-wrap">
      <div class="row">
        ${employees
          .filter(({ employee }) => employee.constructor == Engineer)
          .forEach(({ employee }) => {
            return `           
            <div class="card border rounded-lg" style="width: 15rem">
          <div class="card-body bg-primary text-white text-left p-3">
            <h4 class="card-title">${employee.getName()}</h6>
            <h5 class="card-text">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
</svg>  Manager
            </h5>
          </div>
          <div class="card-body bg-light">
            <ul
              class="list-group list-group-flush bg-white border border-light shadow"
            >
              <li class="list-group-item">${employee.getId()}</li>
              <li class="list-group-item">${employee.getEmail()}</li>
              <li class="list-group-item">${employee.getGithub()}</li>
            </ul>
          </div>
        </div>`;
          })}
      </div>
    </div>
    `;
};

const generateInterns = (employees) => {
  return `
    <div class="container d-flex justify-content-center flex-wrap">
      <div class="row">
        ${employees
          .filter(({ employee }) => employee.constructor == Intern)
          .forEach(({ employee }) => {
            return `           
            <div class="card border rounded-lg" style="width: 15rem">
          <div class="card-body bg-primary text-white text-left p-3">
            <h4 class="card-title">${employee.getName()}</h6>
            <h5 class="card-text">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
</svg>  Manager
            </h5>
          </div>
          <div class="card-body bg-light">
            <ul
              class="list-group list-group-flush bg-white border border-light shadow"
            >
              <li class="list-group-item">${employee.getId()}</li>
              <li class="list-group-item">${employee.getEmail()}</li>
              <li class="list-group-item">${employee.getSchool()}</li>
            </ul>
          </div>
        </div>`;
          })}
      </div>
    </div>
    `;
};

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
    ${generateManager(employees)}
    ${generateEngineers(employees)}
    ${generateInterns(employees)}
    </main>
  </body>
</html>
    `;
};

module.exports = {
  generateTeam,
  generateManager,
  generateInterns,
  generateEngineers,
};
