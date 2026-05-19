//is js have class??
//yes, js have class but it is not like other language
//it is just a syntactical sugar over the prototype based inheritance
//it is not a new way of creating objects

//object oriented programming 
//class is a blueprint for creating objects

//object is an instance of a class


//why we need class in js
//1. to create objects
//2. to create reusable code
//3. to create a structure for our code

//constructor function
//prototype

// 4 pillars of OOP
//1. Encapsulation
//2. Abstraction
//3. Inheritance
//4. Polymorphism

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("sumit", 12, true)
const userTwo = new User("sumit kumar", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);