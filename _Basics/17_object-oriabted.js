





// creating object from objects literals 

let car_1 = {
    name: 'lambo20',
    milage: 56,
    topSpeed: 67,
    run: function () {
        console.log('car is ruuning');
    }
};


// constructer

function GenCar(gName, gSped, gDate) {
    this.name = gName;
    this.topSpeed = gSped;
    this.date = new Date(gDate);
    this.run = function () {
        console.log(`${this.name} is running at his ${this.topSpeed}`);
    }
}

car_2 = new GenCar('nissan_m10', 190,1990);
car_3 = new GenCar('lam_m12', 240,1590);
car_4 = new GenCar('bugati_m78', 480,1989);




console.log(car_2);
console.log(car_3.run());
