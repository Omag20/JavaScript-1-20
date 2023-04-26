








let string = "Contemporary climate joloooooaoaoaoa change involves rising global temperatures and sigmaking. Climate change causes sea level rise, glacial retreat and desertification"+
"A military coup in Sudan, led by General Abdel Fattah al-Burhan (pictured), deposes the government of Prime Minister Abdalla Hamdok."

console.log(string);

string = string.concat('this is ','  ','caoncateeee');
console.log(string);



console.log(string.length);
console.log(string.toUpperCase());
console.log(string[0]);

console.log(string.indexOf(' joloooooaoaoaoa'));
console.log(string.lastIndexOf(' ooo'));

console.log(string.indexOf('ng'));
console.log(string.lastIndexOf(' joloooooaoaoaoa'));

console.log(string.endsWith('ytfdtfywe'))
console.log(string.includes('ytfdtfywe'))

console.log(string.substring(0,7))

console.log(string.slice(-9))

console.log(string.split(" "))

console.log(string.replace("climate","weather"))






let mystr = `Contemporary weather joloooooaoaoaoa change involves rising global temperatures and sigmaking. Climate change causes sea level rise, glacial retreat and desertificationA military coup in Sudan, led by General Abdel Fattah al-Burhan (pictured), deposes the government of Prime Minister Abdalla Hamdok.this is   caoncateeee ${string}`
console.log(mystr)
