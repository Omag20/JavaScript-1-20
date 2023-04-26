// SELECT PARTCULAR ELEMENT IN JS FROM HTML

// 1. SINGLE ELEMENT SELECTOR
// 2. MULTI ELEMENT SELECTOR



// 1. SINGLE ELEMENT SELECTOR
let ele = document.getElementById('one');
console.log(ele);

// ele = ele.className;
// console.log(ele);


// console.log(ele.childNodes);
// console.log(ele.parentNode);
// ele=ele.style.color='red'
// console.log(ele);

// ele.innerText='hiiii'
// ele.innerHTML='<h1>sdxxx</h1>'
// console.log(ele)

// _____________________________________________________________

let sel = document.querySelector('#one');
console.log(sel);

sel = document.querySelector('.child');
console.log(sel);

sel = document.querySelector('h1');
console.log(sel);











// 2. MULTI ELEMENT SELECTOR



// get all elements by induvisually
let eles = document.getElementsByClassName('child');
console.log(eles);
console.log(eles[2]);

// _____________________________________________________________
console.log(' ____________________________________')


// get all elements in one parent div
let eless = document.getElementsByClassName('container');
console.log(eless);
console.log(eless[0].getElementsByClassName('child'));


// _____________________________________________________________
console.log(' ____________________________________')

let tag = document.getElementsByTagName('h1');

Array.from(tag).forEach(element => {
    console.log(tag);
    element.style.color='green';
});










// --------------- single element style mehthd ----------------------------
let tryit = document.querySelector('.h2');
tryit.style.color='red';


// --------------- multi element style mehthd ----------------------------
let tag = document.getElementsByTagName('h1');

Array.from(tag).forEach(element => {
    console.log(tag);
    element.style.color='green';
});
