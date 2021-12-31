// rule in variables

// 1. var let const

// 2. decleartion & assigment

// 3.   ``  .  ''  ,  ""

// 4. cannot start with numbers 

// 5, case sensitive 

// 6. starts with letters , $ , _ 

// 7. scpe:

// const : globallevel / uneditable
// var : globallevel / editable
// let : blocklevel / editable

// 8.
//       global
 
//   {
//       block
//   }  

var name = "js";
let $name = "js2";
const _name = "js3";

$name = "js0"

console.log(_name);
console.log($name);

// _____________________________________________

var city = "delhi";
var city4 = "jamme";
let city1 = "mumbai";
const city2 = "jaipur";
console.log(city);
console.log(city2);

{   
    // block
    let city1 = "hydrabad";
    let city2 = "hydrabad";
    let city = "hydrabad";
    console.log(city);
    city = "rampur";
    console.log(city);
    console.log(city1);
    console.log(city2);
    console.log(city4)
}

console.log(city);
console.log(city1);
console.log(city2);
console.log(city4)


/* case types:

1. camelCase
2. kabab-case
3. snake_case
4. PascalCase
*/