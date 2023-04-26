console.log('Arrow function');

// regular function------------------------------------------------------------------------------------------

let hary = function () {
	console.log('done');
};
hary();

// concrting to arrow function------------------------------------------------------------------------------------------

let arrow = () => {
	console.log('arrow done');
};
arrow();

// one lines will not requird braces and return                                                 ------------------------------------------------------------------------------------------

let grat = () => 'good morniig';
console.log(grat());

let vrat = name => ({ nname: name });
console.log(vrat('rahul'));

let erat = (name, age = 78) => ({ nname: name, agee: age });
console.log(erat('rahul'));
