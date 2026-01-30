const fs = require('fs');
var data = fs.readFileSync('brainrots.json', 'utf8');    
var brainrotData = JSON.parse(data);

console.log(calculateBrainrotString(10));

function calculateBrainrotString(input) {
    let number = input;
    let result = "";
    while((number / 67) >= 1) {
        result =  brainrotData[number % 67] + result;
        number = Math.trunc(number / 67);
    }

    return result;
}