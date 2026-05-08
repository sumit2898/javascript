console.log(Date); // [Function: Date]

const date = new Date();

console.log(typeof date)//object
console.log(date); // 2024-06-01T12:00:00.000Z
console.log(date.toString()); // Sat Jun 01 2024 12:00:00 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); // Sat Jun 01 2024
console.log(date.toISOString()); // 2024-06-01T12:00:00.000Z
console.log(date.toLocaleDateString()); // 6/1/2024
console.log(date.toLocaleTimeString()); // 12:00:00 PM

const date1 = new Date('2026 0 1 5 30');
console.log(date1); // 2026-01-01T00:00:00.000Z
console.log(date1.toLocaleString()); // 1/1/2026, 5:30:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})