// 1.var,let,const
// 2.default parameter
// →
function calculateSalary(salary,tax = 0.25 , bonus=0){
const remaining = salary - salary*tax; 
const total= remaining + bonus;
return total;
}


// 3.template string (` `)
//  	→
 	const innerHTML=`
<div>
<h3>Name: </h3>
<p>Salary: </p>
<p>Address: </p>
<p>others: ${numbers[2]}</p>
<p>others: ${calculateSalary()}</p>
</div>
`
// 4.Arrow function:
// 	→
	const calculateSalary2= (salary,tax,bonus) => salary - salary*tax+bonus;
// 5.spread
// 	→
	const ages = [12,43,32,13,30,22];
	const newages= [...ages , 15.18,19];
// 6.destructuring:
// 	→
	const {x,y,z,...m} = {x:12,y:23,z:45, name :'shahida', salary:'200000'}
	const [a,b, ...c]=[12,34,43,56,23];
