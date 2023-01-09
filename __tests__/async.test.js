// testing asynchronous code

const { user } = require("../js_files/async");
const axios = require("axios");

// promises
test("testing async await using get", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  expect(res.status).toBe(200);
});

test.only("testing async await from code in file", async () => {
  const res = await user();
  expect(res.status).toBe(200);
});

test("testing number of assertions", async () => {
  // expect.assertions(1);
  let res;
  try {
    res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    expect(res).not.toBeNull();
    console.log(res.data);
  } catch (error) {
    console.log(error);
    expect(error).not.toBeNull();
  }
  // expecting that atleast one assertion was called
  expect.assertions(1);
});
