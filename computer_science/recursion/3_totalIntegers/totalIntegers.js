let totalIntegers = function (array) {
  let result = 0;
  if (typeof array !== "object") {
    return undefined;
  }
  for (let key in array) {
    if (typeof array[key] == "object") {
      result += totalIntegers(array[key]);
    } else if (typeof array[key] !== "string" && Number.isInteger(array[key])) {
      result++;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = totalIntegers;
