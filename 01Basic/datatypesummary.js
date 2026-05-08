//Premitive data types

// 7 types 
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Non-primitive data types( Reference data types)

// 1. Object 
{
    const person = {
        name: "John",
        age: 30,
        city: "New York"
    };
}

// 2. Array

const numbers = [1, 2, 3, 4, 5];


// 3. Function

const greet = function(name) {
    return `Hello, ${name}!`;
}


// Stack (primitive) and Heap (non-primitive) Memory

let name = "sumit"

let anotherName = name; // anotherName is a copy of name

console.log(anotherName); // sumit
anotherName = "john"; // changing anotherName does not affect name
console.log(anotherName); // john

const person1 = {
    name: "sumit",
    age: 30
};
const person2 = person1; // person2 is a reference to person1

console.log(person2); // { name: 'sumit', age: 30 }
person2.name = "john"; // changing person2 also changes person1
console.log(person1); // { name: 'john', age: 30 }
