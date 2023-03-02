//1st way

// const numbers= [2,8,4,6,3];
// const output = [];
// for(const number of numbers){
//     const double= number*2;
//     output.push(double);
// }
// console.log(output);

//2nd way
// const numbers= [2,8,4,6,3];
// function getDoubles(numbers){
//     const output = [];
// for(const number of numbers){
//     const double= number*2;
//     output.push(double);
// }
// return output;
// }
// const result=getDoubles(numbers);
// console.log(result);

//3rd way
const numbers= [2,8,4,6,3];
function getDoubles(numbers){
    const output = [];
for(const number of numbers){
    const double= doubleIt(number);
    output.push(double);
}
return output;
}

// normal function
// function doubleIt(number){
//     return number*2
// }


//arrow function....4way
const doubleIt= num =>num * 2;

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

//5th way
const makeDoubleDirect = numbers.map(num => num *2)
console.log(makeDoubleDirect);

//6th way

const makeDouble2 = numbers.map(x => x*2);
console.log(makeDouble2);

//7th way
const fiveTimes = [1,2,3,4,5].map(x = x*5);
console.log(fiveTimes);
/**
 purpose:
 1.get an array
 2.for every elements of the array do something
 3.store the result in an array
 4.rturn the result array
 */

 const result=getDoubles(numbers);
 console.log(result);