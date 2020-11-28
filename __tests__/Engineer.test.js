const Engineer = require("../lib/Engineer");

test("creates an enemy object", () => {
  const engineer = new Engineer("engy", "email", "githubUsername");

  expect(engineer.github).toBe("githubUsername");
  expect(engineer.email).toBe("email");
  expect(engineer.name).toBe("engy");
  expect(engineer.name.length).toBeGreaterThan(0);
  expect(engineer.email.length).toBeGreaterThan(0);
  expect(engineer.id).toEqual(expect.any(Number));
});

test("returns engineer's github username", () => {
  const engineer = new Engineer("engy", "email", "githubUsername");

  expect(engineer.getGithub()).toBe("githubUsername");
  expect(engineer.getGithub()).toBe(engineer.github);
});
