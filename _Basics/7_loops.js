// loops are 3 type in JS 
// 1. for loop
// 2. while loop
// 3. do-while

// 1. for loop
// for (declreation; condition; updation) {actions};

for (let a = 0; a < 10; a++) {
    console.log(a);
}

// 2. while loop
//   decleation;
//   while (condition) {
//      actions; 
//      updation; }

let b = 10;
while(b<20){
    console.log(b);
    b++;
}

// 3. do-while

//  declearion;
//  do {
//      action;
//      pdation;
//  } while (condition);

let c = 20;
do {
    console.log(c);
    c++;
} while (c<30);

// statments in loops
// 1. continue
// 2. break

let d = 40;
do {
   
    if (d===45) {
        d++;
        break;
    }
    console.log(d);
    d++;
} while (d<50);

// ______________________________________________________________

let e = 50;
do {
    
    if (e==55) {
        e++;
        continue;
    }
    console.log(e);
    e++;
} while (e<60);

// some others loop for object and arrays

// 4. for-each loop 
let f = [1,2,34,5,6,7,8,9,0];
f.forEach(function (elemnt, indx, arry) {
    console.log(elemnt,indx,arry)
});

// 5. foe-in loop 
let g = {
    name:'rohan',
    age:67,
    talent:"kuch nhi"
}

for(let key in g){
    console.log(`${g[key]} and ${key}`)
}