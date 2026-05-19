function setUserName (username){
    this.username= username;
}

function createUser(username, email,password){
    setUserName.call(this,username)
    this.email= email
    this.password= password

}
const sumit = new createUser('sumit','sumit@meta.com','sumit@123')
console.log(sumit);
