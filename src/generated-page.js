const generateCards = (employees) => {
  console.table("Employees: ", employees);

  const managerCard = (manager) => {
    return `           
    <div class="card border rounded-lg" style="width: 15rem">
      <div class="card-body bg-primary text-white text-left p-3">
        <h4 class="card-title">${manager.getName()}</h6>
        <h5 class="card-text">
        <span class="icon icons"><i class="fas fa-briefcase"></i></span>${manager.getRole()} 
        </h5>
      </div>
      <div class="card-body bg-light">
        <ul
          class="list-group list-group-flush bg-white border border-light shadow"
        >
          <li class="list-group-item">${manager.getId()}</li>
          <li class="list-group-item"> Email: 
            <a href="mailto:${manager.getEmail()}>
            ${manager.getEmail()}
            </a>
          </li>
          <li class="list-group-item">Office Number: ${
            manager.getOfficeNumber()
          }</li>
        </ul>
      </div>
    </div>
    `
  };

  const engineerCard = (engineer) => {
    return `           
    <div class="card border rounded-lg" style="width: 15rem">
      <div class="card-body bg-primary text-white text-left p-3">
        <h4 class="card-title">${engineer.getName()}</h6>
        <h5 class="card-text">
        <span class="icon icons"><i class="fas fa-laptop-code"></i></span>${engineer.getRole()} 
        </h5>
      </div>
      <div class="card-body bg-light">
        <ul
          class="list-group list-group-flush bg-white border border-light shadow"
        >
          <li class="list-group-item">${engineer.getId()}</li>
          <li class="list-group-item">Email:
            <a href="mailto:${engineer.getEmail()}>
            ${engineer.getEmail()}
            </a>
          </li>
          <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}" target ='_blank'> ${engineer.getGithub()}</li>
        </ul>
      </div>
    </div>
    `
  };

  const internCard = (intern) => {
    return   `         
    <div class="card border rounded-lg" style="width: 15rem">
      <div class="card-body bg-primary text-white text-left p-3">
        <h4 class="card-title">${intern.getName()}</h6>
        <h5 class="card-text">
        <span class="icon icons"><i class="fas fa-book"></i></span>${intern.getRole()} 
        </h5>
      </div>
      <div class="card-body bg-light">
        <ul
          class="list-group list-group-flush bg-white border border-light shadow"
        >
          <li class="list-group-item">${intern.getId()}</li>
          <li class="list-group-item">Email:
            <a href="mailto:${intern.getEmail()}>
            ${intern.getEmail()}
            </a>
          </li>
          <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `
  };

  const workers = [];
  workers.push(
    employees
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => managerCard(manager))
      .join("")
  );
  workers.push(
    employees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => engineerCard(engineer))
      .join("")
  );
  workers.push(
    employees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => internCard(intern))
      .join("")
  );
  console.log(workers);
};

module.exports = (pageHTML) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team HTML</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
      <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
      <header class="bg-danger text-white text-center">
          <h5 class="text-sm">My Team</h5>
      </header>
      <main class="container-lg">
      
          <div class="container d-flex justify-content-center flex-wrap">
              <div class="row">
                  ${generateCards(pageHTML)}
              </div>
          </div>
      </main>
</body>
</html>
    `;
};
