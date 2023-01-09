const { sum, sumArrayOfObjects, sumArray } = require("../js_files/sum");

beforeAll(() => console.log("Starting sum tests"));
afterAll(() => console.log("Eneded sum tests"));
beforeEach(() => console.log("Executing test"));
afterEach(() => console.log("Test finished"));

// testing to be
test("sum of 2 numbers", () => {
  expect(sum(5, 5)).toBe(10);
});

// testing to equal and strict equal
test("sum of array of objects", () => {
  expect(
    sumArrayOfObjects([
      { a: 3, b: 5 },
      { a: 7, b: -9 },
    ])
  ).toEqual([8, -2]);
});

// diff b/w to be and to equal (better example later)
test.skip("sum of array of objects", () => {
  expect(
    sumArrayOfObjects([
      { a: 3, b: 5 },
      { a: 7, b: -9 },
    ])
  ).toBe([8, -2]);
});

// testing not
test("sum of array", () => {
  expect(sumArray([5, 8, -9])).not.toEqual(8);
});

// to be close to (failed intentionally)
test.skip("close to a number will fail", () => {
  expect(sum(3.11111119, 2)).toBeCloseTo(5.1);
});

// to be close to (correct implementation) (also used for rounding error)
test("close to a number correct", () => {
  expect(sum(3.11111119, 2)).toBeCloseTo(5.11);
});

// similarly we can use greater/less than equal to
