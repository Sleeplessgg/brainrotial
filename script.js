 
var brainrotData = require('./brainrots.json');
console.log(calculateBrainrotString(68));

function calculateBrainrotString(input) {
    let number = input;
    let result = "";
    do{
        result =  brainrotData[number % 67] + "-" + result;
        number = Math.trunc(number / 67);
    } while(number >= 1);

    result = result.slice(0, -1);
    return result;
}