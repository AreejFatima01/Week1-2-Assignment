"use strict";
// write a program that determines if a person is eligibleto vote based on their age
function checkVoterEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    }
    else {
        return "You are not eligible to vote.";
    }
}
// Example 
const userAge = 20;
const eligibilityStatus = checkVoterEligibility(userAge);
console.log(eligibilityStatus);
