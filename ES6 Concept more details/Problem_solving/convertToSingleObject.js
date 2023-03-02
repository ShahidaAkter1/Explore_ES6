//3. Convert Array Of Objects To Single Object using map or foreach
const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]

/* output arokom dhekhaite hobe
{
     ID01:"abul vai",
    ID02: 'babul vai'
 }
*/

const info={};
// info['name'] = 'mehedy';
// info['age'] = 25
// console.log(info)

Persons.map(p =>{
    // console.log(p);//ata korle sob object dhekha jabe
   
    // info[p.id]=p.name;//or nicher 3 line

    const id= p.id;
    const value=p.name;
    info[id]=value;
})
console.log(info.ID02);//OUTPUT: babul vai

console.log(info);/**output:
{
  ID01: 'abul vai',
  ID02: 'babul vai',
  ID03: 'habul vai',
  ID04: 'jabul vai'
}

*/
