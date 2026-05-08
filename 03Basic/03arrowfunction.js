const user = { 
    name : "Sumit",
    price  : 1000,
    welcome : function(){
        console.log(`Welcome ${this.name} to the JavaScript course!`); 
}
};

user.welcome(); // "Welcome Sumit to the JavaScript course!" && this is because this.name is used to access the name property of the user object. It is a way to refer to the current object and get its properties.

user.name = "Sumit Kumar";
user.welcome(); // "Welcome Sumit Kumar to the JavaScript course!" && this is because this.name is used to access the name property of the user object. It is a way to refer to the current object and get its properties. In this case, we have updated the name property of the user object and it is reflected in the welcome message.

const arrowwelcome = () => {
    console.log(`Welcome ${this.name} to the JavaScript course!`); 
}

arrowwelcome(); // "Welcome undefined to the JavaScript course!" && this is because this.name is used to access the name property of the user object. However, in arrow functions, this does not refer to the current object but it refers to the global object. In this case, there is no name property in the global object and it returns undefined. Arrow functions do not have their own this and they inherit this from the surrounding scope.

const addtwo = (a,b) => {
    return a+b;
}

const addthree = (a,b) => a+b;

const addtwo = (a,b) => (a+b);

const addtwo = () => ({a: 1, b: 2}); // this is an object literal. It is a way to return an object from an arrow function. We need to wrap the object literal in parentheses to avoid syntax errors.