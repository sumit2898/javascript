class User{
    constructor(username, loginCount, isLoggedIn){
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn
    }
    
    static getAdminName(){
        return "admin"
    }
}



const userOne = new User("sumit", 12, true)
console.log(userOne.constructor.getAdminName());



