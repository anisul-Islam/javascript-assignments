/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1
num1 = Number(prompt("enter first number "));
num2 = Number(prompt("enter second number "));

if (num1 > num2) {
  console.log("minimum is numer 1 with value " + num1);
} else {
  console.log("minimum is numer 2 with value " + num2);
}

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2

const text = prompt("enter any letter");
if (
  text === "a" ||
  text === "e" ||
  text === "i" ||
  text === "o" ||
  text === "u"
) {
  console.log(`letter ${text} is vowel`);
} else {
  console.log(`letter ${text} is consonant`);
}
