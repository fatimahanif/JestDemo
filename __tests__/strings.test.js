const { email, password, users, names } = require("../js_files/strings");

beforeAll(() => console.log("Starting string and array tests"));
afterAll(() => console.log("Eneded string and array tests"));
beforeEach(() => console.log("Executing test"));
afterEach(() => console.log("Test finished"));

describe("Testing string and arrays", () => {
  // testing using regex
  test("email regex", () => {
    expect(email).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  });

  test("password regex", () => {
    expect(password).not.toMatch(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );
  });

  // testing toContain
  test("array contains given data", () => {
    expect(names).toContain("Fatima");
  });

  // testing contain equal
  test("array contains a given object", () => {
    expect(users).toContainEqual({
      name: "Kashaf",
      age: 21,
      city: "Rawalpindi",
    });
  });

  // toBe vs to equal
  describe("Testing to be vs to equal", () => {
    test("to be works on same reference", () => {
      expect(users[2]).toBe(users[2]);
    });

    test.skip("to be does not work on different reference", () => {
      expect(users[2]).toBe(users[3]);
    });

    test("to equal works on same values", () => {
      expect(users[2]).toEqual(users[3]);
    });
  });
});
