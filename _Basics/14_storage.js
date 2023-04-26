
//_________________________________ local storage 




window.localStorage.setItem('name', 'omag');
window.localStorage.setItem('name2', 'omag');
window.localStorage.setItem('name3', 'omssag');
window.localStorage.setItem('name4', 'omag');
window.localStorage.setItem('name5', 'omag');
window.localStorage.setItem('name6', 'omag');

console.log(localStorage.getItem('name3'))

// localStorage.clear();

console.log(localStorage.getItem('name3'))

localStorage.removeItem('name4')

console.log(localStorage.getItem('name4'))

let ary = ['one', 'two', 'three'];

window.localStorage.setItem('count', JSON.stringify(ary));

console.log(JSON.parse(localStorage.getItem('count')));



//_________________________________ session storage 

// same as localStorage 
window.sessionStorage.setItem('name', 'omag');
