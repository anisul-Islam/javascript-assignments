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
const num1=40;
const num2=20;
let result;
result= num1 + num2 ;
console.log(` ${num1} + ${num2} =${result}`);

result= num1 - num2 ;
console.log(` ${num1} - ${num2} =${result}`);

result= num1 * num2 ;
console.log(` ${num1} * ${num2} =${result}`);

result= num1 / num2 ;
console.log(` ${num1} / ${num2} =${result}`);

result= num1 % num2 ;
console.log(` ${num1} %  ${num2} =${result}`);





/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

const celsius = prompt("Enter a celsius value: ");
const Fahrenheit= celsius * 1.8 +32 ;
console.log(`Fahrenheit = ${Fahrenheit}`);


