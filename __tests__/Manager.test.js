const Manager = require("../lib/Manager");

test("creates new Manager object", () => {
  const manager = new Manager("Dave", "email");

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("returns Manager objects office number property", () => {
  const manager = new Manager("Dave", "email");
  expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});
