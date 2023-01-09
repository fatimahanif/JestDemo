const { isPrime } = require("../js_files/prime");

// using 1 undefined and 2 null just to demonstrate

// undefined
test("testing undefined", () => {
  expect(isPrime(1)).toBeUndefined();
});

//defined is same as not of undefined
test("testing defined", () => {
  expect(isPrime(8)).toBeDefined();
  expect(isPrime(8)).not.toBeUndefined();
});

// null
test("testing null", () => {
  expect(isPrime(2)).toBeNull();
});

// truthy
test("testing truthy", () => {
  expect(isPrime(17)).toBeTruthy();
});

// falsy
test("testing falsy", () => {
  expect(isPrime(80)).toBeFalsy();
});
