const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern");

test("creates new Intern object", () => {
  const intern = new Intern("inty", "intyEmail", "Baylor");

  expect(intern.name).toBe("inty");
  expect(intern.email).toBe("intyEmail");
  expect(intern.school).toBe("Baylor");
});

test("returns the school name of the intern", () => {
  const intern = new Intern("inty", "intyEmail", "Baylor");

  expect(intern.getSchool()).toEqual(intern.school);
});
