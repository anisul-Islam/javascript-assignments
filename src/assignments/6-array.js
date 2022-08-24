/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
const array =[2,2,3,4];
console.log(array);
let sum=0;

/*array.forEach(function(num) { sum += num} )*/

for (const num of array)  
    {  sum += num;  }
 const avg=sum/ array.length;
console.log(`sum= ${sum}`);
console.log(`avg= ${avg}`);
/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2

const arr =[5,2,6,9];
console.log(arr);
const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(`Max = ${max}`);
console.log(`Min = ${min}`);