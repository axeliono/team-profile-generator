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
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Employee;
console.log(new Employee("dave", "jamesemail").getRole());
