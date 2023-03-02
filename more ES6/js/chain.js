const users = [ {id:1, name:'shahida', job:'student'}];
// console.log(users[0].name);

const data= {
    count:5000,
    data: [
        {id:1, name:'tua', job:'leader'},
        {id:2, name:'jui', job:'leader'},
    ]
}
// console.log(data.data[1].name);//or nicher 2 line
const firstName = data.data[1].name;
// console.log(firstName);

const user = {
    id: 50004,
    name:'shahida akter',
    address: {
        street: {
            first:'35/A kochuket lane',
            second:'2nd floor',
            side:'right side',
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
// const userFloor=user.address?.stret.second;
const userFloor=user.address.street.second;
console.log(userFloor);
