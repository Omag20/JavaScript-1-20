function fetchfunction() {
const xhr = new XMLHttpRequest();
xhr.open('GET','harry.txt',true);
xhr.onprogress = function () {
console.log('on process')
}
xhr.onload = function () {
console.log(this.responseText)
}
xhr.send();
}
console.log('hi evereyone');
fetchfunction( );