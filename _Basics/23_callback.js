console.log('hello this 23 tut');



const students = [

    {name:"harry",subject:"javscript"},
    {name:"rohan",subject:"python"},
    {name:"rohit",subject:"css"},
    {name:"mohit",subject:"html"},
    {name:"montu",subject:"java"},

]

function enroolstudent(student , callback){
    setTimeout(function(){
        students.push(student)
        console.log("student has been enrolled");
        callback();

    }, 2000);
}

function getstudent (){
    setTimeout(function()  {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name} = ${student.subject} </li>  `
        })
        document.getElementById('student').innerHTML = str;
        console.log("student have been fected");


    }, 1000);
}
let newstudent = {name: 'lodu',subject:"coding"}
enroolstudent(newstudent,getstudent);
// getstudent();



