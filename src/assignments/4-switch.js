/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1

const letter = prompt("enter any letter");
switch (letter) {
  case "a":
    console.log(`letter ${letter} is vowel`);
    break;
  case "e":
    console.log(`letter ${letter} is vowel`);
    break;
  case "i":
    console.log(`letter ${letter} is vowel`);
    break;
  case "o":
    console.log(`letter ${letter} is vowel`);
    break;
  case "u":
    console.log(`letter ${letter} is vowel`);
    break;

  default:
    console.log(`letter ${letter} is consonant`);

    break;
}
