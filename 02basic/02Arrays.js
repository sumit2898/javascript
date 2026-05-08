const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// console.log(array1.push(array2)); // 6
// console.log(array1); // [1, 2, 3, [4, 5, 6]]

console.log(array = array1.concat(array2)); // [1, 2, 3, 4, 5, 6]

console.log([...array1, ...array2]); // [1, 2, 3, 4, 5, 6] // spread operator is used to spread the elements of the array into a new array.

const array3 = [7, 8, 9 , [11, 12, 13], 10, 14, 15,[16, 17, 18]];

console.log(array3.flat()); // [7, 8, 9 , 11, 12, 13, 10, 14, 15, 16, 17, 18] // flat method is used to flatten the array. It removes the nested arrays and returns a new array with all the elements in a single level.

const str = "Hello World";


console.log(Array.isArray(str)); // false

console.log(Array.from(str)); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"] // from method is used to create a new array from an array-like or iterable object. In this case, it creates an array of characters from the string.

n1 =100;
n2 = 200;

console.log(Array.of(n1, n2)); // [100, 200] // of method is used to create a new array from a variable number of arguments. In this case, it creates an array with the values of n1 and n2.