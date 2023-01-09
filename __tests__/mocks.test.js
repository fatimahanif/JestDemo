const { mockTest } = require("../js_files/mock");

// defining a mock call back function
const mockFunction = jest.fn((number) => number * 2);

test("testing mock function", () => {
  // not using expect here, simply use the mock function and then test it
  mockTest([2, 5, 9, 10, 4], mockFunction);

  // how many times was the function called
  expect(mockFunction.mock.calls).toHaveLength(3);

  // printing data
  console.log(mockFunction.mock);

  //checking results
  expect(mockFunction.mock.results[1].value).toBe(20);

  // last call
  expect(mockFunction.mock.lastCall[0]).toBe(4);
});

// another mock with different return values
const customMock = jest.fn();
customMock
  .mockReturnValueOnce("first value")
  .mockReturnValueOnce("second value")
  .mockReturnValue("return value");

test("changing return values", () => {
  mockTest([2, 4, 6, 8, 10], customMock);
  // first call
  expect(customMock.mock.results[0].value).toBe("first value");
  // second call
  expect(customMock.mock.results[1].value).toBe("second value");
  // last call
  expect(customMock.mock.results[4].value).toBe("return value");
});
