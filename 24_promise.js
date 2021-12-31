console.log('hello this 234 tut');

function fuckboi() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('fuckboi : resoleveeeeeee')
                resolve();
            } else {
                console.log('fuckboi : nhi huiiiiiiiiiiii reject')
                reject('sorryyyyyyyyyyyyyyyyyyyyyyyyyyyy') /*xyz*/ ;
            }
        }, 2000);
    })
}

fuckboi().then(function /* resolve statment*/() {
    console.log("user : bdiya guru!")
}).catch(function  /* rejects statment*/ (xyz) {
    console.log("user : bhagg fuckboi teri maaa ki chut" + xyz)
}) 