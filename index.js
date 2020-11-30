const { fstat } = require("fs");
const Prompter = require("./lib/Prompter.js");
const fs = require("fs");
const generateTeam = require("./src/generated-page");

const appMenu = new Prompter();

appMenu.startPrompt().then((employeeOutput) => {
  const pageHTML = generateTeam(employeeOutput);

  fs.writeFile("./index.html", pageHTML, (err) => {
    if (err) throw new Error(err);

    console.log("Page created! Check index.html in directory");
  });
});
