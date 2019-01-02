const fs = require('fs');
//console.log(fs)
console.log(1)
// fs.readFile('./input.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

console.log(fs.readFileSync('./input.txt').toString());
console.log(2)