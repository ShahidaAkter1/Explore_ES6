//array Destrucring
const arr = [1,2,3,4,5,6,7];

// const first = arr[0]
// const second = arr[1];

const [first,second,...remaining] = arr;


console.log(first,second)
console.log(remaining)
console.log(arr)
