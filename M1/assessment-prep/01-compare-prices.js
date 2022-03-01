// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
const priceOfHouse = '€1.500.000';
const priceOfCar = '€20.000';


let convertedPriceOfHouse = priceOfHouse.slice(1)
let convertedPriceOfCar = priceOfCar.slice(1)

convertedPriceOfHouse=convertedPriceOfHouse.replaceAll('.','')
 convertedPriceOfCar= convertedPriceOfCar.replaceAll('.','')
 console.log(convertedPriceOfHouse,convertedPriceOfCar)

 if(convertedPriceOfHouse > convertedPriceOfCar){
   console.log("house is expensive")
 }else  if(convertedPriceOfHouse < convertedPriceOfCar){
   console.log("car is expensive")
  }


