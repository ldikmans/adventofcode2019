const readline = require('readline');
const fs = require('fs');

let input;
let self = this;

exports.calculateMass = function (input) {
    let mass = Math.floor(input / 3) - 2;
    return mass;
};

exports.calculateMassIncludingFuel = function (input) {
    let mass = (Math.floor(input / 3) - 2);
    if (mass > 0) {
        mass = mass + self.calculateMassIncludingFuel(mass);
        return mass;
    } else {
        return 0;
    }
};

exports.calculateTotalMassFromInput = function (fileName, callback) {
    self.input = fileName;
    let totalMass = 0;
    const readInterface = readline.createInterface({
        input: fs.createReadStream(self.input),
        output: process.stdout,
        terminal: false
    });

    readInterface.on('line', function (line) {
        totalMass = totalMass + self.calculateMass(line);
    });

    readInterface.on('close', function () {
        return callback(totalMass);
    });

};

exports.calclateTotalMassIncludingFuel = function (fileName, callback) {
    self.input = fileName;
    let totalMassIncludingFuel = 0;
    const readInterface = readline.createInterface({
        input: fs.createReadStream(self.input),
        output: process.stdout,
        terminal: false
    });

    readInterface.on('line', function (line) {
        totalMassIncludingFuel = totalMassIncludingFuel + self.calculateMassIncludingFuel(line);
    });

    readInterface.on('close', function () {
        return callback(totalMassIncludingFuel);
    });
};





