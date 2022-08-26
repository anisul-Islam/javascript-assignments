/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1
for (let numCheck = 1; numCheck <= 100 ; numCheck++) {
    
    if (numCheck % 3 == 0 && numCheck % 5 != 0 ) {

        console.log(`${numCheck} Divisible by 3 and not 5`);
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
let number = 125, reMain, sum = 0;

while(number) {
    reMain = number % 10;
    sum = sum + reMain;
    number = Math.floor(number / 10);
}
console.log(`Sum = ${sum}`)


/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3

let table = prompt("Enter number");

for (let x = 1; x <= 10; x++) {
    
    let result = x * table;

    console.log(`${table} * ${x} = ${result}`);
}

