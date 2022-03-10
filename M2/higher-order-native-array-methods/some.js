/**
 *
 *  array.some()  => a higher order native array method
 * Description: return is true if there are ANY elements for which tha call back evaluates to true
 *
 * returns false if there are any elements that evaluated to false
 *
 * SideEffects: not recommended to use sideeffects
 * 1
 *
 *Return values: boolean[true if found, false if not found]
 * const pens =[
 * {
 * name: 'g2',
 * style:'ballpoint',
 * },
 * {
 * name: 'pilot',
 * style:'ballpoint',
 * },
 * {
 * name: 'claire fontaine',
 * style:'fountain',
 * },
 * ];
 *
 *
 * some expects a callback whihc returns a value of true or false
 * any value that is not true, will cause some() to interpret the value as falsy
 *
 * console.log(pen.some((pen) => return pen.style==='ballpoint'))//true
 *
 * console.log(pen.some((pen) => return pen.kind))//false
 *
 *
 * * console.log(pen.some((pen) => return pen.style))//true
 *
 * console.log(pen.some((pen) => return undefined))//false
 */
/**
 * 1
 *
 * How does the .some() method differ from the .every() method? How is it similar?
 *
 * it is similar as it returns boolean and stop execution after the first true evaluation occurs
 *  and different as it just check if one or more elements satisy the condition
 */

/**
 * 2
 *
 * Take a look at the following code. How many times does the isWebComic() function get called? How could you confirm?
 * it executes only twice  when the value evaluates to false it breaks the loop
 *
 *
 *
 *
 *
 *
 *
 */

const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: null, author: "Joshua Barkman", kind: "web" },
];

function isWebComic(comic) {
  return comic.kind === "web";
}

const result = comics.some(isWebComic);
console.log(result); //> true
