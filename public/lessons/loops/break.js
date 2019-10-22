const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const item of array) {
    if (item % 5 === 0) break;
    console.log(item); 
}