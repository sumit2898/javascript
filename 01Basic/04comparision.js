console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === 2); // true
console.log(2 === "2"); // false
console.log(2 != 3); // true
console.log(2 != "2"); // false
console.log(2 !== 3); // true
console.log(2 !== "2"); // true

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false


// === Strict equality operator (===) checks for both value and type equality. It returns true if both operands are of the same type and have the same value, and false otherwise. For example:
console.log(2 === 2); // true
console.log(2 === "2"); // false
