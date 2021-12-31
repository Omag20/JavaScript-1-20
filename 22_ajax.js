// 1  ajax stands for ashychronous javascripts and XMl
// 2  its set of existing techonologics 
// 3  help fectching data ashy w/o interfering existing data 
// 4  no reload/refresh 
// 5  json use for data transfer     



let ftech = document.getElementById('one');


ftech.addEventListener('click', btn);
function btn() {
    document.write('fgqewfgegiuyewgc gfcyegyqgf');
    const xhr = new XMLHttpRequest();    //inhestitance xhr object
    xhr.open('GET', 'harry.txt', true);  //open that object
    xhr.onprogress = function () {
        console.log('ongoing process')   //checking ongoinmg progress (optional)
    };
    xhr.onload = function () {
        console.log(this.responseText)   // what to do after onload
    };
    xhr.send();                          // send request
}

