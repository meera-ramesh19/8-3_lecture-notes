/**
 * 1. What is destructuring? Write a brief response below.
 */




/**
 * 2. Use destructuring to create three new variables from the following array.
 */


// /**
//  * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};






/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 */
//similar to shorthand downsides
/**
 * 5. Apply destructuring to the following function.
 */


  function getAstronautActivityStatus({isActive,name}) {
  
  let result = "";
  if (astronaut.isActive) {
    result = `${astronaut.name} is active.`;
   
  } else {
    result = `${astronaut.name} is not active.`;
   



  }
  return result;
}


const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};
console.log(getAstronautActivityStatus(astronaut))
console.log(getAstronautActivityStatus())

getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."

