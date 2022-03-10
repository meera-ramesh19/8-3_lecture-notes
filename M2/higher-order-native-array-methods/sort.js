/**
<<<<<<< HEAD
 * 
 * Array.osrt() ->a higher order native arry method
 * 
 * Description:
 * sorts the array alphabetically (are convered to strings)and then returns the sorted mutated array(into UTF-16)
 * it is not neccessary to stoe the output of the sort method in a new variable
 * because teh method mutaes the array directly---it is destructive method
 * 
 * Sideeffects: yes there are side effects, mutating the original array
 * 
=======
 * Array.sort() --> a higher order native array method
 * Description:
 * sorts the array ALPHABETICALLY (element values are converted to strings, and then compared according to their UTF-16 values)
 * and then returns the mutated, sorted array
 * it is NOT necessary to store the output of the sort method in a new variable
 * because the method mutates the array directly --> it is destructive!!
 *
 * Side Effects: yes, there are side effects, namely mutating the original array
 *
 * Return values: yes, it returns the sorted array
 *  sort() expects the callback to return either:
 *   currentPen is <       nextPen is <     currentPen === nextPen
 *   -1                    1                0
 *   no swap               nextPen swaps    no swap
 *
 * Mutates the original array?: YES
 */

const pens = [
  {
    brand: 'g2',
    style: 'ballpoint',
  },
  {
    brand: 'crayola',
    style: 'crayon',
  },
  {
    brand: 'claire fontaine',
    style: 'fountain',
  },
  {
    brand: 'Pilot',
    style: 'ballpoint',
  },
  {
    brand: 'sharpie',
    style: 'marker',
  },
  {
    brand: 'crayola',
    style: 'marker',
  },
];

let penNames = pens.map((pen) => pen.brand);

console.log(penNames.sort());

// 1st loop: currentPen pens[0], nextPen pens[1]
// 2nd loop: currentPen pens[1], nextPen pens[2]
// 3rd loop: currentPen pens[2], nextPen pens[3]
// 4th loop: currentPen pens[3], nextPen pens[4]
// 5th loop: currentPen pens[4], nextPen undefined

// TODO: fix this comparison so that the objects are sorted alphabetically according to their name vs UTF-16
console.log(
  pens.sort(function (currentPen, nextPen) {
    const currentBrand = currentPen.brand.toLowerCase();
    const nextBrand = nextPen.brand.toLowerCase();
    if (currentBrand < nextBrand) {
      return -1;
    } else if (currentBrand > nextBrand) {
      return 1;
    }

    return 0;
  }),
); // callback is optional

let numbers = [34, 123, 123, 6, 1, 345, 22, 11111];

console.log(numbers.sort()); // SORTED ALPHABETICALLY / LEXICOGRAPHICALLY

// TODO: create a callback to sort numbers numerically

console.log(
  numbers.sort((current, next) => {
    if (current < next) {
      return -1;
    } else if (current > next) {
      return 1;
    }

    return 0;
  }),
);

console.log(
  'shortcut for sorting numbers!',
  numbers.sort((a, b) => a - b),
  // 1st loop: 34 - 123 (negative number) --> -1
  // 2nd loop: 123 - 123 (0) --> 0
  // 3rd loop: 123 - 6 (positive number) --> 1
);

/**
>>>>>>> 99a87488657b19459f6a7ed5083299d303c5a5e3
 * 1
 * Return Values:yes it returns the sorted array
 *sort expects the callback to return either 1 , -1 or 0
 * 
 * current  is < return -1 no swap
 * next     is  <    return 1     next swaps
 * current==next return 0 no change
 * 
 * 
 * The .sort() method sorts elements in an array. Although the functionality is very different, in what ways is it similar to .every() and .some()?
 */
 const pens =[
   {
   name: 'g2',
   style:'ballpoint',
   },
  {
  name: 'pilot',
  style:'ballpoint',
  },
  {
  name: 'claire fontaine',
   style:'fountain',
   },
   {
    name: 'sharpie',
     style:'marker',
     },
     {
      name: 'crayola',
       style:'marker',
       },
   ];
   //TODO:fix this comparison so that the objects are sorted alphabetically
   //according to their name vs UTF-16

   console.log(pens.sort(function(currentPen,nextPen){
     let res;
     if(currentPen.brand.toLowerCase() < nextPen.brand.toLowerCase()){//currentPen.brand <nextPen.brand
       res=currentPen//return -1
     }else{ //(currentPEn.brand.toLowerCase() > nextPen.brand.toLowerCase()< 1
       res=nextPen// return 1
     }
        return res//return 0
   })
   )
   console.log(pens.sort())//callback is optional in sort
/**
 * 
 */
  let numbers=[34,121,6,1,345,22,1111]
  console.log(numbers.sort())
 /* //TODO: 
 */ 
 console.log(pens.sort(function(currentPen,nextPen){
     let res;
     if(currentPen < nextPen){//currentPen.brand <nextPen.brand
       res=currentPen//return -1
     }else{ //(currentPen() > nextPen()< 1
       res=nextPen// return 1
     }
        return res//return 0
   })
   )
   console.log(pens.sort())
 
 /*  Calling the .sort() method looks like it might magically work, depending on the elements in the array it is sorting.
 */

const numArr1 = [4, 2, 3, 1, 0];
const res1 = numArr1.sort((a,b) => a-b);
console.log(res1); //> [ 0, 1, 2, 3, 4 ]

/**
 * 3
 *
 * However, it can have unexpected results.
 */

const numArr2 = [11, 1, 0, 22, 2];
const res2 = numArr2.sort();
console.log(res2); //> [ 0, 1, 11, 2, 22 ]

/**
 * 4
 *
 * In general, you should not use the .sort() method without a callback function. However, can you describe why the .sort() method is organizing the numbers above in this way?
 * we Can use but it sorts lexicographically and might not give the right answer
*
*/

/**
 * 5
 *
 * The .sort() method expects one argument. What data type is this argument?
 *
  *callback function
/**
 * 6
 *
 * The .sort() method's callback function has up to two parameters. What are these parameters?
 * comparison elements
 */

/**
 * 7
 *
 * The .sort() method's callback function expects a number to be returned. The number must either be a positive number, a negative number, or 0. What is the effect of each of these values?
 *
*
*  it compares two elemens and returns 1, -1 or 0 and they are sorted to check if the UTF code is greater or
*   lesser than the value
/**
 * 8
 *
 * The code below sorts numbers appropriately. Based on what you know about sort() will the numbers be sorted in ascending order (i.e. 0, 1, 2...) or descending order (i.e. 22, 11, 2...)?
 */

const numArr3 = [11, 1, 0, 22, 2];
const res3 = numArr3.sort((a, b) => {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
});

console.log(res3);

/**
 * 9
 *
 * Is .sort() a destructive or non-destructive method?
 * yep it is a destructive method
 */

/**
 * 10
 *
 * Take a look at the table below. What does each column mean?
 *
 * Method  | Callback return value  |  Method return value | Destructive?
 * .every()| Boolean 	              |  Boolean 	           | No
 * .some() | Boolean 	              |  Boolean 	           | No
 * .sort() | Number                 |  An array            | Yes
 * name of the method,what the callback function returns, what the method returns and if it changes the original array , object or a variable value
 */
