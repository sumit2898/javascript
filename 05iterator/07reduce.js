const num = [1, 2, 3, 4, 5];

// const mynums= num.reduce(function(acc, curr) {
//     console.log(`Accumulator: ${acc}, Current Value: ${curr}`);
//     // Accumulator: 0, Current Value: 1
//     // Accumulator: 1, Current Value: 2
//     // Accumulator: 3, Current Value: 3
//     // Accumulator: 6, Current Value: 4
//     // Accumulator: 10, Current Value: 5
//     return acc + curr;
// }, 0);

// console.log(mynums);// Output: 15


const mynums2 = num.reduce((acc, curr) => acc + curr, 0);
console.log(mynums2);// Output: 15

//EXAMPLE

const shoppingCart = [
    { course : 'JavaScript', price: 100 },
    { course : 'Python', price: 80 },
    { course : 'Java', price: 90 },
    { course : 'C++', price: 70 },
];

const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice);// Output: 340