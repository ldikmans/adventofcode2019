const main = require('../main');
const expect = require('chai').expect;

describe('six digits', () => {
    it('should be true', () => {
        expect(main.sixdigits(111111)).to.be.true;
    });
    it('should be true', () => {
        expect(main.sixdigits(11111.1)).to.be.true;
    });
    it('should be false', () => {
        expect(main.sixdigits(11111)).to.be.false;
    });
});

describe('in range', () => {
    it('should be true', () => {
        expect(main.isInRange(3, 5, 4)).to.be.true;
    });
    it('should be true', () => {
        expect(main.isInRange(3, 5, 3)).to.be.true;
    });
    it('should be false,', () => {
        expect(main.isInRange(3, 5, 2)).to.be.false;
    });
});

describe('one double minimum', () => {
    it('111111 should be true', () => {
        expect(main.oneDouble(111111)).to.be.true;
    });
    it('223450 should be true', () => {
        expect(main.oneDouble(223450)).to.be.true;
    });
    it('123789 should be false', () => {
        expect(main.oneDouble(123789)).to.be.false;
    });
    it('88 should be true', () => {
        expect(main.oneDouble(88)).to.be.true;
    });
    it('339 should be true', () => {
        expect(main.oneDouble(339)).to.be.true;
    });
    it('399 should be true', () => {
        expect(main.oneDouble(399)).to.be.true;
    });
    it('1 should be false', () => {
        expect(main.oneDouble(1)).to.be.false;
    });
    it('359288 should be true', () => {
        expect(main.oneDouble(359288)).to.be.true;
    });
});
describe('OneDoubleNoTriple', () => {
    it('112233 should be true', () => {
        expect(main.oneDoubleNoTriple(112233)).to.be.true;
    });
    it('123444 should be false', () => {
        expect(main.oneDoubleNoTriple(123444)).to.be.false;
    });
    it('111122 should be true', () => {
        expect(main.oneDoubleNoTriple(111122)).to.be.true;
    });
    it('11222 should be true', () => {
        expect(main.oneDoubleNoTriple(11222)).to.be.true;
    });
    it('34222 should be false', () => {
        expect(main.oneDoubleNoTriple(34222)).to.be.false;
    });
    it('343 should be false', () => {
        expect(main.oneDoubleNoTriple(343)).to.be.false;
    });

    it('22 should be true', () => {
        expect(main.oneDoubleNoTriple(22)).to.be.true;
    });

    it('222 should be false', () => {
        expect(main.oneDoubleNoTriple(222)).to.be.false;
    });
});

describe('digits never decrease', () => {
    it('should be true', () => {
        expect(main.digitsNeverDecrease(111111)).to.be.true;
    });
    it('223450 should be false', () => {
        expect(main.digitsNeverDecrease(223450)).to.be.false;
    });
    it('123789 should be true', () => {
        expect(main.digitsNeverDecrease(123789)).to.be.true;
    });
});

describe('secure Container', () => {
    it('should be true', () => {
        expect(main.meetsCriteria(111111)).to.be.true;
    });
    it('should be false', () => {
        expect(main.meetsCriteria(223450)).to.be.false;
    });
    it('should be false', () => {
        expect(main.meetsCriteria(123789)).to.be.false;
    });
    it('should be false', () => {
        expect(main.meetsCriteria(359288)).to.be.false;
    });
});

describe('new secure Container', () => {
    it('112233 should be true', () => {
        expect(main.meetsNewCriteria(112233)).to.be.true;
    });
    it('123444 should be false', () => {
        expect(main.meetsNewCriteria(123444)).to.be.false;
    });
    it('111122 should be true', () => {
        expect(main.meetsNewCriteria(111122)).to.be.true;
    });
});

describe('numberOfValidPasswords', () => {
    let callback = main.meetsCriteria;
    it('it should be 511', () => {
        expect(main.numberOfValidPasswords(359282, 820401, callback)).to.be.equal(511);
    });
    it('it should be 316', () => {
        let callback2 = main.meetsNewCriteria;
        expect(main.numberOfValidPasswords(359282, 820401, callback2)).to.be.equal(316);
    });
});




