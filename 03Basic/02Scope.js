{let a = 1; 
const b = 2;
var c = 3;
d=4;
}

console.log(a); // ReferenceError: a is not defined && this is because a is declared with let and it is block scoped. It means that a is only accessible within the block where it is declared. In this case, a is declared inside the block and it is not accessible outside the block.
console.log(b); // ReferenceError: b is not defined && this is because b is declared with const and it is block scoped. It means that b is only accessible within the block where it is declared. In this case, b is declared inside the block and it is not accessible outside the block.
console.log(c); // 3 && this is because c is declared with var and it is function scoped. It means that c is accessible within the function where it is declared. In this case, c is declared inside the block and it is accessible outside the block because var does not have block scope.
console.log(d); // 4 && this is because d is not declared with any keyword and it is global scoped. It means that d is accessible anywhere in the code. In this case, d is declared inside the block and it is accessible outside the block because it is global scoped. However, it is not recommended to declare variables without any keyword as it can lead to unintended consequences and bugs in the code.


function one(){
    const user = "sumit";
    function two(){
        const websit = "www.google.com";
        console.log(user); 
    }
    console.log(websit);
    two();

}

one(); // ReferenceError: websit is not defined && this is because websit is declared with const and it is block scoped. It means that websit is only accessible within the block where it is declared. In this case, websit is declared inside the function two and it is not accessible outside the function two.


