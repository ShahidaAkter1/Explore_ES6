const max= Math.max(112,85,99,45);
// console.log(max);

// const numbers=[23,32,456,66];
const numbers=[10,20,30,40.50.60.70 ]
const largest=Math.max(...numbers);
// console.log(...numbers);
console.log(largest);

// const number2=numbers;
const number2=[...numbers];
numbers.push(454545);
number2.push(445);
console.log(numbers);
console.log(number2);


const number4= [...numbers];

const number5= [22,323, ...numbers, 111];
console.log(number5);
