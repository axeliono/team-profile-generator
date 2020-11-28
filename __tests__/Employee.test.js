const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
  const employee = new Employee("Dave", "jamesbond@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(0);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email.length).toBeGreaterThan(0);
});

test("returns the name property of Employee", () => {
  const employee = new Employee("James", "jamesbond@gmail.com");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

test("returns id number of Employee", () => {
  const employee = new Employee("James", "Jamesbond@gmail.com");

  expect(employee.getId()).toEqual(employee.id);
});

test("returns email address of Employee", () => {
  const employee = new Employee("James", "Jamesbond@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("returns role which should be 'Employee' or whatever the child class's role is", () => {
  const employee = new Employee("James", "Jamesbond@gmail.com");

  expect(employee.getRole()).toEqual(
    expect.stringContaining(employee.constructor.name)
  );
});
