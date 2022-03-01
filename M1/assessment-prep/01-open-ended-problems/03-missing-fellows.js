// Setup: oH NOooOoO My cAPs-loCk KeY IS jaMMEd Up!
// When I entered all of the 8.3 fellows in our salesforce database into a google sheet,
// all of the names got mixed up with capital letters! On top of that
// I might have accidentally deleted some of them :(

// Challenge: Write a program that prints out the names of any 8.3 fellows that are in the salesforce database but 
//missing from the google sheet.

// Hints:
//   -> Try to break up this problem into smaller checkpoints.
//   -> Run your code frequently. Before you use node to run your code, predict what you will see in the terminal.
// If your predictions are off, figure out why!

const salesforceData = [
  "Abdullah Tasfiek",
  "Antonio Shivers",
  "Augusto Rupay",
  "Bethany Torres",
  "Candace Garvin",
  "Derek Peterson",
  "Edwin Codrington",
  "Emalee Soto",
  "Hermanclyde Guerrero",
  "Isaac Gonzalez",
  "Jan-Carlos Matias",
  "Jonathan Scheiber",
  "Josie Pascasio",
  "Juan Sebastian Bowers",
  "JuHao Chen",
  "Jyoti Singh",
  "Karyn huston",
  "Kedari Matthews",
  "Krystal Mansour",
  "Krystelle Gaston",
  "Lawrence Chen",
  "Lily Wu",
  "Luis Ortiz",
  "Matthew Munroe",
  "Meera Ramesh",
  "Michelle Ortega",
  "Nikesh Wankhade",
  "Oscar Varon",
  "Pratima Roy",
  "Rebecca Garcia",
  "Shamar Reeves",
  "Shaquala Fredericks",
  "Stephanie Frias",
  "Taryne Leach Gonzalez",
  "Trevor Triumph",
];

let googleSheetsData = [
  "JuhaO cheN",
  "krYSTal MANsOUR",
  "jYotI SiNGH",
  "isaac gONZAleZ",
  "PraTimA roy",
  "LIly Wu",
  "Jan-CarLOS maTiAS",
  "NiKeSH WankhAde",
  "SHAMAR reEvES",
  "oscar VARon",
  "rebEcCA gArcIa",
  "SHAqUALA freDerIcks",
  "JonAthAn SCHEIBEr",
  "TARyNe LEaCH GONZalez",
  "miChelLE ORtega",
  "jOsiE PAscASIo",
  "cAndace gArVIn",
  "KEdaRi mATtHEwS",
  "augUsTo RUPAy",
  "JuAn sebASTIan BOwErs",
  "EDwiN CODRiNgTOn",
  "mEeRA RAmeSH",
  "BEtHANY toRreS",
  "MaTtHEW MunROE",
  "KRYSTeLLE GAston",
  "HErmANCLYde GuErrErO",
  "karyn HustOn",
  "lawRENce cHEN",
  "deREk pETeRSOn",
  "ANToNIO shIVeRs",
];

let sorted=googleSheetsData.sort((a,b)=>  a>b ?1:a<b ?-1:0 ) 

//check out this ---https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
//arr2.filter((find(arrobj=>arrobj.prop1===val))

//arr and check are two arrays
//found=false
//for loopin throuhgh check
//if ArrayBuffer.indexOf(check[i]>-1) found=true break

function check(salesforceData,googleSheetsData) {
  let newArr=[]
 
  for (let i = 0; i < salesforceData.length; i++) {
       let j
      for (j = 0; j < googleSheetsData.length; j++) {
        
        if (salesforceData[i].toLowerCase() == googleSheetsData[j].toLowerCase()){

              break
             
          }

        }
        console.log(j,googleSheetsData.length)
          if(j === googleSheetsData.length){
            newArr.push(salesforceData[i])
          }
          
         
   }
  // console.log(newArr)
  return newArr
}
let arr=check(salesforceData,googleSheetsData)
console.log(arr,arr.length)

//Different ways to check the elements in two arrays
// cehckArray(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       }
//     }
//   }
//   // Return if no common element exist 
//   return false;
// }

// const compareArraysWithIncludes = (arr1, arr2) => {
//    const [smallArray, bigArray] =
//       arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1];

//    for (let i = 0; i < smallArray.length; i++) {
//      return bigArray.includes(smallArray[i]);
//    }

//     return false;
//   };
// /salesforceData,googleSheetsData
// function Check(salesforceData,googleSheetsData) {
//   //var myarr = ["apple", "banana", "orange"];
//   var i, j;
//   var totalmatches = 0;
//   for (i = 0; i < salesforceData.length; i++) {
//       for (j = 0; j < googleSheetsData.length; ++j) {
//           if (salesforceData[i].toLowerCase() == googleSheetsData[j].toLowerCase()) {

//               totalmatches++;

//           }

//       }
//   }
//   if (totalmatches > 0) {
//       return true;
//   } else {
//       return false;
//   }
// }