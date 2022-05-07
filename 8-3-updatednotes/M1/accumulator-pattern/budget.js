	
    

// Create an accumulator function which takes the following arguments:
// A number representing a person's grocery budget
// An array of numbers representing a person's grocery receipt totals
// And returns a number representing how much budget remains after subtracting the total from each grocery receipt




let budget=500;
let receiptArr=[100,50,40,200]


function grocery( budget, receiptArr){
    let diff=budget
    for(let receipt of receiptArr){
     diff-=receipt
    }
 return diff
}

console.log(grocery(budget ,receiptArr))






// Create an accumulator function which takes the following arguments:
// An array of strings including the names of each invitee to a dinner party
// And returns the same array with each name replaced with the following message:
// "Dear <name>, you are cordially invited to my dinner party."

let namesArr=['Taryne', 'Meera', 'JuHao','Tristan']

function party(namesArr=[]){
  console.log(namesArr.length)
  for (let i=0;i < namesArr.length; i++){
      namesArr[i]='Dear '+ namesArr[i]+', you are cordially invited to my dinner party.'
    // names='Dear '+ namesArr[i]+', you are cordially invited to my dinner party.'

    //using splice in a for loop is not a good idea as the splice shifts the index position and 
    //it skips the next value in the array
    // namesArr.splice(i, 1, names);
  }
  return namesArr
}

console.log(party(namesArr))
console.log(party())

function partyName(namesArr){
let names=''
for(let name of namesArr){
     names='Dear '+ name+', you are cordially invited to my dinner party.'
     
     namesArr.splice(name,1,names)
} 
   return namesArr
}



console.log('partyName',partyName(namesArr))