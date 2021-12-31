// document.getElementById().addEventListener('eventname',function(){
//     actions
// })


document.querySelector('#sbmit').addEventListener("click",function (e) {
    console.log('you have clicked')
    console.log(e);
    vari=e.target;
    console.log(e);

})
document.querySelector('.container').addEventListener("mousemove",func1)
function func1(e) {
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY}, 56 )`
}