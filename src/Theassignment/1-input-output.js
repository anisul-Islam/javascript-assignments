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

let firstName = prompt('Enter firstname');
let lastName = prompt('Enter lastNmae');

const fullname = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
console.log(fullname.length)
console.log(fullname.split(''))
console.log(fullname.indexOf(3))

// !-done-







console.log(fullname)