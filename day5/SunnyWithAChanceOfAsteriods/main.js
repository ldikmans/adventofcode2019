const input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,2,19,6,23,1,23,5,27,1,9,27,31,1,31,10,35,2,35,9,39,1,5,39,43,2,43,9,47,1,5,47,51,2,51,13,55,1,55,10,59,1,59,10,63,2,9,63,67,1,67,5,71,2,13,71,75,1,75,10,79,1,79,6,83,2,13,83,87,1,87,6,91,1,6,91,95,1,10,95,99,2,99,6,103,1,103,5,107,2,6,107,111,1,10,111,115,1,115,5,119,2,6,119,123,1,123,5,127,2,127,6,131,1,131,5,135,1,2,135,139,1,139,13,0,99,2,0,14,0';
const testInput = '3,225,1,225,6,6,1100,1,238,225,104,0,2,136,183,224,101,-5304,224,224,4,224,1002,223,8,223,1001,224,6,224,1,224,223,223,1101,72,47,225,1101,59,55,225,1101,46,75,225,1101,49,15,224,101,-64,224,224,4,224,1002,223,8,223,1001,224,5,224,1,224,223,223,102,9,210,224,1001,224,-270,224,4,224,1002,223,8,223,1001,224,2,224,1,223,224,223,101,14,35,224,101,-86,224,224,4,224,1002,223,8,223,101,4,224,224,1,224,223,223,1102,40,74,224,1001,224,-2960,224,4,224,1002,223,8,223,101,5,224,224,1,224,223,223,1101,10,78,225,1001,39,90,224,1001,224,-149,224,4,224,102,8,223,223,1001,224,4,224,1,223,224,223,1002,217,50,224,1001,224,-1650,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1102,68,8,225,1,43,214,224,1001,224,-126,224,4,224,102,8,223,223,101,3,224,224,1,224,223,223,1102,88,30,225,1102,18,80,225,1102,33,28,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,108,677,677,224,102,2,223,223,1005,224,329,1001,223,1,223,1107,677,226,224,102,2,223,223,1006,224,344,1001,223,1,223,108,226,226,224,102,2,223,223,1005,224,359,1001,223,1,223,1108,677,226,224,102,2,223,223,1006,224,374,101,1,223,223,108,677,226,224,102,2,223,223,1006,224,389,1001,223,1,223,107,226,226,224,102,2,223,223,1005,224,404,1001,223,1,223,8,226,226,224,102,2,223,223,1006,224,419,101,1,223,223,1107,677,677,224,102,2,223,223,1006,224,434,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,449,101,1,223,223,7,677,677,224,1002,223,2,223,1006,224,464,1001,223,1,223,1108,226,677,224,1002,223,2,223,1005,224,479,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,494,101,1,223,223,7,226,677,224,102,2,223,223,1005,224,509,101,1,223,223,1008,677,226,224,102,2,223,223,1006,224,524,101,1,223,223,8,226,677,224,1002,223,2,223,1006,224,539,1001,223,1,223,1007,677,677,224,102,2,223,223,1005,224,554,101,1,223,223,107,226,677,224,1002,223,2,223,1005,224,569,1001,223,1,223,1108,677,677,224,1002,223,2,223,1006,224,584,1001,223,1,223,1008,226,226,224,1002,223,2,223,1005,224,599,101,1,223,223,1008,677,677,224,102,2,223,223,1005,224,614,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,629,1001,223,1,223,107,677,677,224,1002,223,2,223,1006,224,644,101,1,223,223,1007,226,677,224,1002,223,2,223,1005,224,659,1001,223,1,223,1007,226,226,224,102,2,223,223,1005,224,674,101,1,223,223,4,223,99,226'
const desiredOutcome = 19690720;
const addressOne = 1;
const addressTwo = 2;
const POSITION_MODE = 0;
const IMMEDIATE_MODE = 1;
let self = this;
let outputValue;


exports.getOutPutValue = function(){
    return this.outputValue;
};

