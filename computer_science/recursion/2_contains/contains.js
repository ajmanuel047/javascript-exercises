const contains = function (objec, value) {
  // let result;
  for (let keys in objec) {
    if (Object.is(objec[keys], value)) {
      return true;
    }
    if (typeof objec[keys] === "object" && objec[keys] !== null) {
      if (contains(objec[keys], value)) {
        return true;
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
