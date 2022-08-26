/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1

for (i = 1; i < 101; i++) {
    //sconsole.log(i);
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 5 !== 0 || i % 3 !== 0) {
        console.log(i);
      }
    }
  }
  
  /*
  Program 2: Write a program that read any positive number and display sum of its digit.
  
  
  
  Input example
  number = 125
  
  output example
  sum=8
  
  */
  // start here writing the code for program2
  
  num1 = Number(prompt("enter number 1"));
  num2 = Number(prompt("enter number 2"));
  
  if (num1 && num2 > 0) {
    console.log(num1 + num2);
  } else {
    console.log("not a positive number");
  }
  
  /*
  Program 3: Write a program to print time table of any number.
  
  Input example
  number = 3
  
  output example
  3 x 1 = 3
  3 x 2 = 6
  
  */
  // start here writing the code for program3
  const table = Number(prompt("enter a number for table"));
  
  for (i = 1; i < 11; i++) {
    multi = `${table} * ${i} = ${i * table}`;
    console.log(multi);
  }
  