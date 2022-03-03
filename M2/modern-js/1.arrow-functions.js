/**
 * 1. Convert the greet() function to use the arrow function syntax instead of the function declaration syntax.
 */
const greet = (name) => {
  let result = "";
  if (name) {
    result = `Welcome to NASA, ${name}!`;
  } else {
    result = "Welcome to NASA, space cadet!";
  }
  return result;
};

// function name(name) {
//   let result = "";
//   if (name) {
//     result = `Welcome to NASA, ${name}!`;
//   } else {
//     result = "Welcome to NASA, space cadet!";
//   }
//   return result;
// }

console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"

/**
 * 2. Try writing the greet() function above on a single line.
 * Hint...
 * .
 * .
 * .
 * .
 * (you may need to use a ternary operator and an implicit return)
 */

const greet2 = (name) =>
  name ? `Welcome to NASA, ${name}!` : "Welcome to NASA, space cadet!";

console.log(greet2("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet2()); //> "Welcome to NASA, space cadet!"

/**
 * 3. Are there any benefits to using the arrow function syntax? Are there any limitations? Write a brief response below.
 */
<<<<<<< HEAD
//BENEFITS 
//concise
//potentially more readability
//easier to create anonymous function ( a function without a name)
// variable scope is the same
 


//BUt limitations
// arrow functions are not hoisted but regular functions are hoisted
// i.e.if it is called above initialized -gets an reference error

//phase 1-looks for variable and function names declared 
//phase 2- it then goes and executes lines by lines

//phase 1-for arrow functions this is ignored
//phase 2 -executed so there is not memory of the function name and variable. 
=======

// concise
// potentially more readable
// easier to create 'anonymous functions' (a function without a name)

// BUT

// arrow functions aren't hoisted
>>>>>>> beaf787b4274c1cdb24dc243b013e713d077e8b2
