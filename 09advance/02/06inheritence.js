class Username{
    constructor(username){
        this.username= username
    }

    logIn(){
        console.log("you are login");
        
    }
}

class Teacher extends Username{
    constructor(username , email , password){
        super(username) 
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`new course added by ${this.username}`);
        
    }
}

const user = new Teacher('sumit', ' @gmail.com', '12345')
user.logIn()
user.addcourse()

const u = new Username('kumar')

u.logIn()