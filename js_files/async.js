// babel configuration required
const axios = require("axios");

exports.user = async () => {
  let res;
  try {
    res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return res;
  } catch (error) {
    return error;
  }
};
