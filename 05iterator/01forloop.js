for(let i = 0; i < 5; i++) {
    console.log(i);
}

// nested for loop 

for ( let i =0 ; i < 5 ; i++) {
    for ( let j = 0 ; j < 5 ; j++) {
        console.log(`i: ${i} , j: ${j}`);
    }
}

// break and continue
for ( let i = 0 ; i < 5 ; i++) {
    if ( i === 2) {
        continue; // skip the rest of the loop and move to the next iteration
    }
    console.log(i); 
    if ( i === 4) {
        break; // exit the loop
    }
}