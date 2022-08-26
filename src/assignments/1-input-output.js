/*
Program 1: Input-Output program (String Methods)
input -> user first name (you can use prompt)
input -> user last name (you can use prompt)
print full name without using any string methods
find out total length of user's full name
convert full name into uppercase
print the 3rd character from users full name
*/
// start here writing the code for program1

const firstName = prompt("enter your name");
const lastName = prompt("enter your last name");

console.log(`your first name is ${firstName} and last name is ${lastName} `);

//length of full name
const fullName = firstName + lastName;
const len = fullName.length;
console.log(len);

//uppercase

const firstUpper = firstName.toUpperCase();
const lastUpper = lastName.toUpperCase();

console.log(firstUpper + " " + lastUpper);

//3rd character

thirdChar = fullName.slice(2, 3);
console.log(thirdChar);
