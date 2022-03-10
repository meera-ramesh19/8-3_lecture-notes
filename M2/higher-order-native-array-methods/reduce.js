/**
 * 
 * Array.reduce() -a higher order native array method
 * 
 * Description:
 * Take an array and using a callback function (anonymous or named), will
 * apply an accumulation and return a single value. it there are no elements
 * in the array, the default value will be the second(optional)
 * argument passed to reduce
 * 
 * SideEffects:not recommended
 * 
 * Return values:a single value, the acccumulation of the array
 *
 *  Mutates teh original array :no
 * 
 * all the methods do not modify the array
 * find returns undefined if no value found and returns true if the first element
 * 
 * some stops iterating when the value is found and its return value is true
 * 
 * reduce returns a value number or a string as it accumulates, it traverses
 * through the whole array
 */






/**
 * 1
 *
 * Summing all the numbers in an array:
 */
//accumulator patterns
//1 result/return default value type
//2 loop
//3 accumulate


function sum(arr){
  let res=0
  for(let i=0;i<arr.length;i++){
    res+=arr[i]
  }
  return res
}
const numbers=[1,2,3,4,7,8,9]
//accumulator pattern+higher order function
//write a higher order function
function getArrSum(arr,callback){
  let res=0//accumulator varaible
  //handle the loop
  for(let ele of arr){
    res=callback(res,ele)//accumulator is updated
  }

//return the default value and type
  return res
}



//pass in a sum callback function
function getSum(a,b){
  //accumulate
  return a+b
 }

console.log(getArrSum(numbers, getSum))

//accumulator pattern+reduce native array method
numbers.reduce((accumulator,currentValue)=>{//step2 of accumulator
  //pattern abstracted by native array method definition
  //step3 : accumulation operaion(this is what we handle as devs)
  return accumulator+currentValue //in the background the accumulator value
  //is updated to equal this result of this expression

},0)

let arr1 = [1, 2, 3, 4];
let sum1 = arr1.reduce((acc, el) => {
  return acc + el;
});

console.log(sum1); // => 10

/**
 * 2
 *
 * In this example we did not pass reduce the optional initialValue argument. This means that acc started as 1 and el started as 2.
 *
 * acc = 1    el = 2    return 1 + 2 -> 3 our next acc
 * acc = 3    el = 3    return 3 + 3 -> 6
 * acc = 6    el = 4    return 8 + 3 -> 10
 */

/**
 * If we wanted to find the sum of all the number in an array and have 5 added to that number, we could do this by passing in the second argument (initialValue) to the reduce function.
 */

let arr2 = [1, 2, 3, 4];
let sum2 = arr2.reduce((acc, el) => {
  return acc + el;
}, 5);

console.log(sum2); // => 15

/**
 * 3
 * The same as above but if we'd declared it with a name like:
 */

const adder = (num1, num2) => {
  return num1 + num2;
};

let sum3 = arr2.reduce(adder, 5);

console.log(sum3); // => 15
