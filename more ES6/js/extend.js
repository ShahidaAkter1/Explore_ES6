class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }

}
class Instructor extends TeamMember{
   
    designamtion = 'Web Course Instructor'
    team = 'web team'
   
    constructor(name,location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`start the support sesssion at ${time}`);
    }
    createQuize(module){
        console.log(`please creat quize for module ${module}`);
    }
   
}

class Developer extends TeamMember{
  
    designamtion = 'Web Course Instructor'
    team = 'web team'
    tech;
    constructor(name,location,tech){
       super(name,location);
        this.tech=tech;
    }
    developFeature(feature){
        console.log(`start the support sesssion at ${feature}`);
    }
    release(version){
        console.log(`please creat release for module ${version}`);
    }
    
}

class jobPlacement extends TeamMember{
    
    designamtion = 'job Plasement commandos'
    team = 'job placement'
    
    region;
    constructor(name,location,region){
       super(name,location)
        this.region=region;
    }
    developFeature(feature){
        console.log(`start the support sesssion at ${feature}`);
    }
    release(version){
        console.log(`please creat release for module ${version}`);
    }
  
}

const alia = new Developer('alia', 'Dhaka','React');
console.log(alia);
alia.provideFeedback();
const bipasha = new Developer('bipasha', 'Dhaka','React');
console.log(bipasha);
bipasha.provideFeedback();