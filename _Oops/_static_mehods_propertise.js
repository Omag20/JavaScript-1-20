// static mehtods/prop are those fields that does not have any realtion with the inherit class. so we can not use it on the class instance.

// static values store on the class itself , noramal values stores on the instance 

class Users {
    // static propertise 
    static id = 1;
    constructor(age, name) {
        this.name = name,
        this.age = age,
        this.id = Users.id++
    }

    static compare (one, two) {
        return one.age - two.age
    }

    // static block : for initial configarations 
    static {
        console.log('initial call');
    }

    // we can use THIS. on onty wehn both items is static.  
    static func () {
        return this.useme()
    }
    static useme () {
        console.log(this.id)
    }
}
 

Users.useme()
// 2nd time call 
Users.useme()

// const user1 = new Users (20, 'ayush');
// const user2 = new Users (22, 'shubham');
// const user3 = new Users (30, 'ashish');
// const user4 = new Users (34, 'jethalal');
// const user5 = new Users (25, 'vivan');

// const user_arr = [
//     user1,user2,user3,user3,user4,user5
// ]
// user_arr.sort(Users.compare)

// console.log(user_arr)