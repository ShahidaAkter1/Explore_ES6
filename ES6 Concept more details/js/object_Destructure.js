const person = {
    name: "Hero Alom",
    age: 34,
    phone: "039945924",
    address: "bari nai",
    p: [1, 2, 3, 4]
}

const {p} = person;

const [number1] = p;
console.log(number1)

const [number,...num] = p;
console.log(number,num)


// const person2 = {...person};

// person2.isMale = true;
// console.log(person2)


// let {name,address,...badbakijinis} = person;
// console.log(badbakijinis)

// console.log(name,barikoi)

// const Name = person.name;

// const age = person.age
// const bari = person.address;

// console.log(Name,age,bari)

// const {address:bari,name,age}=person;//address:bari..mane holo address k new name deya hoise..akon dhekte hole bari likte hobe //new name set korte hole structure=> oldname:newname

// const {address,name,age}=person;
// console.log(address);
// console.log(bari);