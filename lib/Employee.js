class Employee {
  constructor(name = "", email) {
    this.name = name;
    this.id = 0;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return "ID: " + this.id;
  }

  getEmail() {
    return "Email: " + this.email;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Employee;
