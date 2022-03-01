/**
 * EXERCISE 1
 *
 * Get the sum of the elements of two arrays.
 * Each array includes only integer numbers.
 *
 * Example output:
 * 276 + 351 = 627
 */
 const prompt = require('prompt-sync')({sigint: true});
 let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
 let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
 
 function sumOfElements(arr1,arr2){
    let total=0
    if(arr1.length===arr2.length){
       for(let i=0;i<arr1.length;i++){
          
            total+=arr2[i]+arr1[i]
        }
     }
    return total
 
 }
 console.log(sumOfElements(arr_1,arr_2))
 
 
 /**
  * 
  * EXERCISE 2
  *
  * Using a for loop print all even numbers up to and including n.
  * Don’t include 0.
  *
  *  Print each item on a new line
  *
  * Example output:
  * 2
  * 4
  * 6
  * 8
  * 10
  * 12
  * 14
  * 16
  * 18
  * 20
  * 22
  */
 let n1 = 22;
 let printEven=''
 for(let i=1;i<=n1;i++){
    if(i%2===0){
       printEven+=`${i}\n`
    }
 
 }
 console.log(printEven)
 /**
  * EXERCISE 3
  *
  * Using a for loop output the elements in reverse order
  * with each item on a new line
  *
  * Example output:
  * true
  * 3
  * be
  * false
  * cannot
  * true
  * 9
  * what
  * 43
  *
  */
 let arr = [43, 'what', 9, true, 'cannot', false, 'be', 3, true];
 let printElements=''
 for(let i=arr.length-1;i>=0;i--){
      printElements+=`${arr[i]}\n`
 }
 console.log(printElements)
 
 /**
  * EXERCISE 4
  *
  * Given two arrays of integers, add up each element in the same position
  * and create a new array containing the sum of each pair.
  * Assume both arrays are of the same length.
  *
  * Example output:
  * [12, 7, 16]
  *
  */
 let arr_3 = [4, 6, 7];
 let arr_4 = [8, 1, 9];
 let sumOfPair=0
 let newArr=[]
 for(let i=0;i<arr_3.length;i++){
    newArr.push(arr_3[i]+arr_4[i])
 }
 console.log(newArr)
 
 /**
  * EXERCISE 5
  * Given a string change the every second letter to an uppercase ‘Z’.
  * Assume there are no spaces.
  *
  * Example output:
  * jZvZsZrZpZ OR each letter on a new line
  *
  * HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
  */
 let str1 = 'javascript';
 let newStr=''
 for(let i=0;i<str1.length;i++){
     if((i+1) % 2 === 0){
        newStr+=str1[i].toUpperCase()
     }else{
         newStr+=str1[i]
     }
 }
 console.log(newStr)
 /**
  * EXERCISE 6
  * Check if a string contains the letter “y”. Print “yes” if it does and “no”
  * if it does not.
  *
  * Example output:
  * yes
  */
 
 let str2 = `don't know why`;
 function containYOrN(){
     let result=''
     if(str2.includes('y')){
         result='yes'
      }else{
         result="no"
    }
   return result
 }  
 console.log(containYOrN(str2))
 /**
  * EXERCISE 7
  *
  * Given a number n, calculate the factorial of the number
  *
  * EXAMPLE input: 4, output: 24
  */
 
 let n2 = 4; //  4 * 3 * 2 * 1 = 24
 function factorial(n2){
 let factorial=1
 while(n2>0){
  factorial*=n2
  n2-=1
 }
 return factorial
 }
 console.log(factorial(8))
 console.log(factorial(2))
 /**
  * EXERCISE 8
  *
  * Write a program that will allow someone to guess a four digit pin
  * exactly 4 times. If the user guesses the number correctly.
  * It prints “That was correct!”
  *
  * Otherwise it will print “Sorry that was wrong.”
  *
  * Program stops after the 4th attempt of if they got it right.
  *
  * Example output:
  * Please make your guess:
  * 4544
  * Sorry that was wrong.
  * Please make your guess:
  * 4444
  * Sorry that was wrong.
  * Please make your guess:
  * 0704
  * That was correct!
  */

 function guessnumber(moneyPin){
 let result=''
 let attempt=1
 let guessPin=''
console.log("m=",String(moneyPin))
 while(attempt < 5 && guessPin!== moneyPin){
   
   guessPin=prompt("Please make your guess");
//    guessPin=(guessPin)
//    åßconsole.log(typeof pin,typeof guessPin,guessPin,moneyPin)

   if(guessPin===moneyPin){
       return "That was Correct"
       
   }
   attempt++
 }
  return attempt>=5?"sorry no more attempts left!!you couldn't guess the number":''
 
}

 let pin = '0704';
 console.log(guessnumber(pin))

 /** EXERCISE 9
  *
  * Write a program that will check if two strings are palindromes.
  * A palindrome is a word that spells the same forward and backward.
  * Palindrome: a word, phrase, or sequence that reads the same backward as
  * forward, e.g., madam or nurses run.
  *
  * Example output:
  * string1 palindrome?: Yes
  * string2 palindrome?: No
  */
 
 let str3 = 'racecar';
 let str4 = 'Java';
 function palindrome(str){
     
     let palin=true
     let count=0
    let j=str.length-1
    // console.log(len)
    for(let i=0;i<j/2;i++){
        if(str[i]!==str[j-i]){
            palin=false
            // count++
            // return false
             break
        }
    }
   return palin
    //return count===len/2?"Yes":"No"
 }
 console.log(palindrome(str3))
 console.log(palindrome(str4))
 /**
  * EXERCISE 10
  *
  * Write a program that finds the summation of every number from 1 to num.
  * The number will always be a positive integer greater than 0.
  *
  * EXAMPLE:
  * input: 2, 8
  * output: 36
  *
  * 1 + 2 = 3
  * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
  */
 
 let num1 = 2;
 let num2 = 8;
 
 function summationOfSeries(num){
     let sumOfSeries=0
     for(let i=num;i>=1;i--){
         sumOfSeries+=i
     }
     return sumOfSeries
 }

 console.log(summationOfSeries(2))
 console.log(summationOfSeries(8))

 