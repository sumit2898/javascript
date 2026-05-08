const score = 100;
console.log(score);// 100

const score2 = new Number(200);
console.log(score2); // [Number: 200]

console.log(score.toStringe()); // 100
console.log(score.toFixed(2)); // 100.00

const num1 = 10.1738;

console.log(num1.toPrecision(3)); // 10.2

const num2 = 10000000;
console.log(num2.toLocaleString()); // 10,000,000
console.log(num2.toLocaleString('en-IN')); // 1,00,00,000


// math object
console.log(Math);// 3.141592653589793
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1


console.log(Math.random()); // 0.123456789
console.log(Math.floor(Math.random() * 10)); // 0 to 9

min = 10 ;
max = 20 ;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20