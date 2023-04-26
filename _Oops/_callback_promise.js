// let count;
// function ragister () {
//     setTimeout(() => {
//         count = 1;
//         console.log("ragister")
//         return login(count);
//     }, 5000);
// }
// function login (count) {
//     setTimeout(() => {
//         count += 1;
//         console.log("login")
//         return dsiplay(count);
//     }, 1000);
// }
// function dsiplay (count) {
//     setTimeout(() => {
//         count = count + 1
//         console.log("dsiplay")
//         return console.log(count)
//     }, 1500);
// }
// ragister ();
// console.log(count)


// -------------------------- callbacks ----------------------------- 

/*
higher order funtion - those funtion who can takes function as parameters ( function call by reference )
*/

/*
let count;
function ragister(callback) {
    setTimeout(() => {
        count = 9;
        console.log("ragister")
        console.log(count)
        callback(count)
    }, 5000);
}
function sendemail(callback) {
    setTimeout(() => {
        count++;
        console.log("send email")
        console.log(count)
        callback(count)
    }, 5000);
}
function login(callback) {
    setTimeout(() => {
        count++
        console.log("login")
        console.log(count)
        callback(count)
    }, 1000);
}
function sendotp(callback) {
    setTimeout(() => {
        count++
        console.log("send otp")
        console.log(count)
        callback(count)
    }, 2000);
}
function dsiplay(callback) {
    setTimeout(() => {
        count++
        console.log("dsiplay")
        console.log(count)
        callback(count)
    }, 1500);
}
// callback hell 
ragister(function () {
    sendemail(function () {
        login(function () {
            sendotp(function () {
                dsiplay()
            })
        })
    })
});
console.log(count)
*/

// ------------------------------ promises -------------------------- 

/*
promis is a class, then we make a object from class and pass a function that holds two parameters resolve and reject that actually are function itself
we have to return one promise from the function we want
*/


let count;

function ragister() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count = 9;
            console.log("ragister")
            console.log(count)
            // resolve()
            reject("something went wrong!")
        }, 500);
    })
}

function sendemail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++;
            console.log("sendemail")
            console.log(count)
            resolve()
        }, 700);
    })
}


function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++
            console.log("login")
            console.log(count)
            resolve()
        }, 10);
    })
}

function sendotp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++
            console.log("send otp")
            console.log(count)
            resolve()
        }, 200);
    })
}

function dsiplay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            count++
            console.log("dsiplay")
            console.log(count)
            resolve()
        }, 1500);
    })
}

// then is a mehtod that calls other funtions

// ragister()
//     .then(sendemail)
//         .then(login)
//                 .then(dsiplay)
//                     .then(sendotp)
//                         .catch((datathathaspassoonreject) => {
//                             console.log("the err is: " + datathathaspassoonreject)
//                         })

// jo hm reject ke under pass krte he wo as paramter catch() me lijata h or jo resolve me krte hei wo then() me as a parameter milta h  

console.log(count)

// ------------------------------ async & await --------------------- 

// syntectic sugar for promises
// async function is also a promise so we dont need to pass a promise in it 

async function authentication() {
    try {
        await ragister();
        await sendemail();
        await login();
        await sendotp();
        await dsiplay();
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}

authentication().then(() => { console.log('all set') }).catch((err) => { console.error(err) })