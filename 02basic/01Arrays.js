// Array
// An array is a data structure that can hold multiple values of different types.

const array = [1,1,3,4,"sumit", true, null, undefined, {name: "john"}, [1,2,3]];

console.log(array[0]); // 1

//methods of array
console.log(array.length); // 10
console.log(array.push("new value")); // 11
console.log(array); // [1,1,3,4,"sumit", true, null, undefined, {name: "john"}, [1,2,3], "new value"]
console.log(array.pop());
console.log(array); // [1,1,3,4,"sumit", true, null, undefined, {name: "john"}, [1,2,3]]

console.log(array.unshift("first value")); // 11
console.log(array); // ["first value", 1,1,3,4,"sumit", true, null, undefined, {name: "john"}, [1,2,3]]
console.log(array.shift()); // "first value"
console.log(array); // [1,1,3,4,"sumit", true, null, undefined, {name: "john"}, [1,2,3]]

console.log(array.indexOf("sumit")); // 4
console.log(array.includes("sumit")); // true

const newArray = array.join("-");
console.log(newArray); // "1-1-3-4-sumit-true-null-undefined-[object Object]-1,2,3" // join method converts all the elements of the array into a string and returns the string.

console.log(array.slice(0,4)); // [1,1,3,4] // slice method returns a new array containing the elements from the start index to the end index (not inclusive).

console.log(array.splice(0,4)); // [1,1,3,4] // splice method removes the elements from the start index to the end index (not inclusive) and returns the removed elements as a new array.

console.log(array); // ["sumit", true, null, undefined, {name: "john"}, [1,2,3]] // splice method modifies the original array.