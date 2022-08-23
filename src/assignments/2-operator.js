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

const num1 = Number(prompt("enter first number"));
const num2 = Number(prompt("enter second number"));

//add
const add = num1 + num2;
console.log(`the addition of ${num1} and ${num2} is ${add} `);

//subtract
const subtract = num1 - num2;
console.log(`the subtract of ${num1} and ${num2} is ${subtract} `);

//multicipation
const multicipation = num1 * num2;
console.log(`the multicipation of ${num1} and ${num2} is ${multicipation} `);

//division
const division = num1 * num2;
console.log(`the division of ${num1} and ${num2} is ${division} `);

//reminder
const reminder = num1 % num2;
console.log(`the reminder of ${num1} and ${num2} is ${reminder} `);

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2
const celcius = Number(prompt("enter celcius"));
const fahrenheit = celcius * 1.8 + 32;
console.log(` ${celcius} °C =  ${fahrenheit} °F `);
