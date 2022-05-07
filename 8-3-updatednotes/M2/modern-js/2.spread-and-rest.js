/**
 * 1. "Rest" and "spread" share the same syntax. What is that syntax? Write a brief resposne below.
 */

/**
 * 2. Is the code below an example of the "rest" or "spread" syntax? How do you know? Write a brief response.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [first, ...others] = astronauts;

//this is a rest operation
 // if it happens on the lefthand side of equal operator it is a rest operator
console.log(first) //string Jessica watkins
console.log(others) //array  [ "Robert Shane", "Nicole Mann"];
//if it happens on the righthand side of equal sign it is spread
// if it happens on the lefthand side of equal operator it is a rest operator
//if creating a variable it is a rest
//if you are referencing a variable it si a spread
/**
 * 3. Is the code below an example of the "rest" or "spread" syntax? How do you know? Write a brief response.
 */
const beforeEarth = ["Mercury", "Venus"];
const afterEarth = ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const allPlanets = [...beforeEarth, "Earth", ...afterEarth];

//this is a spread operator 
// if it happens on the righthand side of equal sign it is spread
 console.log(allPlanets)
/**
 * 4. Take a look at the code below. What do you expect will be logged to the console? Write your answer below.
 */
function getPlanetsCount(...planets) {//a rest operator
  let result;

  if (planets.length === 1) {
    result = `There is 1 planet!`;
  } else {
    result = `There are ${planets.length} planets!`;
  }

  return result;
}

const count = getPlanetsCount("Mercury", "Venus", "Earth", "Mars");
console.log(count);

/**
 * 5. What are the benefits of using the rest or spread syntax? Are there any limitations? Write a brief response below.
 */


//benefits 
//shorter code ,when using big array or large data structures
//rest operators are helpful when you do not know the number of arguments
//no downsides to think about yet
