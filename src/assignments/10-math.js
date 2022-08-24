/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1
/*const randomNo = prompt("enter a number from 1 to 30"); */
const randomNo=Math.floor(Math.random() * 30) + 1 ;
console.log(`Random no = ${randomNo}`);

if (randomNo >= 18){
console.log("valid voter");
}
else
console.log("Invalid voter");