const nums = [1, 2, 3, 4, 5];

const value = nums.forEach((num) => {
    console.log(num);
});// Output: 1, 2, 3, 4, 5
console.log(value);// Output: undefined

const mynums = [1, 2, 3, 4, 5];

const output = mynums.filter((num) => num % 2 === 0);
console.log(output);// Output: [2, 4]

const output2  = mynums.filter((num) => {
    return num % 2 === 0;
}); 
console.log(output2);// Output: [2, 4]

const newNums = [];
mynums.forEach((num) => {
    if (num % 2 === 0) {
        newNums.push(num);
    }
});
console.log(newNums);// Output: [2, 4]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);// Output: [ { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 } ]


// MAPS DISCUSSION

const number  = [1, 2, 3, 4, 5];
const squared = number.map((num) => num * num);
console.log(squared);// Output: [1, 4, 9, 16, 25]

// CHAINING METHODS

const chained = number.map((num) => num * num).map((num) => num + 1);
console.log(chained);// Output: [2, 5, 10, 17, 26]

// CHAINING METHODS WITH FILTER

const chained2 = number.map((num) => num * num).filter((num) => num > 10);
console.log(chained2);// Output: [16, 25]