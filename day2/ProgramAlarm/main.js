const numberOfValuesInInstruction = 4;
const input = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,2,19,6,23,1,23,5,27,1,9,27,31,1,31,10,35,2,35,9,39,1,5,39,43,2,43,9,47,1,5,47,51,2,51,13,55,1,55,10,59,1,59,10,63,2,9,63,67,1,67,5,71,2,13,71,75,1,75,10,79,1,79,6,83,2,13,83,87,1,87,6,91,1,6,91,95,1,10,95,99,2,99,6,103,1,103,5,107,2,6,107,111,1,10,111,115,1,115,5,119,2,6,119,123,1,123,5,127,2,127,6,131,1,131,5,135,1,2,135,139,1,139,13,0,99,2,0,14,0';
self = this;
const addressOne = 1;
const addressTwo = 2;
const desiredOutcome = 19690720;

exports.calculateProgramAlarm = function(memoryArray){
    let result;
    for (instructionPointer =0; instructionPointer< memoryArray.length; instructionPointer=instructionPointer+numberOfValuesInInstruction){
    let parameterOne = memoryArray[addressOne+instructionPointer];
    let parameterTwo = memoryArray[addressTwo+instructionPointer];
    let parameterThree = memoryArray[3+instructionPointer];
    switch (memoryArray[0+instructionPointer]){
        case 1:
            result = memoryArray[parameterOne] + memoryArray[parameterTwo];
            memoryArray[parameterThree] = result;
            break;
        case 2:
            result = memoryArray[parameterOne]*memoryArray[parameterTwo];
            memoryArray[parameterThree] = result;
            break;
        case 99:
            break;
    }
    }
    return memoryArray.toString();
    
};

exports.answer = function(noun, verb){
    let memory = replaceInput(input, noun, verb);
    let answer = self.calculateProgramAlarm(memory);
    let answerArray = answer.split(',').map(Number);
    return answerArray;
};

function replaceInput(memory, noun, verb){
    let inputArray = memory.split(',').map(Number);
    inputArray[addressOne] = noun;
    inputArray[addressTwo] = verb;
    return inputArray;
};

exports.findResult = function(){
   let result = 0;
   let adjustedInput;
   for (noun = 0; noun <= 99 && result !== desiredOutcome; noun++){
       for(verb = 0; verb <=99 && result !== desiredOutcome; verb++){
           adjustedInput = self.answer(noun, verb);
           result = adjustedInput[0];
       }
   };
   console.log('adjustedIput: ' + adjustedInput);
   return adjustedInput;
};


