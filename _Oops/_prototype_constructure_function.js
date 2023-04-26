/* using prototype to share common mehtods */


function BankAccount(custormerNaam, currentbalance = 0) {
    this.customerName = custormerNaam;  /* propertise */
    this.accountNumber = Date.now();    /* propertise */
    this.balance = currentbalance;      /* propertise */
}

// in javascript function is also an object. so we can use . to add propertise to the function
console.log(BankAccount.prototype)

// js add a propertise( empty object {} ) to every function while defining it by default it calls PROTOTYPE.  
BankAccount.prototype.string = "this is a string";
console.log(BankAccount.prototype)

// cannot use arrow function because it has not contest, it take THIS. from his outer scope so if we use it. this will take the THIS. from window object
BankAccount.prototype.deposite_function = function (amountAsParamenter) {
    this.balance += amountAsParamenter;
};
console.log(BankAccount.prototype)

// so js will look into the that object for deposite_function() if it can not find it then it will move to the constructor function and check its prototype 
// if it still not find in constructor function protype then it will look into the grand constructure of that the constructor function that is the object in javascript.. (last construtor in protype chain )
const account = new BankAccount("babloo bhai");
console.log(account);
account.deposite_function(20000);
console.log(account.string)
console.log(account)


// array and object are in-built constructors in js 
console.log(Array.prototype)
console.log(Object.prototype)