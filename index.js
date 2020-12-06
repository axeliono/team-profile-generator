const fs = require("fs");
const inquirer = require("inquirer");
const generateCards = require("./src/generated-page");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];
class Prompter {
  async startPrompt() {
    await inquirer
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
        const manager = new Manager(
          output.managerName,
          output.employeeId,
          output.email,
          output.officeNumber
        );
        employees.push(manager);
        console.table(employees);
        this.nextPrompt();
      });
  }

  async engineerPrompt() {
    await inquirer
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
        const engineer = new Engineer(
          output.name,
          output.id,
          output.email,
          output.github
        );
        employees.push(engineer);
        console.table(employees);
        this.nextPrompt();
      });
  }

  async internPrompt() {
    await inquirer
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
        const intern = new Intern(
          output.name,
          output.id,
          output.email,
          output.school
        );
        employees.push(intern);
        console.table(employees);
        this.nextPrompt();
      });
  }

  async nextPrompt() {
    await inquirer
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
          console.table(employees);
          generateFile(employees);
        }
      });
  }
};

const generateFile = (employees) => {
  const pageHTML = generateCards(employees)
  fs.writeFile("./dist/page.html", pageHTML, (err) => {
    if (err) throw new Error(err);

    console.log("Page created! Check index.html in directory");
  });
}

const appMenu = new Prompter();

appMenu.startPrompt();
