// //Singleton object

// // An object is a collection of key-value pairs. It is a data structure that can hold multiple values of different types.

// // Object literal

// const mysyb = new Symbol("key1");
const user = {
    name : "sumit",
    age : 20,
    [mysyb] : "value of key1",
    isStudent : true,
    gmail : "google@gmail.com",
    logindays : ["monday", "tuesday", "wednesday"],
};

// console.log(user.name); // "sumit"
// console.log(user["name"]); // "sumit"

// // to access the symbol

// console.log(user[mysyb]); // "value of key1"

// // to change or add a new key-value pair
// user.name = "john";

// Object.freeze(user); // freeze method is used to freeze the object. It prevents the modification of the object. It makes the object immutable.

user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());