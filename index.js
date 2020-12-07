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
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a name.");
              return false;
            }
          },
        },
        {
          name: "employeeId",
          type: "input",
          message: "Enter manager's employee ID",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("You must enter an ID number.");
              return false;
            }
          },
        },
        {
          name: "email",
          type: "input",
          message: "Enter team manager's email address",
          validate: (emailInput) => {
            if (emailInput.includes("@") && emailInput.includes(".com")) {
              return true;
            } else {
              console.log("\n You must enter a valid email address.");
              return false;
            }
          },
        },
        {
          name: "officeNumber",
          type: "input",
          message: "Enter manager's office number",
          validate: function (value) {
            let valid = !isNaN(parseFloat(value));
            return valid || "Please enter an office number.";
          },
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
          validate: (input) => {
            return input ? true : (console.log("Please enter a name"), false);
          },
        },
        {
          name: "id",
          type: "input",
          message: "Enter engineer's employee ID",
          validate: (input) => {
            return input ? true : (console.log("Please enter an ID"), false);
          },
        },
        {
          name: "email",
          type: "input",
          message: "Enter engineer's email address",
          validate: (input) => {
            return input.includes("@") && input.includes(".com")
              ? true
              : (console.log("Enter a valid email"), false);
          },
        },
        {
          name: "github",
          type: "input",
          message: "Enter engineer's github username",
          validate: (input) => {
            return input
              ? true
              : (console.log("Enter valid Github username"), false);
          },
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
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("You must enter a name.");
            }
          },
        },
        {
          name: "id",
          type: "input",
          message: "Enter intern's employee ID",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("You must enter an ID number.");
              return false;
            }
          },
        },
        {
          name: "email",
          type: "input",
          message: "Enter intern's email address",
          validate: (emailInput) => {
            if (emailInput.includes("@") && emailInput.includes(".com")) {
              return true;
            } else {
              console.log("\n You must enter a valid email address.");
              return false;
            }
          },
        },
        {
          name: "school",
          type: "input",
          message: "Enter intern's school",
          validate: function (value) {
            if (value) {
              return true;
            } else {
              console.log("Please provide the name of the school.");
            }
          },
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
}

const generateFile = (employees) => {
  const pageHTML = generateCards(employees);
  fs.writeFile("./dist/page.html", pageHTML, (err) => {
    if (err) throw new Error(err);

    console.log("Page created! Check index.html in directory");
  });
};

const appMenu = new Prompter();

appMenu.startPrompt();
