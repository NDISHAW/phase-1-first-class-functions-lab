// Code your solution in this file!
let drivers=["Joe","Boss","Jyden","Bro"];
const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2);
};
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));

//const selectingDrivers=[returnFirstTwoDrivers(drivers),returnLastTwoDrivers(drivers)];
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers);

const createFareMultiplier=function(rate){
    return function(fare=4){
        return fare*rate;
    }
}
// const createFareMultiplier=function(fare,rate=2){
//     return fare*rate;
// }
// console.log(createFareMultiplier(40));
 const fareDoubler=function(FARE){
        return FARE *2;
 }
 console.log(fareDoubler(10));

 const fareTripler=function createFareMultiplier(FARE){
     return FARE * 3;
 };
 console.log(fareTripler(12));

const selectDifferentDrivers= function(drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
} 
console.log(selectDifferentDrivers());