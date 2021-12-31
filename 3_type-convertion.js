// type convertions


let str;

str = 898;
console.log(str+90)   // <------------------type coercion
console.log(typeof str);

str = String(898);
console.log(str+90)
console.log(typeof str);

// ______________________________________________________

let bool = true;
console.log(typeof bool);

bool = String(true);
console.log(typeof bool);
// ______________________________________________________

let arr = [1,2,3,45,6,7,8,6,5,4,333];
console.log(typeof arr);
console.log(arr);

arr = String([1,2,3,45,6,7,8,6,5,4,333]);
console.log(arr);
console.log(typeof arr);

// ______________________________________________________

let i = 89;
console.log(typeof i);
console.log(i.toString());
console.log(typeof i.toString());

// ______________________________________________________

let n = "78";
n = Number('7878id7');
console.log(typeof n);
console.log( n);

n = Number(false);
console.log(typeof n);
console.log( n);

// ______________________________________________________


let nm = parseFloat('8989.7676');
console.log(nm, typeof nm);


let nmm = parseInt('8989.7676');
console.log(nmm.toFixed(3), typeof nmm);



