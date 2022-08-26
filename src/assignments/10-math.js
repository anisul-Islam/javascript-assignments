/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1


let randomNumber = Math.floor(Math.random() * 30) + 1;

if (randomNumber >= 18 ) {
    console.log(`Valid voter's age is ${randomNumber} years`);
    
} else {
    console.log(`Invalid voter's age is ${randomNumber} years`)
}