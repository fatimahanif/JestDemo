exports.mockTest = (list, callback) => {
  list.map((value) => (value % 2 == 0 ? callback(value) : 0));
};
