const fs = require("fs");
const {
  generateTeam,
  generateManager,
  generateInterns,
  generateEngineers,
} = require("./utils/generated-page");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

class Prompter {
  constructor() {
    this.employees = [];
  }
  startPrompt() {
    inquirer
      .prompt([
        {
          name: "managerName",
          type: "input",
          message: "Enter team manager's name",
        },
        {
          name: "employeeId",
          type: "input",
          message: "Enter manager's employee ID",
        },
        {
          name: "email",
          type: "input",
          message: "Enter team manager's email address",
        },
        {
          name: "officeNumber",
          type: "input",
          message: "Enter manager's office number",
        },
      ])
      .then((output) => {
        const manager = new Manager(output.managerName, output.email);
        manager.officeNumber = output.officeNumber;
        manager.id = output.employeeId;
        this.employees.push(manager);
        this.nextPrompt();
      });
  }

  engineerPrompt() {
    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "Enter engineer's name",
      },
      {
        name: "id",
        type: "input",
        message: "Enter engineer's employee ID",
      },
      {
        name: "email",
        type: "input",
        message: "Enter engineer's email address",
      },
      {
        name: "github",
        type: "input",
        message: "Enter engineer's github",
      },
    ]);
    console.table(this.employees.manager);
    if (this.employees.interns) {
      console.table(this.employees.interns);
    }
    if (this.employees.engineers) {
      console.table(this.employees.engineers);
    }
    inquirer
      .prompt({
        name: "next",
        type: "list",
        message:
          "Would you like to add an intern, add an engineer, or finish making team?",
        choices: ["add intern", "add engineer", "finish making team"],
        validate: (choice) => {
          return choice ? true : (console.log("Please make a choice"), false);
        },
      })
      .then((output) => {
        if (output.next === "add intern") {
          this.internPrompt();
        } else if (output.next === "add engineer") {
          this.engineerPrompt();
        } else {
          return generateTeam(this.employees);
        }
      });
  }

  internPrompt() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Enter intern's name",
        },
        {
          name: "id",
          type: "input",
          message: "Enter intern's employee ID",
        },
        {
          name: "email",
          type: "input",
          message: "Enter intern's email address",
        },
        {
          name: "school",
          type: "input",
          message: "Enter intern's school",
        },
      ])
      .then((output) => {
        const intern = new Intern(output.name, output.email);
        intern.id = output.id;
        intern.school = output.school;
        this.employees.push(intern);
        console.table(this.employees.manager);
        if (this.employees.interns) {
          console.table(this.employees.interns);
        }
        if (this.employees.engineers) {
          console.table(this.employees.engineers);
        }
        inquirer
          .prompt({
            name: "next",
            type: "list",
            message:
              "Would you like to add an intern, add an engineer, or finish making team?",
            choices: ["add intern", "add engineer", "finish making team"],
            validate: (choice) => {
              return choice
                ? true
                : (console.log("Please make a choice"), false);
            },
          })
          .then((output) => {
            if (output.next === "add intern") {
              this.internPrompt();
            } else if (output.next === "add engineer") {
              this.engineerPrompt();
            } else {
              return generateTeam(this.employees);
            }
          });
      });
  }
}

const appMenu = new Prompter();

appMenu.startPrompt().then((employeeOutput) => {
  const pageHTML = employeeOutput;

  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) throw new Error(err);

    console.log("Page created! Check index.html in directory");
  });
});
