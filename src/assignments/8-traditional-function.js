/*
Program 1: Create 2 functions for adding and subtracting numbers and return value.

*/
// start here writing the code for program1

function add(num1, num2) {
    result = num1 + num2;
    return result;
  }
  
  function sub(num1, num2) {
    result = num1 - num2;
    return result;
  }
  num1 = Number(prompt("enter 1st number"));
  num2 = Number(prompt("enter 2nd number"));
  
  c = add(num1, num2);
  console.log(c);
  
  d = sub(num1, num2);
  console.log(d);
  