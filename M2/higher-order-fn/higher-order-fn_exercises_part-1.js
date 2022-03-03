/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

function truthy() {
  return true;
}

function falsy() {
  return !truthy();
}

falsy(); //> false

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

function left() {
  return "Left";
}

function right() {
  return "Right";
}

function go(goLeft = true) {
  return goLeft ? left : right;
}

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

go("Left", storeDirections);
go("Right", storeDirections);
go("Up", storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]

/**
 * Take a look at the higher order function below.
 * The transform() function expects, as its second argument, a function that accepts at least one argument.
 */

function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}

const capitalize = () => {};

// named
transform("hello", capitalize);

// anonymous
transform("hello", function (text) {});

/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 *
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */
transform("hello", function (text) {
  return text.toUpperCase();
});

transform("hello", function (text) {
  return text.toLowerCase();
});

transform("hello left right", function (text) {
  return text.split(" ").join("-");
});

transform("up Down left", function (text) {
  
    
});
/**
 * Write a fn called each which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The each fn loops through the given array and runs the callback function on each of it's elements.
 */
function each(arr, fn) {
  //parameter function  fn is the callback
  // write your code here
  //loop the array
  //run the funciton on each element
  for (let ele of arr) {
    fn(ele);
  }
}

// The following call to each should print
// 1
// 2
// 3
// 4
each([1, 2, 3, 4], function (value) {
  //defining the callback
  console.log(value);
});

// The following call to each should print
// 2
// 4
// 6
// 8
each([1, 2, 3, 4], function (value) {
  console.log(value * 2);
});

/**
 * Write a fn called map which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The map fn should return a new array where each new element is
 * the return value from the anonymous function with the argument as the original element value.
 */
function map(arr, fn) {
  //loop through the arr
  //run the function on the element
  let result = [];
  for (let ele of arr) {
    result.push(fn(ele));
  }
  return result;
}

// The following call to map should return
// [2, 4, 6, 8];
console.log(
  map([1, 2, 3, 4], function (value) {
    return value * 2;
  })
);

/**
 * Write a fn called reject which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The reject fn should return a new array containing all of the values that do not return true to the callback
 */
function reject(arr, fn) {
  //loop through the array
  //create a new array
  //store the callback fn return value in a variable
  // variable is false add the value to the array
  let rejects = [];
  // write your code here
  for (let ele of arr) {
    let isAccepted = fn(e)
    if (!isAccepted) {
      rejects.push(ele);
    }
  }
  return rejects;
}

// The following call to reject should return
// [1, 2];
console.log(reject([1, 2, 3, 4], function (value) {
  //
  return value > 2;
})
);

// The following call to reject should return
// [3, 5];
reject([2, 3, 4, 5], function (value) {
  return value % 2 === 0;
});
