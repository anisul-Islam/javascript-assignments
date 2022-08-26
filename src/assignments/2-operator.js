/*
Program1: Write a program that add, subtract, multiply, divide and find the remanider of 2 numbers.

Input example
num1=20
num2=10

output example
20+10=30
20-10=10
20*10=200
20/10=2
20%10=0
*/
// start here writing the code for program1
let num1 = 20;
let num2 = 10;

let addNum = num1 + num2; // adding num1 and num2
console.log(`Addition result = ${addNum}`); 

let subNum = num1 - num2; // suntracting
console.log(`Subtract result = ${subNum}`); 

let multNum = num1 * num2; // multipilication
console.log(`Multiplication result = ${multNum}`); 

let diviNum = num1 / num2; // division
console.log(`Division result = ${diviNum}`)

let remNum = num1 % num2; // remainder
console.log(`Remainder result = ${remNum}`)

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

let celsius = prompt("Enter temparature celsius");

fahrenheit = (celsius * 9) / 5 + 32;

console.log(`Today's temperature is ${fahrenheit} °F`);


// Coding end
