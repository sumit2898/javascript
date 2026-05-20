class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sumit`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("s@sumit.ai", "abc")
console.log(hitesh.email);

//

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const kumar = new User("kumar@k.com", "kumar")

console.log(kumar.email);



//object using getters and setters

const User = {
    _email: 's@sk.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const kumar = Object.create(User)
console.log(kumar.email);