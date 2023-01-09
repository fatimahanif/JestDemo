exports.sum = (a, b) => {
  return a + b;
};

exports.sumArrayOfObjects = (list) => {
  return list.map((value) => (value = value.a + value.b));
};

exports.sumArray = (list) => {
  let sum = 0;
  list.forEach((value) => (sum += value));
  return sum;
};
