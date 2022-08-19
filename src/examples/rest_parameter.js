function printNumbers(num1, num2, ...z) {
  console.log(num1, num2, z);
}
function printNumbersAll(...z) {
  console.log(z);
}

printNumbers(10, 20);
printNumbersAll(10, 20, 30);
