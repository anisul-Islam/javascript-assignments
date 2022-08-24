/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1
let num;
for (num=1 ; num<=100; num++)
{
    if((num%3==0 != (num%5==0)) ||  (num%5==0 != num%3==0))
        console.log(num);
}

/*for (let num = 1; num<=100; num++)
{
    if(!(num%3==0 && num%5==0))
    {
        if(num%3==0 || num%5==0)
        { console.log(num); }
    }
}*/

/*
Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8

*/
// start here writing the code for program2
let value = Number(prompt("enter the value"));
  let sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(`sum= ${sum}`); 



/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3

const number= prompt("enter a number");
 for(let i =1 ; i<=10 ; i++)
{
    const output = i * number ;
    console.log(`${number} * ${i} = ${output}`);
}