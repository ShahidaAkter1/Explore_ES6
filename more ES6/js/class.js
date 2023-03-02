//syntactic sugar
class Instructor{
    name;
    designamtion = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name,location){
        this.name = name;
        this.location=location;
    }
    startSupportSession(time){
        console.log(`start the support sesssion at ${time}`);
    }
    createQuize(module){
        console.log(`please creat quize for module ${module}`);
    }
}

const aamir=new Instructor('aamir','mumbai')
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuize(60);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);