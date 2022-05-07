/**
 * 1. What is destructuring? Write a brief response below.
 */
//unpacking individual parts of an object or Array/
//inverse of object shorthand

/**
 * 2. Use destructuring to create three new variables from the following array.
 */
const astronauts = ["Jessica Watkins",[ "Robert Shane"], "Nicole Mann"];
const [as1,as2,as3] = astronauts
console.log(as1,as2,as3)
console.log(typeof as2)//object
/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};

const { name, isActive,occupation } = astronaut

/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 */
//similar to shorthand downsides
/**
 * 5. Apply destructuring to the following function.
 */
function getAstronautActivityStatus(astronaut) {
 // function getAstronautActivityStatus({isActive,name}) {
  let {isActive, name} = astronaut
  let result = "";
  if (isActive) {
    //result = `${astronaut.name} is active.`;
    result = `${name} is active.`;
  } else {
    //result = `${astronaut.name} is not active.`;
    result = `${name} is not active.`;
  }
  return result;
}

const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};

getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."

//more than one return values
const getName =() =['myra','meera']
const [first,last] =getName()