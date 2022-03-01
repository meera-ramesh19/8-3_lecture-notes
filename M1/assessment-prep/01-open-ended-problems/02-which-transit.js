// Setup: You want to know whether the train or your car is a faster commute.
// You alternate transportation methods, recording your commute time in minutes every day.

const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];//395
const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];//419

// Challenge: write a program that determines which commute is faster ON AVERAGE.
// How will you know if you've succeeded?
//   -> Use node to execute this file. You should see output that logs out which commute is faster on average

// Hint: write a function that computes the average of an array of numbers.
//   Use this function to find the average commute time for the train and for your car.
function findAverage(sum,len){
    return sum/len
}
function commuteTimes(car,train){
    let sum=0
    let faster=''
    for (let commute of car){
       sum+=commute
    }
    let avgCar=findAverage(sum,car.length)
    for (let commute of train){
        sum+=commute
     }
     let avgTrain=findAverage(sum,train.length)
     if(avgCar > avgTrain){
         faster=`Car is faster`
     }else if(avgCar< avgTrain){
         faster='Train is faster'
     }
     return faster
}

console.log(commuteTimes(carCommuteTimes,trainCommuteTimes))