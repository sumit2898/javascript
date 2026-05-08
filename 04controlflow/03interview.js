//falsy values: false, 0,-0, 0n,"", null, undefined, NaN

//truthy values: all values that are not falsy

// Surprise trulhy values: [], {}, function(){}, "0", "false", new Boolean(false), new Number(0), new String(""), new String(" "), new String("false")

//nullish coalescing operator (??) : null or undefined

let val;
val = 5 ?? 10; // returns 5

val = null ?? 10; // returns 10

val = undefined ?? 10; // returns 10

//ternary operator: condition ? expression1 : expression2

const age = 18;
const isAdult = age >= 18 ? "You are an adult" : "You are a minor";
console.log(isAdult);