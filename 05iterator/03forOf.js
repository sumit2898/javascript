// // for of 
// let arr = [1, 2, 3, 4, 5];

// for (let num of arr) {
//   console.log(num);
// }

// const st = "hello world";
// for (let char of st) {
//   console.log(char);
// }

//Map 
// A Map is a collection of key-value pairs where both keys and values can be of any type. It maintains the order of insertion and allows for efficient retrieval of values based on their keys.

const obj = {
    a: 1,
    b: 2,
    c: 3
};

for (const key of obj) {
    console.log(key); // This will throw an error because objects are not iterable by default.
}

const myMap = new Map();

myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

console.log(myMap); 

for (const [i, j] of myMap) {
    console.log(i, j);
    
}