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


let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");
let fullName = firstName + " " +lastName;
let nameLength = fullName.length;

console.log(`Hello Mr/Ms ${fullName.toUpperCase()}`);
console.log(`Your Full Name is ${firstName} ${lastName}`);
console.log(`Your name's length is ${nameLength} characters and 3rs character is ${fullName.charAt(2)}`);
console.log(`3rd character in your name is --> ${fullName.charAt(2)}`);

// -------------Code End ----------