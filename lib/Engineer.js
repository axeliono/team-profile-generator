const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, email);
    this.github = github;
  }

  getGithub() {
    return "Github: " + this.github;
  }
}

module.exports = Engineer;
