const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

// const x = numbers.find(n => n >= 50)

const x = numbers.filter(n => n >= 50)
console.log(x)//output:[ 75, 54, 97 ]
//filter condition ar je valur sathe match kore sob show kore

const y = numbers.find(n => n >= 50)
console.log(y)//output:75
//find condition ar sathe 1st match korer pore r dhekhay na..mane 1st match value show kore
