/*
Guessing game
Input -> Guess a number between 1 to 5
Generate -> a random number between 1 to 5
check condition -> if guess number and generate number is matched then won or lost
loop - allow the game to be played 5 times
count - number of won and losts
*/

let numberOfWon = 0;
let numberOfLost = 0;

for (let index = 0; index < 5; index += 1) {
  const guessNumber = Number(prompt('Enter your guess between 1 to 5: '));

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  if (randomNumber === guessNumber) {
    console.log('You have won');
    numberOfWon += 1;
  } else {
    console.log(`You have lost. Random number is: ${randomNumber}`);
    numberOfLost += 1;
  }
}

console.log(`Number of won = ${numberOfWon}`);
console.log(`Number of won = ${numberOfLost}`);
