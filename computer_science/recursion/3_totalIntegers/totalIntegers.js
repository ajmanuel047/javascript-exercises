let totalIntegers = function (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result += totalIntegers(array[i]);
    } else {
      result++;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = totalIntegers;
