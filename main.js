const readline = require('readline');
const fs = require('fs');
let totalMass = 0;

const readInterface = readline.createInterface({
    input: fs.createReadStream('input'),
    output: process.stdout,
    console: false
});



readInterface.on('line', function(line) {
    totalMass = totalMass + calculateMass(line);
    console.log(totalMass);
});

function calculateMass(input){
    let mass = Math.floor(input/3)-2;
    console.log("mass:" + mass);
    return mass;
}
