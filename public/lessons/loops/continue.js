const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const item of array) {
    if (item % 3 === 0) continue;
    console.log(item); 
}