let today = new Date();
console.log(today);

let otherdate = new Date('02-20-2004  12:00:00');
otherdate=new Date('june 12 2004 12:00:45');
otherdate=new Date('12/12/2012 12:45:34');

console.log(otherdate);


console.log(otherdate.getDate());
console.log(otherdate.getDay())
console.log(otherdate.getFullYear());
console.log(otherdate.getHours());
console.log(otherdate.getSeconds());
console.log(otherdate.getMinutes());
console.log(otherdate.getMonth());

console.log(today.getTime());
console.log(today.getMilliseconds());

// same with settime 

today.setHours(335);
console.log(today);




