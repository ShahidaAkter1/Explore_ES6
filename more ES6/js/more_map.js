 //array number
 const numbers = [12,56,87,44];
 const half= numbers.map(n => n/2);
 const third=numbers.map(x => x/3);
//  console.log(half);
//  console.log(third);

//array string
const friends = ['tua','shahida','jui','sumi'];
const firstLetter= friends.map(friend => friend[0]);
// console.log(firstLetter);

const nameLengths= friends.map(f => f.length);
// console.log(nameLengths);

//array object
const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:55000},
    {id:4, name:'tablet', price:55000},
];
