const prolang = {
    js : 'JavaScript',
    py : 'Python',
    cpp : 'C++'
}

for (const key in prolang) {
    console.log(key);   
}// Output: js, py, cpp

for (const key in prolang) {
    console.log(prolang[key]);   
}// Output: JavaScript, Python, C++

for (const key in prolang) {
    console.log(`${key}: ${prolang[key]}`);
    
}// Output: js: JavaScript, py: Python, cpp: C++


const arr = [1,2,3,4,5];

for (const index in arr) {
    console.log(index); // Output: 0, 1, 2, 3, 4
}// it give index of array element

for (const index in arr) {
    console.log(arr[index]); // Output: 1, 2, 3, 4, 5
}// it give value of array element  

// it is not working on maps
