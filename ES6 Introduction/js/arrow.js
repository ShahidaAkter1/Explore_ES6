//function declaration

function add(first , second){
   const total  = first + second;
    return total;
}

const number =add(11);
console.log(number);

//function expression

const add1= function add1(first , second){
    const total  = first + second;
     return total;
 }
 //function expression with anonimus function
const add2= function add2(first , second){
    const total  = first + second;
     return total;
 }
 const numbers =add(11);
console.log(numbers);

const add3= function (first , second){
    return first + second;
   
 }
 const number3 =add(11);
console.log(number3);

//arrow function

const add4 = (first,second) => first + second;

const number4 =add(11);
console.log(number4);