const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, email) {
    super(name, email);
    this.officeNumber = 0;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
