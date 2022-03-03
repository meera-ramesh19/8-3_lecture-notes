/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

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
/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
function greet(name) {
 
    result = `Welcome to NASA, ${name}!`;
  
  return result;
}
const greet = (name="space cadet")=> 'Welcome to NASA,${name}'

consoel.log(greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
//uses
//removing conditinla logic from out functions definitions
//drawbacks
//default values that are arrays or objects
