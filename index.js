// Function that receives a function and calls it
function receivesAFunction(callback) {
  callback(); // Just call the function
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function.");
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function.");
  };
}

// Export the functions so the test suite can access them
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
