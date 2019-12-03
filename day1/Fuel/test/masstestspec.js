const main = require('../main');
const expect = require('chai').expect;

describe('mass test', () => {
    describe('calculateMass', () => {
        it('should be 2', () => {
            expect(main.calculateMass(12)).to.be.equal(2);
        });
        it('should be 2', () => {
            expect(main.calculateMass(14)).to.be.equal(2);
        });
        it('should be 654', () => {
            expect(main.calculateMass(1969)).to.be.equal(654);
        });
        it('should be 33583', () => {
            expect(main.calculateMass(100756)).to.be.equal(33583);
        });
    });
});

describe('mass test fuel cost', () => {
    describe('calclateMassIncludingFuel', () => {
        it('should be 2', () => {
            expect(main.calculateMassIncludingFuel(14)).to.be.equal(2);
        });
        it('should be 966', () => {
            expect(main.calculateMassIncludingFuel(1969)).to.be.equal(966);
        });
        it('should be 50346', () => {
            expect(main.calculateMassIncludingFuel(100756)).to.be.equal(50346);
        });
    });
});

describe('totalMass', () => {
    describe('calculateTotalMassFromInput', () => {
        it('should be 3239890', () => {
            main.calculateTotalMassFromInput('input', function(massTotal){
            expect(massTotal).to.be.equal(3239890);
        });
    });
});
});

describe('totalMassIncludingFuel', () => {
    describe('calculateMassIncludingFuel', () => {
        it('should be 4856963', () => {
            main.calclateTotalMassIncludingFuel('input', function(massTotal){
            expect(massTotal).to.be.equal(4856963);
        });
    });
});
});
