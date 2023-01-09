// using 1 undefined and 2 null just to demonstrate
exports.isPrime = (number) => {
  if (number === 1) {
    return undefined;
  } else if (number === 2) {
    return null;
  } else {
    for (var x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }
};
