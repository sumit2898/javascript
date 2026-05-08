const name = "sumit";
const sirname = "kumar";
const fullName = name + " " + sirname; // concatenation

console.log(`Full Name: ${name}  ${sirname}`); // Full Name: sumit kumar

const game = new String("cricket");
console.log(game); // [String: 'cricket']
console.log(typeof game); // object
console.log(game[0]); // c
console.log(game__proto__); // String {length: 7, constructor: ƒ, charAt: ƒ, charCodeAt: ƒ, concat: ƒ, …}

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));