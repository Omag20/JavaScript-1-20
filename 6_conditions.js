let age;
age = Number(prompt());
console.log(age)

if (age=18){
    alert('you can vote')
}
else if(age>18){
    alert('you can not ovote')
}
else(age<18){
    alert('you can not ovote')
}

// ______________________________________

console.log(age==18? '18 ka  h lomde hmmm': 'chl bhaggg ya s lund')

// ______________________________________

switch (age) {
    case 18:
        console.log('18 ka hai');
        break;
    case 38:
        console.log('138 ka hai');
        break;
    case 138:
        console.log('183 ka hai');
        break;
    default:
        console.log('1dsd3 ka hai');
       
        break;
}