exports.calculateProgramAlarm = function (memoryArray, inputValue) {
    for (let instructionPointer = 0; instructionPointer < memoryArray.length;)  {
        let opcodeInstruction = memoryArray[instructionPointer];
        let opcodeInstructionString = opcodeInstruction.toString();
        let opcode;
        let length = opcodeInstructionString.length;
        if(length === 2 ) {
            if(Number(opcodeInstructionString.substring(length-2,length)) === 99){
                opcode = 99;
            }
        }
        else{
            opcode = getDigit(opcodeInstruction, 1);
        }
        let parameterOneMode = getDigit(opcodeInstruction, 3);
        let parameterTwoMode = getDigit(opcodeInstruction, 4);
        let parameterThreeMode = getDigit(opcodeInstruction, 5);
        let parameterOne = memoryArray[1 + instructionPointer];
        let parameterTwo = memoryArray[addressTwo + instructionPointer];
        let parameterThree = memoryArray[3 + instructionPointer];
        let result = 0;
        switch (parseInt(opcode, 10)) {
            case 1:
                if(parameterOneMode === POSITION_MODE){
                    result = memoryArray[parameterOne];
                  }else {
                     result = parameterOne;
                }
                if(parameterTwoMode === POSITION_MODE){
                    result = result + memoryArray[parameterTwo];
                    
                }else{
                    result = result + parameterTwo;
                }
                if(parameterThreeMode === POSITION_MODE){
                      memoryArray[parameterThree] = result;
                } else{
                    console.log('ERROR case 1 - the third parameter is in IMMEDIATE MODE!');
                }
                instructionPointer = instructionPointer + 4;
                break;
            case 2:
                 if(parameterOneMode === POSITION_MODE){
                    result = memoryArray[parameterOne];
                }else {
                    result = parameterOne;
                }
                if(parameterTwoMode === POSITION_MODE){
                    result = result * memoryArray[parameterTwo];
                }else{
                    result = result * parameterTwo;
                }
                if(parameterThreeMode === POSITION_MODE){
                      memoryArray[parameterThree] = result;
                } else{
                    console.log('CASE -2 ERROR - the third parameter is in IMMEDIATE MODE!');
                }
                instructionPointer = instructionPointer + 4;
                break;
            case 3:
                if(parameterOneMode === POSITION_MODE){
                    memoryArray[parameterOne] = inputValue;
                   }else{
                    console.log('CASE 3 - ERROR - the parameter is in IMMEDIATE MODE!');
                    console.log('opCodeInstruction was: ' + opcodeInstruction);
                    console.log('instructionPointer: ' + instructionPointer);
                }
                instructionPointer = instructionPointer + 2;
                break;
            case 4:
                if(parameterOneMode === POSITION_MODE){
                    outputValue = memoryArray[parameterOne];
                }
                else{
                    outputValue = parameterOne;
                }
                console.log('outputValue: ' + outputValue);
                instructionPointer = instructionPointer + 2;
                break;
            case 5: 
                let jump = false;
                if(parameterOneMode === POSITION_MODE){
                    if(memoryArray[parameterOne] != 0){
                        jump = true;
                        if(parameterTwoMode === POSITION_MODE){
                            instructionPointer = memoryArray[parameterTwo];
                        }
                        else{
                            instructionPointer = parameterTwo;
                        }
                    }
                } 
                else{
                    if(parameterOne != 0){
                        jump = true;
                        if(parameterTwoMode === POSITION_MODE){
                            instructionPointer = memoryArray[parameterTwo];
                        }
                        else{
                            instructionPointer = parameterTwo;
                        }
                    }
                }
                if(jump === false){
                    instructionPointer = instructionPointer + 3;
                }
                break;
            case 6:
                let jumpOnZero = false;
                if(parameterOneMode === POSITION_MODE){
                    if(memoryArray[parameterOne] === 0){
                        jumpOnZero = true;
                        if(parameterTwoMode === POSITION_MODE){
                            instructionPointer = memoryArray[parameterTwo];
                         }
                        else{
                            instructionPointer = parameterTwo;
                        }
                    }
                } 
                else{ //immediate mode for parameter one
                    if(parameterOne === 0){
                        jumpOnZero = true;
                        if(parameterTwoMode === POSITION_MODE){
                            instructionPointer = memoryArray[parameterTwo];
                        }
                        else{
                            instructionPointer = parameterTwo;
                        }
                    }
                }
                if(jumpOnZero === false){
                    instructionPointer = instructionPointer + 3;
                }
                break;
            case 7:
                let valueOne;
                let valueTwo;
                if(parameterOneMode === POSITION_MODE){
                    valueOne = memoryArray[parameterOne];
                  }else {
                     valueOne = parameterOne;
                }
                if(parameterTwoMode === POSITION_MODE){
                    valueTwo = memoryArray[parameterTwo];
                    
                }else{
                    valueTwo = parameterTwo;
                }
                if(parameterThreeMode === POSITION_MODE){
                    if(valueOne < valueTwo){
                         memoryArray[parameterThree] = 1;
                    } 
                    else{
                         memoryArray[parameterThree] = 0;
                    } 
                } else{
                    console.log('ERROR case 1 - the third parameter is in IMMEDIATE MODE!');
                }
                instructionPointer = instructionPointer + 4
                break;
            case 8:
                let valueOneEquals;
                let valueTwoEquals;
                if(parameterOneMode === POSITION_MODE){
                    valueOneEquals = memoryArray[parameterOne];
                  }else {
                     valueOneEquals = parameterOne;
                }
                if(parameterTwoMode === POSITION_MODE){
                    valueTwoEquals = memoryArray[parameterTwo];
                    
                }else{
                    valueTwoEquals = parameterTwo;
                }
                if(parameterThreeMode === POSITION_MODE){
                    if(valueOneEquals === valueTwoEquals){
                         memoryArray[parameterThree] = 1;
                    } 
                    else{
                         memoryArray[parameterThree] = 0;
                    } 
                } else{
                    console.log('ERROR case 1 - the third parameter is in IMMEDIATE MODE!');
                }
                instructionPointer = instructionPointer + 4
                break;
            case 99:
                instructionPointer = memoryArray.length;
                break;
        }
     };
    return memoryArray.toString();

};

