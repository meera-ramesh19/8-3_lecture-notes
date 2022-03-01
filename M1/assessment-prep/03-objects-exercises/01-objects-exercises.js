/**
 * 1
 * Write a function to return the keys of a  object.
 *
 * example output: name,sclass,rollno
 */
const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

function returnKeys(student){
 return  Object.keys(student)
}

console.log(returnKeys(student))
/**
 * 2
 * Write a function to delete the rollno property from the following object.
 * Print the object before AND after deleting the property.
 */
function deleteRollNo(student){

  delete student.rollno
  console.log(student)
}
console.log("student", student)
console.log(deleteRollNo(student))
/**
 * 3
 *
 * Write a function to get the length of a  object.
 */
function objectLength(student){
   return Object.keys(student).length
}
console.log(objectLength(student))
/**
 * 4
 *
 * Write a  function to print the data or each book on a single line (i.e. display book name, author name and reading status) of the following books.
 */

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

function displayObject(library){
  let str=''
   for(let obj of library){
     str+=`${obj.author} ${obj.title} ${obj.readingStatus}\n`
   }
  return str
}
console.log(displayObject(library))
/**
 * 5
 *
 * Write a function given the radius of a circle
 * to calculate and return the area and perimeter of a circle.
 *
 */
function radiusCircle(radius){
  let area=0,
       perimeter=0

  perimeter=2*Math.PI*radius
  area=(Math.PI *radius)**2

  return `Area is ${area} and the perimeter is ${perimeter}`

}
console.log(radiusCircle(5))
/**
 * 6
 * 
 * Write a  function to return a sorted array of objects by the libraryID
 * 
 * example output:
  library=  [
      {
        author: "Bill Gates",
        libraryID: 1254,
        title: "The Road Ahead"
      },
      {
        author: "Suzanne Collins",
        libraryID: 3245,
        title: "Mockingjay: The Final Book of The Hunger Games"
      },
      {
        author: "Walter Isaacson",
        libraryID: 4264,
        title: "Steve Jobs"
      },
    ]
*/
let books=  [
  {
    author: "Bill Gates",
    libraryID: 1254,
    title: "The Road Ahead"
  },
  {
    author: "Suzanne Collins",
    libraryID: 3245,
    title: "Mockingjay: The Final Book of The Hunger Games"
  },
  {
    author: "Walter Isaacson",
    libraryID: 4264,
    title: "Steve Jobs"
  },
]
function sortedArr(arr){
  for(var i = 0; i < arr.length; i++){
     
    // Last i elements are already in place  
    for(var j = 0; j < ( arr.length - i -1 ); j++){
        
      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(arr[j].libraryID > arr[j+1].libraryID){
          
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
console.log(sortedArr(books))

/**
 * 7
 *
 * Write a  function to convert an object into a list of `[key, value]` pairs.
 */

const book = {
  author: 'Bill Gates',
  libraryID: 1254,
  title: 'The Road Ahead',
};
const arr = Array.from(Object.keys(book), k=>[`${k}`, book[k]]);
console.log(arr)
let  result =Object.entries(book)
console.log(result)
  
/**
 * 8
 * 
 * Write a  function to get a copy of the object
 * where the keys have become the values and the values the keys.
 * 
 * example output: */
  let bookInfo={
    bill_gates: "author",
    1254: "libraryID",
    the_road_ahead: "title"
  };

  // const arr = Array.from(Object.keys(book), k=>[`${k}`, book[k]]);
  // console.log(arr)
  function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
  }
  let invert = function (obj) {

    var new_obj = {};
  
    for (var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
      }
    }
  
    return new_obj;
  };
  console.log(swap(bookInfo))
  console.log(invert(bookInfo))
  // function swapKeysAndValues(obj) {
  //   // 👇️ [['color', 'blue'], ['fruit', 'apple']]
  //   const swapped = Object.entries(obj).map(
  //     ([key, value]) => [value, key]
  //   );
  
  //   return Object.fromEntries(swapped);
  // }
  
  // // 👇️ {color: 'blue', fruit: 'apple'}
  // console.log(
  //   swapKeysAndValues({blue: 'color', apple: 'fruit'})
  // );
  
/**
 * 9
 *
 * Write a  function to check whether an object contains given property.
 *
 */
let fruits={color: 'blue', fruit: 'apple'}
let fruitProp=fruits.hasOwnProperty('species')
console.log(fruitProp)
 fruitProp=fruits.hasOwnProperty('color')
console.log(fruitProp)

