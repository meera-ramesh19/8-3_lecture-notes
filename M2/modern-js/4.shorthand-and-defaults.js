/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

<<<<<<< HEAD
const fullName ={
  //string:variable
  first: first,
  middle:middle,
  last:last

}

console.log(fullName)
//object short hand 
// if the key and the value pair have the same name then the value can be skipped and the 
//key name is the same
//it converts the variable assignment operator * into the key/val associated with ':'
=======
// create an object with three key value pairs: { first: "Nicole", middle: "Aunapu", last: "Mann" }
const fullName = {
  first,
  middle,
  last,
};

// Object short-hand converts the variable assignment operator "=" into the key/val associator operator ":"

>>>>>>> beaf787b4274c1cdb24dc243b013e713d077e8b2
/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */

// shorter!

// BUT

// you're stuck with the same names

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
<<<<<<< HEAD
function greet(name) {
 
    result = `Welcome to NASA, ${name}!`;
  
  return result;
}
const greet = (name="space cadet")=> 'Welcome to NASA,${name}'

consoel.log(greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"
=======
const greet = (name = "space cadet") => `Welcome to NASA, ${name}!`;

console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"
>>>>>>> beaf787b4274c1cdb24dc243b013e713d077e8b2

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
<<<<<<< HEAD
//uses
//removing conditinla logic from out functions definitions
//drawbacks
//default values that are arrays or objects
=======

// removing conditional logic from our function definitions
// BUT
// you have to be careful about default values that are arrays or objects
>>>>>>> beaf787b4274c1cdb24dc243b013e713d077e8b2
