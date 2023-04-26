// encapsulation stop changing the internal mehtod and propertise from the outside and also give some operation to manipluate it 

class BankAccount {
    // _ is it a great conviction that it is used for the private elements 
    // but 
    // now js has # to indicate the private fields and stops to change it

    /*
    private field can only be used inside the that class where it was been, not from outside or any inherited functions
    */
    _id = Date.now()
    /*
    private propertise
    */
    #balance;
    constructor (name, money) {
        this.name = name;
        this.#balance = money; // private field
    }
    _deposit (ammount) {
        this.#balance += ammount;
    }
    withdraw (ammount) {
        this.#balance -= ammount;
    }

    // mehtod to provide the public ways to maniplute the private fiels 
    // setters 
            // setBalance(ammount) {
            //     // validation 
            //     if (!isNaN(ammount)) {
            //         this.#balance = ammount
            //     } else {
            //     throw new Error("this is not a valid input")
            //     }
            // }
    set Balance(ammount) {
        // validation 
        if (!isNaN(ammount)) {
            this.#balance = ammount
        } else {
            throw new Error("this is not a valid input")
        }
    }
    // getters
        // getBalance() {
        //     return this.#balance
        // }
    get Balance() {
        return this.#balance
    }
}

// child class 
class Current_account extends BankAccount {
    limit = 1000;
    constructor (name, money, business) {
        super(name, money);
        this.business_name = business;
    }
    /*
    mehtod to do the pivate mehtods 
    */
    #calculatedinterset (time = 1, rate = 12) {
        let money = 5000 * time * rate;
        return console.log(money);
    }
    loan (time) {
        const extra_amount = this.#calculatedinterset(time);
        return console.log(extra_amount);
    }
}

const rakes_accnt = new Current_account("rakesh", 5000, 'rakesh.pvt')
console.log(rakes_accnt)
// console.log(rakes_accnt.setBalance("hundred"))
// console.log(rakes_accnt.setBalance(5000))
// console.log(rakes_accnt.getBalance());

/*
setter and getter have define like methods but don't call it.
*/
// console.log(rakes_accnt.Balance);
// rakes_accnt.Balance = 8000;
// console.log(rakes_accnt.Balance);

/*

*/
console.log(rakes_accnt.Balance);
rakes_accnt.loan(2)
// we can also call confidencial claculated funtion (internal method) outside here 
// rakes_accnt.#calculatedinterset(2, 5)

