/**
 * array.every()  => a higher order native array method
 * return is true if every evaluated expression in the anonymous function is true
 * returns false if any evaluated expresssion is false
 * SideEffects: Are not recommended
 * 1
 *Return values:
 *
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
 * function fountainpens(arr){
 *   let res=true
 *   for(let pen of arr){
 *    if (pen.style!=='fountain') return false
 *    }
 *  return res
 * }
 * console.log('is fountain', fountainpens(pens))
 * 
 * 
 * //every method for fountainpens
 * 
 * const isfountain(pen) => pen.style ==='fountain'
 * function everyPen(pens){
 *       return pens.every(isfountain)
 * }
 * 
 * The .every() method expects at least one argument. What data type is this argument?
 * What is a callback function?
 *
 * It takes a callback function as an argument. A call back function is a function where a function is 
 * passed as a parameter or is returned as function 
 /**
 * 2
 *
 * The .every() method's callback function has up to three parameters. What are these parameters?
 *
 *    element,index,array
 * 
/**
 * 3
 *
 * Take a look at the following code, which is incomplete. Based on how the code reads, what do you expect the .every() method to do?
 *
*/

const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: null, author: "Joshua Barkman", kind: "web" },
];

function isPrintComic(comic) {
  return comic.kind === "print";
}

const arePrintcomics = comics.every(isPrintComic);
console.log(arePrintcomics); //> false
/* the function returns true if all the elements are true and returns false it atlest one element is false


/**
 * 4
 *
 * Update the code below so that it uses the .every() method instead of a for loop. Inside of allcomicsHaveTitles() you will have to write another, anonymous function.
 */

function allcomicsHaveTitles(comics) {
  let result = true;
  for (let comic of comics) {
    if (!comic.title) result = false;
  }
  return result;
}

const haveTitles = allcomicsHaveTitles(comics);
console.log(haveTitles); //> false
let haveTEveryitles = allcomicsHaveTitles.every(
  (comics) => comics === comics.title
);
console.log(haveTEveryitles);

/**
 * 5
 *
 * The callback function inside of the .every() method coerces the returned value into a boolean. What does the previous sentence mean? Describe in your own words.
 *
 * 

*/
