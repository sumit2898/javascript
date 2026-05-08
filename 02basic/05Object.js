// Object Destructuring

const course = {
    name : "JavaScript",
    price : 999,
    instructor : "Sumit",

};

const {name} = course; // object destructuring is used to extract the values from the object and assign them to variables. It is a shorthand syntax for creating variables with the same name as the object properties.

const {name: courseName} = course; // object destructuring with aliasing is used to extract the values from the object and assign them to variables with different names. It is a shorthand syntax for creating variables with different names than the object properties.

console.log(name); // "JavaScript"
console.log(courseName); // "JavaScript"

