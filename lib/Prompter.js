const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

class Prompter {
  constructor() {
    this.employees = {
      manager: {},
      interns: [],
      engineers: [],
    };
  }

  managerPrompt() {
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
          type: "number",
          message: "Enter manager's office number",
        },
      ])
      .then((output) => {
        const manager = new Manager(output.managerName, output.email);
        manager.officeNumber = output.officeNumber;
        manager.id = output.employeeId;
        this.employees.manager = manager;
        this.nextPrompt();
      });
  }

  engineerPrompt() {
    inquirer
      .prompt([
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
      ])
      .then((output) => {
        const engineer = new Engineer(output.name, output.email);
        engineer.id = output.id;
        engineer.github = output.github;
        this.employees.engineers.push(engineer);
        this.nextPrompt();
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
        this.employees.interns.push(intern);
        this.nextPrompt();
      });
  }

  nextPrompt() {
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
          return;
        }
      });
  }
}
