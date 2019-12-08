
self = this;

exports.meetsCriteria = function (password) {
    return (self.sixdigits(password) === true) && (self.oneDouble(password)) && (self.digitsNeverDecrease(password));
};

exports.meetsNewCriteria = function(password){
     return (self.sixdigits(password) === true) && (self.oneDoubleNoTriple(password)) && (self.digitsNeverDecrease(password));
};

exports.sixdigits = function (number) {
    return String(number).match(/\d/g).length === 6;
};

exports.isInRange = function (min, max, number) {
    return number >= min && number <= max;
};

exports.oneDouble = function (number) {
    let hasDouble = false;

    let numberString = number.toString();

    for (let i = 0; i < numberString.length - 1; i++) {
        if (numberString.substring(i, i + 1) === numberString.substring(i + 1, i + 1 + 1)) {
            hasDouble = true;
            return hasDouble;
        }
        ;
    }
    ;
    return hasDouble;
};

exports.oneDoubleNoTriple = function (number) {
    let hasDoubleNoTriple = false;
    let digit = '-1';
    let numberString = number.toString();
    for (let i = 0; i < numberString.length - 1; i++) {
        //find a pair
        let newDigit = numberString.substring(i, i+1);
        if(newDigit !== digit){
         if (newDigit === numberString.substring(i + 1, i+2)) {
            //that is not a triple so we can return true
            if ((i + 3) <= numberString.length) { 
                if (newDigit !== numberString.substring(i + 2, i + 3)) {
                    return true;
                }
                else{
                    digit = newDigit; //skip this set of digits entirely
                }
            }
            else { 
                return true; // a triple can't be made at the end
            }
        }
        }
        ;
    }
    ;
    return hasDoubleNoTriple;
};

exports.digitsNeverDecrease = function (number) {
    let doNeverDecrease = false;
    let numberString = number.toString();
    for (let i = 0; i < numberString.length - 1; i++) {
        if (numberString.substring(i, i + 1) <= numberString.substring(i + 1, i + 1 + 1)) {
            doNeverDecrease = true;
        } else {
            doNeverDecrease = false;
            return doNeverDecrease;
        }
    }
    return doNeverDecrease;
};

exports.numberOfValidPasswords = function (min, max, callback) {
    let numberOfValidPasswords = 0;
    let validPasswords = [];
    let currentNumber;
    for (let i = min; i <= max; i++) {
        currentNumber = i;
        if (callback(currentNumber) === true) {
            numberOfValidPasswords = numberOfValidPasswords + 1;
            validPasswords.push(currentNumber);
        }
        ;
    }
    ;
    console.log('number of validPasswords: ' + numberOfValidPasswords);
    return numberOfValidPasswords;

};


