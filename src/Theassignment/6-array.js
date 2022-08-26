/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5
// */
// start here writing the code for program1
const arr = [1, 4, 2, 3]
let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)


const number = [1, 4, 2, 3]
const getAvg = (Array) => {
    let sum = 0;
    for (let number of Array) {
        sum += number
    }
    return Math.floor(sum / Array.length);
}
console.log(getAvg(number))

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2
let numbers = Math.max(1, 4, 2, 3)
console.log(numbers)

let numbers2 = Math.min(1, 4, 2, 3)
console.log(numbers2)