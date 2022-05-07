/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let arrayOfAllNames =[]
  if (people.length===0) return null

   for(person of people){
       arrayOfAllNames.push(person.name)
   }
   return arrayOfAllNames
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
 function findPersonByName(people, name) {

  let result=null
  let lowerCaseName=''
  for(let person of people){
    lowerCaseName=person.name.toLowerCase()
    if(name.toLowerCase()===lowerCaseName){
        // return person
        result=person
    } 
  }
  // return null
  return result
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let arrOfPeopleUnderAge=[]
  for(person of people){
    if (person.age < 25){
      arrOfPeopleUnderAge.push(person)
    }
  }
  return arrOfPeopleUnderAge
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  
    let emailAddressArr=[]
    for(person of people){
      if(person.email){
         if(person.email.includes('gmail.com')){
                emailAddressArr.push(person)
          }
        }
     }
     return emailAddressArr
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
