// Immediately Invoked Function Expression (IIFE)

(function chai(){//named iffe
    console.log("I am a chai function");
})(); // "I am a chai function" && this is because the function is immediately invoked after it is defined. The parentheses at the end of the function definition are used to invoke the function immediately. IIFE is a common pattern in JavaScript to create a new scope and avoid polluting the global scope. It is often used to encapsulate code and create private variables and functions.

( () => {
    console.log("I am an arrow function");
})(); // "I am an arrow function" 
