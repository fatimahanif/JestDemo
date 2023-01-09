const { exceptionMessage } = require("../js_files/exceptions");

// checking if an exception is thrown
test("checking exception", () => {
  expect(() => exceptionMessage()).toThrow();
});

// use calback otherwise it will fail
test.skip("exception will fail test case", () => {
  expect(exceptionMessage()).toThrow(Error);
});

//match any string in error
test("matching string", () => {
  expect(() => exceptionMessage()).toThrow('custom error');
});

//match using regex in error
test("matching string", () => {
  expect(() => exceptionMessage()).toThrow(/^This is a custom error.$/);
});
