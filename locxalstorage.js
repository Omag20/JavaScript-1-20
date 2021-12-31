
let im = ['adrak','tamatar','alloo']

localStorage.setItem('name','harry');
localStorage.setItem('name21','harry11');

localStorage.setItem('sabzi',JSON.stringify(im));

localStorage.removeItem('name21')
localStorage.setItem('name22','harry12');
localStorage.setItem('name23','harry13');
// localStorage.clear()
// let a = localStorage.getItem()
let a = JSON.parse(localStorage.getItem('sabzi')) 

console.log(a)


// __________________________________________

sessionStorage.setItem()   same