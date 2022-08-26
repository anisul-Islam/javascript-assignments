/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1
const charCheck = prompt("Enter any alphabet");

switch (charCheck) {
    case "a": console.log(`${charCheck} is vowel`);
        break;
    case "A": console.log(`${charCheck} is vowel`);
        break;
    case "e": console.log(`${charCheck} is vowel`);
        break;
    case "E": console.log(`${charCheck} is vowel`);
        break;
    case "i": console.log(`${charCheck} is vowel`);
        break;
    case "I": console.log(`${charCheck} is vowel`);
        break;
    case "o": console.log(`${charCheck} is vowel`);
        break;
    case "O": console.log(`${charCheck} is vowel`);
        break;
    case "u": console.log(`${charCheck} is vowel`);
        break;
    case "U": console.log(`${charCheck} is vowel`);

    default: console.log(`${charCheck} is consonant`)
        break;
}

// -------------- code end------------
