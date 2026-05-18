let myName = "Sumit  ";


//console.log(myName.trim().length); // length is a property of string
console.log(myName.trueLength);

const arr = [1,2,3,4,5]

let user ={
    name: "Sumit",
    age: 25,
    getName: function(){
       console.log(this.name);
    }
}

Array.prototype.sumit = function(){
    console.log("This is a new method added to the Array prototype");
}

// Object.prototype.sumit = function(){
//     console.log("This is a new method added to the Object prototype");
// }

user.sumit();
myName.sumit();
arr.sumit();


//Inheritence
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()