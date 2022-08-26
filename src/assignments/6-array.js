/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
const num = [1, 4, 2, 3];
let sum = 0;

for (i = 0; i < num.length; i++) {
  sum += num[i];
  avg = sum / num.length;
}
console.log("the sum is: " + sum);
console.log("the sum is: " + avg);

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2
const value = [1, 4, 2, 3];

current = 0;
value.forEach((element) => {
  if (element > current) {
    current = element;
  }
});
console.log("max is : " + current);
mm = Math.min(value);
console.log(mm);


//min

var minValue = Math.min.apply(null, value);
console.log(minValue);


