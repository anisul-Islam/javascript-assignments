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




/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2
//START ADD NUMBER
// let dig = 20;
// let dig1 = 10;
// let resul = dig + dig1
// console.log(`${dig1} + ${dig1} = ${resul}`)
// console.log(resul)
 
// WITH TRADITIONAL FUNCTION START
function add(dig, dig1) {
    let result = dig + dig1
    console.log(`${dig} + ${dig1} = ${result}`)
}
add(20, 10)
// TRADITIONAL FUNCTION END HERE
// END ADD NUMBER

// --START OF MULT--
// let digit = 40;
// let digit1 = 40;
// let theResult = digit * digit1
// console.log(theResult)
   
// TRADITIONAL FUNCTION STATTE HERE
function mult(digit, digit1) {
    let theResult = digit * digit1
    console.log(`${digit} * ${digit1} = ${theResult}`)
}
mult(40, 40)
    // !--END OF MULT--



// !--START OF MINUS--
// let num11 = 50;
// let num22 = 30;
// let result11 = num11 - num22;
// console.log(result11)

function minus(num11, num22) {
    let result11 = num11 - num22
    console.log(`${num11} - ${num22} = ${result11}`)
}
minus(50, 20)
    // !----END OF MINUS--


// !--START OF DIVID-
// let data = 60;
// let data1 = 5;
// let results = num1 / num2
// console.log(result)

function divide(data, data1) {
    let results = data / data1
    console.log(`${data} / ${data1} = ${results}`)
}
divide(120,4)
// END OF DIVID---

// START OF remanider
// divide(60, 5)
// let num1 = 20;
// let num2 = 10;
// let result = num1 % num2
// console.log(result)

function remainder(num1, num2) {
    let result = num1 % num2
    console.log(`${num1} % ${num2} = ${result}`)

}
remainder(20, 3)
    //END OF REMAINDER DONE