// build child constructors functions using the parent constructor function 
// inheritance === virasath me mil sub kuch

/*
note-1 : child cf se ekbar object bnane ke baad usse parent cf se inherit nhi krskte , bhai aage ke object ke sath discriminate hojayga asi toda chlega
note-2 : phle child cf ko inherit krlo uske baad child cf ke prototype build krna , arre bhai phle baap ka khalo phir apna khalalena
*/

// parent construtor function 
function BankAccount(custormerNaam, currentbalance = 0) {
    this.customerName = custormerNaam;
    this.accountNumber = Date.now();  
    this.balance = currentbalance;    
}
BankAccount.prototype.deposite_function = function (amountAsParamenter) {
    this.balance += amountAsParamenter;
};
BankAccount.prototype.withdraw_function = function (amountAsParamenter) {
    this.balance -= amountAsParamenter;
};

// child constructor function
function Saving_account (name, balance = 100) {
    // this is how to inherit the propertise from the parent cf to child cf. ===> construtor linking
    /*
    here THIS refer to the those object who will make from the child cf
    and rest of parameters
    */
    BankAccount.call(this, name, balance);
    this.limit = 1000;
}



// this is how to inherit the mehtods (prototype) from the parent cf to child cf. ===> construtor linking
/*
here it object.create will make the object of parent cf and link to the child cf
*/

Saving_account.prototype = Object.create(BankAccount.prototype)
Saving_account.prototype.personal_loan = function (amountAsParamenter) {
    this.balance += amountAsParamenter;
    console.log("diya tujhe loan an terepass" + this.balance)
};

const rakes_account = new Saving_account("rakesh" , 20000);
console.log(rakes_account);
rakes_account.deposite_function(500)
console.log(rakes_account);
rakes_account.withdraw_function(500)
console.log(rakes_account);
rakes_account.personal_loan(500)
console.log(rakes_account);


/*
// normal way to create a construtor functions 
function Saving_account (name, balance = 0) {
    this.customer_name = name,
    this.balance = balance,
    this.limit = 1000,
    this.accountNumber = Date.now(); 
}
Saving_account.prototype.deposite_function = function (amountAsParamenter) {
    this.balance += amountAsParamenter;
};
const rakes_account = new Saving_account("rakesk" , 20000);
rakes_account.deposite_function(500)
console.log(rakes_account);
*/