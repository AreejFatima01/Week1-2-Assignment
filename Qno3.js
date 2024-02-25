"use strict";
// Write a program that checks if a given number is positive,negative or zero.
function checkNumberSign(number) {
    if (number > 0) {
        return "Positive";
    }
    else if (number < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Example
const Input = 42;
const result = checkNumberSign(Input);
console.log(`The number is ${result}.`);