exports.answer = function (noun, verb) {
    let memory = replaceInput(input, noun, verb);
    let answer = self.calculateProgramAlarm(memory);
    let answerArray = answer.split(',').map(Number);
    return answerArray;
};

function replaceInput(memory, noun, verb) {
    let inputArray = memory.split(',').map(Number);
    inputArray[addressOne] = noun;
    inputArray[addressTwo] = verb;
    return inputArray;
}
;

exports.findResult = function () {
    let result = 0;
    let adjustedInput;
    for (noun = 0; noun <= 99 && result !== desiredOutcome; noun++) {
        for (verb = 0; verb <= 99 && result !== desiredOutcome; verb++) {
            adjustedInput = self.answer(noun, verb);
            result = adjustedInput[0];
        }
    }
    ;
    console.log('adjustedIput: ' + adjustedInput);
    return adjustedInput;
};

function getDigit(number, n) {
    if(getDigitCount(number)>=n ){
       return Math.floor((number / Math.pow(10, n - 1)) % 10); 
    } else{
        return 0;
    }
  
};

function getDigitCount(number) {
  return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
};

exports.test = function(userValue){
   let inputArray = testInput.split(',').map(Number);
   if(userValue){    
        let result =  self.calculateProgramAlarm(inputArray, userValue);
        return outputValue;
    };
    return prompt('Please enter the ID of the system to run the diagnostics ', function (inputFromUser) {
        return self.calculateProgramAlarm(testInput, inputFromUser); 
    });
};

exports.testValue = function(userInput, userValue){
    let inputArray = userInput.split(',').map(Number);
    let result =  self.calculateProgramAlarm(inputArray, userValue);
    return outputValue;
};

function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
};
