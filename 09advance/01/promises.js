const promiseOne = new Promise( function(resolve,reject){
    setTimeout(function(){
        console.log('task is completed');

    },1000);
    resolve();
});

promiseOne.then(function(){
    console.log('promise comsume');

})

new Promise( function(resolve,reject){
    setTimeout(function(){
        console.log('task2 is completed');

    },1000);
    resolve();
}).then(function(){
    console.log('promise2 comsume');

})

const promise3= new Promise(function( resolve,reject){
    setTimeout(function(){
        resolve({usern : 'sumit' , age : 20})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "sumit", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log( " Promise is resolve or rejected")
})



const promise5 = new Promise((resolve,reject) =>{
  setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "sumit", password: "123"})
        } else {
            reject('ERROR1: Something went wrong')
        }
    }, 1000)  
} );

async function promise5Resolve(){
    
    try{
        const response = await promise5
    console.log(response)

    }catch(error){
        console.log(error)

    }
}

// async function getalluser() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await data.json()
//     console.log(users);
    
// };

// getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log("error")
})