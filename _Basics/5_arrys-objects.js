// arrays
let arrys1 = [1, 2, 3, 4, 5, 6, 78, 9, 0];
console.log(arrys1);





let arrys2 = ['this', 'is', 'arry'];
console.log(arrys2);




let arrys3 = new Array(1, 2, 'this', 'is', 'arry', 3, 4, 5, 6, 78, 9, 0);
console.log(arrys3);
console.log(arrys3.length)

arrys3[0] = 'java'
arrys3[2] = 4555555

console.log(arrys3);
console.log(arrys3.indexOf('java'));
console.log(Array.isArray('arry4'));


// ____________________________________________________________________________

arrys3.push('harry') // last me elem jorna
console.log(arrys3)
arrys3.unshift('harcodery') // sbse phle me elem jorna
console.log(arrys3)
arrys3.pop() // last me elem htana
console.log(arrys3)
arrys3.shift() // last me elem jorna
console.log(arrys3)
arrys3.slice(2, 3)
console.log(arrys3)
arrys3.concat(arrys1)
console.log(arrys3)
arrys3.indexOf('this') // element ki index position btna
console.log(arrys3)

// ____________________________________________________________________________


let myobj = {
    'frst name': 'omag', age: 23, city: 'kash', marks: [2, 3, 4, 5, 6, 67, 7], addres: {
        maincity: 'kashipur', street: "main street", houseNo: 13
    }
}
console.log(myobj)
console.log(myobj.marks)







const { age } = myobj;
const todo = [
    { id: 1, text: "hy" }, 
    { id: 1, text: "hy" }, 
    { id: 1, text: "hy" }
]

const tododjson = JSON.stringify(todo);
console.log(tododjson);