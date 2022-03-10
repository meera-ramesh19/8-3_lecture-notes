/**
<<<<<<< HEAD
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
=======
 * Array.some() --> a higher order native array method
 * Description:
 * Return true if there are ANY elements for which the callback evaluate to true
 * Returns false if there are NO elements for which the callback evaluates to true
 *
 * Side Effects: NOT recommended to use side effects
 *
 * Return values: boolean (true if there are some matches, false if not)
 */

const pens = [
  {
    name: 'g2',
    style: 'ballpoint',
  },
  {
    name: 'claire fontaine',
    style: 'fountain',
  },
  {
    name: 'pilot',
    style: 'ballpoint',
  },
];

console.log(
  'There are fountains in this pen case:',
  pens.some((pen, index, array, thisArg) => {
    // some() expects a callback which returns a value of true or false
    // any value that is not true, will cause some() to interpret the value as falsy
    console.log(`index ${index}, array: ${array}, thisArg: ${thisArg}`);
    return pen.style === 'fountain'; // all this line does without a return value is evaluate an expression
  }),
);

>>>>>>> 99a87488657b19459f6a7ed5083299d303c5a5e3
/**
 * 1
 *
 * How does the .some() method differ from the .every() method? How is it similar?
 *
<<<<<<< HEAD
 * it is similar as it returns boolean and stop execution after the first true evaluation occurs
 *  and different as it just check if one or more elements satisy the condition
=======
 * SIMILAR
 * both return a boolean value
 * [1, 2, 3, 4, 5]
 * condition: a % 2 === 0
 *
 * They take the same kind and number of arguments, including optional ones
 *
 * DIFFERENT
 * some returns true when one element meets the condition // some is logical OR
 * 1 OR 2 OR 3 OR 4 OR 5 will evaluate to true
 * every returns true only when all elements meet the condition // every is logical AND
 * 1 AND 2 AND 3 AND 4 AND 5 evaluates to true
 *
 * if (1 % 2 === 0
 * && 2 % 2 === 0
 * ....) {
 *  return true
 * }
 *
 *
 *
>>>>>>> 99a87488657b19459f6a7ed5083299d303c5a5e3
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
<<<<<<< HEAD
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: null, author: "Joshua Barkman", kind: "web" },
];

function isWebComic(comic) {
  return comic.kind === "web";
=======
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: null, author: 'Joshua Barkman', kind: 'web' },
  { title: null, author: 'Joshua Barkman', kind: 'web' },
];

function isWebComic(comic) {
  console.log(comic);
  return comic.kind === 'web';
>>>>>>> 99a87488657b19459f6a7ed5083299d303c5a5e3
}

// higher order function similar to the logic of the native array method Array.some()
const some = (array, callback) => {
  for (let el of array) {
    let res = callback(el);
    if (res === true) {
      return true;
    }
  }
  return false;
};

const result = comics.some(isWebComic); // callback is called for every element that is processed
console.log(result); //> true
console.log(some(comics, isWebComic));

/**
 * 3
 *
 * How are the find() and some() methods:
 *
 * SIMILAR
 * method execution stops after the first true evaluation occurs
 *
 * DIFFERENT
 * find() returns an element
 * some() returns a boolean
 */
