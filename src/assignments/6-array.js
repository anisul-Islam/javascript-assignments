/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
const numLists = [1,4,2,3];

let sum1 = 0;

for (const numList of numLists ) {
    sum1 += numList;
    console.log(`-->  ${sum1}`) // display sum of an array.
}

average = sum1 / numLists.length;  // Average

console.log(`Average of arrya's sum is ${average}`) 

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2

// Variabe array 'numList' is declared at begining.
console.log(`Maximum number in an array --> ${Math.max(...numLists)}`) 
console.log(`Minimum number in an array --> ${Math.min(...numLists)}`)