/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1
let number1 = 20;
let number2 = 10;

let minValue = Math.min(number1, number2);

console.log(minValue)

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
let char = prompt()

if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    console.log(`${char} is a vowel`);
    
} else if (char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
    console.log(`${char} is a vowel`);

} else {
    console.log(`${char} is a consonant`)
}


// ------- code end ----
