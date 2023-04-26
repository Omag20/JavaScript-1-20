// parent class 
class BankAccount {
    id = Date.now()
    constructor (name, money) {
        this.name = name;
        this.balance = money;
    }
    deposit (ammount) {
        this.balance += ammount;
    }
    withdraw (ammount) {
        this.balance -= ammount;
    }
}

// child class 
class Current_account extends BankAccount {
    limit = 1000;
    constructor (name, money, business) {
        /*
        super() means ki parent class ka construrtor import krdo,
        or super me parameter ko value nhi dete
        */
        super(name, money);
        this.business_name = business;
    }
    loan (ammount) {
        this.balance += ammount
    }
}

const rakes_accnt = new Current_account("rakesh", 2000, 'rakesh.pvt')
rakes_accnt.deposit(5000)
console.log(rakes_accnt)
console.log(rakes_accnt.balance) //7k
rakes_accnt.loan(5000)
console.log(rakes_accnt)
console.log(rakes_accnt.balance) //7k
rakes_accnt.withdraw(10000)
console.log(rakes_accnt)
console.log(rakes_accnt.balance) //7k
