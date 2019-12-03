const main = require('../main');
const expect = require('chai').expect;

describe('programalarm', () => {
    describe('calculateProgramAlarm', () => {
        it('should be 2,0,0,0,99', () => {
            expect(main.calculateProgramAlarm('1,0,0,0,99'.split(',').map(Number))).to.be.equal('2,0,0,0,99');
        });
        it('should be 2,3,0,6,99', () => {
            expect(main.calculateProgramAlarm('2,3,0,3,99'.split(',').map(Number))).to.be.equal('2,3,0,6,99');
        });
        it('should be 2,4,4,5,99,9801', () =>  {
            expect(main.calculateProgramAlarm('2,4,4,5,99,0'.split(',').map(Number))).to.be.equal('2,4,4,5,99,9801');
        });
        it('should be 30,1,1,4,2,5,6,0,99', () => {
            expect(main.calculateProgramAlarm('1,1,1,4,99,5,6,0,99'.split(',').map(Number))).to.be.equal('30,1,1,4,2,5,6,0,99');
        });
        it('should be 3500,9,10,70,2,3,11,0,99,30,40,50', () => {
            expect(main.calculateProgramAlarm('1,9,10,3,2,3,11,0,99,30,40,50'.split(',').map(Number))).to.be.equal('3500,9,10,70,2,3,11,0,99,30,40,50');
        });
    });
});

describe('answer', () =>{
    it('shoud be 3058646', () => {
        expect(main.answer(12,2)[0]).to.be.equal(3058646);
    });
    it('should be 19690720', () => {
        expect(main.answer(89,76)[0]).to.be.equal(19690720);
    });
});


describe('findResult', () =>{
    it('should be 12', () => {
        let outcome = main.findResult();
        expect(outcome[1]).to.be.equal(89);
        expect(outcome[2]).to.be.equal(76);
        expect(outcome[0]).to.be.equal(19690720);
    });
});



