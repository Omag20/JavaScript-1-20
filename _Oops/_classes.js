// bnuilding object using class 

/*
note-1: classes dont follow the hoisting property  in js
note-2: we can mwke class like this 
        const Bankaccount = class {}
*/

class BankAccount {
    // variable = propertise,
    // functions = mehtod

    // class is just a syntextite sugar for constructor functions, behind hood everything work using contructor functions 

    /*
    both ways will works without any errors
    */
    customerName;
    accountNumber = Date.now();
    balance = 0;
    loan = 0

    // special method for taking parameters
    constructor (custormerNaam, currentbalance = 0) {
        this.customerName = custormerNaam;
        this.balance = currentbalance;
    }

    /*
    defining funtions ==> mehtods
    */
    // this will automatically add mehtods/propertise to the prototype by defaults not like the construtor function
    deposit (ammount) {
        this.balance += ammount;
    }

    withdraw (ammount) {
        this.balance -= ammount;
    }
}

const rakesh_acct = new BankAccount('rakesh' , 2090)
console.log(rakesh_acct)