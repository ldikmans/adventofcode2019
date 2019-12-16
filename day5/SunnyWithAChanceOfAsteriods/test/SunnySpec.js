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
        it('should be 2,4,4,5,99,9801', () => {
            expect(main.calculateProgramAlarm('2,4,4,5,99,0'.split(',').map(Number))).to.be.equal('2,4,4,5,99,9801');
        });
        it('should be 30,1,1,4,2,5,6,0,99', () => {
            expect(main.calculateProgramAlarm('1,1,1,4,99,5,6,0,99'.split(',').map(Number))).to.be.equal('30,1,1,4,2,5,6,0,99');
        });
        it('should be 3500,9,10,70,2,3,11,0,99,30,40,50', () => {
            expect(main.calculateProgramAlarm('1,9,10,3,2,3,11,0,99,30,40,50'.split(',').map(Number))).to.be.equal('3500,9,10,70,2,3,11,0,99,30,40,50');
        });
        it('should be 50,0,4,0,99', () => {
            let memoryArray = ('3,0,4,0,99').split(',').map(Number);
            expect(main.calculateProgramAlarm(memoryArray, 50)).to.be.equal('50,0,4,0,99');
        });
        it('should be 1002,4,3,4,99', () => {
            expect(main.calculateProgramAlarm('1002,4,3,4,33'.split(',').map(Number))).to.be.equal('1002,4,3,4,99');
        });
        it('should be 1101,100,-1,4,99', () => {
            expect(main.calculateProgramAlarm('1101,100,-1,4,0'.split(',').map(Number))).to.be.equal('1101,100,-1,4,99');
        });
        it('should be 101, -64, -62, 2, 99', () => {
            expect(main.calculateProgramAlarm('101,-64,2,2,99'.split(',').map(Number))).to.be.equal('101,-64,-62,2,99');
        });
        it('should be 101,-64,35,2,99', () => {
            expect(main.calculateProgramAlarm('101,-64,4,2,99'.split(',').map(Number))).to.be.equal('101,-64,35,2,99');
        });
        it('should be 1001,4,96,2,99', () => {
            expect(main.calculateProgramAlarm('1001,4,-3,2,99'.split(',').map(Number))).to.be.equal('1001,4,96,2,99');
        });
        it('should be 99', () => {
            expect(main.calculateProgramAlarm('99,4,-3,2,99'.split(',').map(Number))).to.be.equal('99,4,-3,2,99');
        });
    });
});

describe('answer', () => {
    it('shoud be 3058646', () => {
        expect(main.answer(12, 2)[0]).to.be.equal(3058646);
    });
    it('should be 19690720', () => {
        expect(main.answer(89, 76)[0]).to.be.equal(19690720);
    });
});


describe('findResult', () => {
    it('should be 12', () => {
        let outcome = main.findResult();
        expect(outcome[1]).to.be.equal(89);
        expect(outcome[2]).to.be.equal(76);
        expect(outcome[0]).to.be.equal(19690720);
    });
});

describe('test', () => {
    it('should be 13978427', () => {
        expect(main.test(1)).to.be.equal(13978427);
    });
    it('should be 1', () => {
        expect(main.testValue('3,9,8,9,10,9,4,9,99,-1,8', 8)).to.be.equal(1);
    });
    it('should be 0', () => {
        expect(main.testValue('3,9,8,9,10,9,4,9,99,-1,8', -8)).to.be.equal(0);
    });
    it('should be 0', () => {
        expect(main.testValue('3,9,8,9,10,9,4,9,99,-1,8', 1)).to.be.equal(0);
    });
    it('should be 0', () => {
        expect(main.testValue('3,9,8,9,10,9,4,9,99,-1,8', 0)).to.be.equal(0);
    });
    it('should be 1', () => {
        expect(main.testValue('3,9,7,9,10,9,4,9,99,-1,8', 7)).to.be.equal(1);
    });
    it('should be 1', () => {
        expect(main.testValue('3,9,7,9,10,9,4,9,99,-1,8', -8)).to.be.equal(1);
    });
    it('should be 0', () => {
        expect(main.testValue('3,9,7,9,10,9,4,9,99,-1,8', 8)).to.be.equal(0);
    });
    it('should be 0', () => {
        expect(main.testValue('3,9,7,9,10,9,4,9,99,-1,8', 9)).to.be.equal(0);
    });
    it('should be 1', () => {
        expect(main.testValue('3,3,1108,-1,8,3,4,3,99', 8)).to.be.equal(1);
    });
    it('should be 0', () => {
        expect(main.testValue('3,3,1108,-1,8,3,4,3,99', -8)).to.be.equal(0);
    });
    it('should be 0', () => {
        expect(main.testValue('3,3,1108,-1,8,3,4,3,99', 1)).to.be.equal(0);
    });
    it('should be 0', () => {
        expect(main.testValue('3,3,1108,-1,8,3,4,3,99', 0)).to.be.equal(0);
    });
    it('should be 1', () => {
        expect(main.testValue('3,3,1107,-1,8,3,4,3,99', 7)).to.be.equal(1);
    });
    it('should be 0', () => {
        expect(main.testValue('3,3,1107,-1,8,3,4,3,99', 8)).to.be.equal(0);
    });
    it('should be 0', () => {
        expect(main.testValue('3,3,1107,-1,8,3,4,3,99', 9)).to.be.equal(0);
    });
    it('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9  position mode jumping should be 0 with 0 as input', () => {
        expect(main.testValue('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9', 0)).to.be.equal(0);
    });
    it('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 should be 1', () => {
        expect(main.testValue('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9', 3)).to.be.equal(1);
    });
      it('3,3,1105,-1,9,1101,0,0,12,4,12,99,1 immediate mode jumping should be 0 with 0 as input', () => {
        expect(main.testValue('3,3,1105,-1,9,1101,0,0,12,4,12,99,1', 0)).to.be.equal(0);
    });
    it('3,3,1105,-1,9,1101,0,0,12,4,12,99,1 should be 1', () => {
        expect(main.testValue('3,3,1105,-1,9,1101,0,0,12,4,12,99,1', 3)).to.be.equal(1);
    });
     it('3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99', () =>{
       expect(main.testValue('3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99', 7)).to.be.equal(999);
    });
    it('3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99', () =>{
       expect(main.testValue('3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99', 8)).to.be.equal(1000);   
    });
    it('3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99', () =>{
       expect(main.testValue('3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99', 9)).to.be.equal(1001);
    });
      it('should be  11189491', () => {
        expect(main.test(5)).to.be.equal(11189491);
    });
});





