

// creating objects with literals 


let  objt1 = {
    name:'om agrwal',
    age:20,
    mood:'not happy'
}

console.log(objt1);


// creating objects with constructor 


function obj(gNmae,gAge,gMood) {
    this.name=gNmae;
    this.age=gAge;
    this.mood=gMood;
}
let objt2 = new obj('omagr',45,'okk');
console.log(objt2);



























