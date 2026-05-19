//E6

class Person {
    constructor(username, password, age){
        this.username = username
        this.password = password
        this.age = age 
    }   
    
    encryptPassword(){
        return `${this.password}###`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user =  new Person('sumit','1234',20)

console.log(user.encryptPassword());
console.log(user.changeUsername());

//Behind the seen 

function Person(username,password, age){
    this.username = username
        this.password = password
        this.age = age     
}

Person.prototype.encryptPassword = function(){
        return `${this.password}###`
    }

Person.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }