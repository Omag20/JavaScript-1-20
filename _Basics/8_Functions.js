// functions

// 1. define
//   function name(parameters){
//     actions
//     }
// 2. calling
//   name(value)




function hello(name,mes='thnak',age=89) {
    return console.log(`hello ${name} and ${mes} , ${age}`);
    
}
hello('rhohan');


// _______________________________________________________

// checking scopes in let and var and const 

// let 
let i = 0;
console.log(i);
function num(nm) {
    i = 9;
    console.log(i);
}
num();
console.log(i);
     

console.log(
    `
    
    
    
    `                                                             
)


let i1 = 0;
console.log(i1);
function num1() {
    let i1 = 9;
    console.log(i1);
}
num1();
console.log(i1);


console.log(
    `

    `                                                             
)


// const 

const c_ = 1;
console.log(c_);
function con() {
    c = 9;
    console.log(c);
}
con();
console.log(c_);
     

console.log(
    `

    `                                                             
)


const c1 = 1;
console.log(c1);
function con1() {
    const c1 = 9;
    console.log(c1);
}
num1();
console.log(c1);

// var 

console.log(
    `

    `                                                             
)


var v = 2;
console.log(v);
function vr() {
    v = 9;
    console.log(v);
}
vr();
console.log(v);
     

console.log(
    `

    `                                                             
)


var v1 = 2;
console.log(v1);
function vr1() {
    var v1 = 9;
    console.log(v1);
}
vr1();
console.log(v1);

// _______________________________________________________

{
    var k =100000000;
}
console.log(k)



{
    let l =100000000;
}
console.log(l)















const addnum = (num1=2, num2=1) => {
    return num1 + num2;
}

console.log(1,99);