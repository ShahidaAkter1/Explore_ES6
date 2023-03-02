const numbers = [12,5,23,45,11,18,9,55,61,1];
const bigNumbers= numbers.filter(Number =>Number> 20);
console.log(bigNumbers);

const smallNumbers = numbers.filter(num => num < 10);
console.log(smallNumbers);

const evenNumber=numbers.filter(n => n%2 ===0);
console.log(evenNumber);

const products = [
    {id:1, name:'laptop', price:45000},
    {id:2, name:'mobile', price:80000},
    {id:3, name:'watch', price:55000},
    {id:4, name:'tablet', price:65000},
];
// const product=products.filter(p => p.price > 1000);
// const product=products.filter(p => p.price > 1000);
const product=products.filter(p => p.price > 45000);
console.log(product);