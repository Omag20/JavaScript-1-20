/* building simple objects using CONTRUCTURE function */

// note-1 constructure function should be start with CAPITAL letter although it is still work with lowercase

function BankAccount(custormerNaam, currentbalance = 0) {
    this.customerName = custormerNaam;  /* propertise */
    this.accountNumber = Date.now();    /* propertise */
    this.balance = currentbalance;      /* propertise */

    this.deposit = function (amountAsParamenter) {      /* mehtod */
        this.balance += amountAsParamenter;
    }

    this.withdraw = (amountAsParamenter) => {           /* mehtod */
        this.balance -= amountAsParamenter;
    }
}

// // making an new object
// const akashAccount = new BankAccount("akasht gupta", 10000);    // differsnt sapce
// const rakeshAccount = new BankAccount("rakesh gupta");          // differsnt sapce

// console.log(akashAccount)       /* object call */
// console.log(rakeshAccount)
// console.log(rakeshAccount.customerName)

// akashAccount.deposit(2000);    /* method call */
// // every object made individually, will not interfare in any other existing object 
// console.log(akashAccount.balance)   /* ==> 12000 */
// console.log(rakeshAccount.balance)  /* ==> 0 */

// akashAccount.withdraw(2000);    /* method call */
// // every object made individually, will not interfare in any other existing object 
// console.log(akashAccount.balance)   /* ==> 10000 */
// console.log(rakeshAccount.balance)  /* ==> 0 */


// ======================================== dom manipluation ================================ 

// ======== making account 
const form = document.getElementById("account_form");
const customerName = document.getElementById("account_name");
const customerBalance = document.getElementById("account_balance");

let accounts_Array = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();                                         /* this will stop page to auto refresh */
    const new_Account = new BankAccount(customerName.value, +customerBalance.value)   /* .value give the current value of input \ + will convert string to number */
    accounts_Array.push(new_Account);
    form.reset();
    console.log(new_Account)
})
// ======== deposite money
const depositeform = document.getElementById("depositForm");
const accountNumberOfDeposteAccount = document.getElementById("acount_Number_for_deopsite_money");
const depositeAmount = document.getElementById("deposite_Amount");

depositeform.addEventListener("submit", (e) => {
    e.preventDefault();
    const desireAccount = accounts_Array.find(every_account => every_account.accountNumber === +accountNumberOfDeposteAccount.value)
    desireAccount.deposit(+depositeAmount.value);
    depositeform.reset();
    console.log(accounts_Array)
})


// ======== withdraw money
const withdrawform = document.getElementById("withdrwFrom");
const accountNumberOfwithdrawAccount = document.getElementById("acount_Number_for_withdraw_account");
const withdrawAmount = document.getElementById("withdraw_Amount");

withdrawform.addEventListener("submit", (e) => {
    e.preventDefault();
    const desireAccount = accounts_Array.find((every_account) => every_account.accountNumber === +accountNumberOfwithdrawAccount.value)
    desireAccount.withdraw(+withdrawAmount.value);
    withdrawform.reset();
    console.log(accounts_Array)
})