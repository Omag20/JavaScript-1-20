
// class is blueprint of somthing
// and constructture used to make a object in class

class employee {
    constructor(gName, gExprience, gDevision) {
        this.Name = gName;
        this.Exprience = gExprience;
        this.Devision = gDevision;
    }


/*function*/  slogan() {
        return `i am ${this.Name} and my exprience is ${this.Exprience} years`;
    }

/*function*/  jYer() {
        return 2020 - `${this.Exprience}`;
    }


    static add(a, b) {
        return a + b;
    }


}


let harry = new employee('harry', 89, 'programming');
python = new employee('python', 12, 'programming');

console.log(harry);
console.log(harry.slogan());
console.log(python);
console.log(python.jYer());

// console.log(harry.add(1,99)); static bina object bnay chlta h

console.log(employee.add(1, 99));



// ---------------------------------------------- making a class using existing class 
console.log('// ---------------------------------------------- making a class using existing class ')
// ---------------------------------------------- making a class using existing class 



class programmer extends employee {
    constructor(gName, gExprience, gDevision, gLang, gAge) {
        super(gName, gExprience, gDevision);
        this.lang = gLang;
        this.age = gAge;
    }
    fvrt() {
        if (this.lang == 'python') {
            return `${this.Name} loves python`
        } else {
            return `${this.Name} hates python`
        }
    }
    static math(a, b) {
        return (a * b + b) * 999;
    }
}

omag = new programmer('om', 2, 'it', 'python', 18);
console.log(omag);
console.log(omag.fvrt());
console.log(programmer.math(999, 8788));

