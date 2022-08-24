/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1
const alp = prompt("enter a letter");
switch(alp) {
    case 'a' : console.log("vowel"); break;
    case 'e' : console.log("vowel"); break;
    case 'i' : console.log("vowel"); break;
    case 'o' : console.log("vowel"); break;
    case 'u' : console.log("vowel"); break;
    default : console.log("consonant");

}