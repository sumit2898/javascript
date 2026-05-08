function  saymyname(){
    console.log( " My name is Sumit" );
}

// const addone = funxtion(num){
//     return num + 1;
// }

saymyname(); // function call or function invocation is used to execute the function. It is a way to run the code inside the function and get the output.

saymyname; // function reference is used to refer to the function without executing it. It is a way to get the function object and use it later in the code.

function add(a,b){
    return a+b;
}
console.log(add(2,3)); // 5 && 2 and 3 are the arguments

const sum = add(4,5); // 9 && 4 and 5 are the arguments
console.log(sum); // 9

function loginmeassage(username){
    return `Welcome ${username} to the JavaScript course!`;
}
console.log(loginmeassage("Sumit")); // "Welcome Sumit to the JavaScript course!" && "Sumit" is the argument
console.log(loginmeassage("")); // "Welcome  to the JavaScript course!" && "" is the argument
console.log(loginmeassage()); // "Welcome undefined to the JavaScript course!" && undefined is the argument

function printnum(...numbers , a,b,c){
    return numbers;
}
// console.log(printnum(1,2,3,4,5)); // [1, 2, 3, 4, 5] && this is array .
console.log(printnum(1,2,3,4,5,6,7,8,)); // [1, 2, 3, 4, 5, 6, 7, 8] && this is array . && ...numbers is used to collect the remaining arguments into an array. It is a way to handle variable number of arguments in a function.


const user  = {
    name :  " Sumit",
    age : 22,
    email : "abc@gmail.com",
}

function handleuser(anyobject){
    return `Name: ${anyobject.name}, Age: ${anyobject.age}, Email: ${anyobject.email}`;
}

console.log(handleuser(user)); // "Name:  Sumit, Age: 22, Email:

console.log(handleuser({name : "Sumit", age : 22, email : "abcc@gmailcom"})); // "Name:  Sumit, Age: 22, Email: abcc@gmailcom" && this is an object literal. It is a way to create an object on the fly and pass it as an argument to the function.

const myarray = [1,2,3,4,5];
function handlearray(anyarray){
    return anyarray;
}   

console.log(handlearray(myarray)); // [1, 2, 3, 4, 5] && this is an array. It is a way to create an array on the fly and pass it as an argument to the function.
console.log(handlearray([6,7,8,9,10])); // [6, 7, 8, 9, 10] && this is an array literal. It is a way to create an array on the fly and pass it as an argument to the function.
