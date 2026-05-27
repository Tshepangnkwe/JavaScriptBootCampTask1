// Exercise 1: Temperature Check
// Part 1: Using if/ else if / else
let temperature = 17;
console.log(`Temparature: ${temperature}`);

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

// Part 2: Using switch
switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  case temperature > 25:
    console.log("It's warm.");
    break;
  default:
    console.log("Error!!!");
}

// Exercise 2: Divisibility Check
// Part 1: Using if / else if / else
let number = 17;
console.log(`Number: ${number}`);

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}
// Part 2: Using switch
switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisble by 2 or 3.");
}
// Exercise 3: For Loops
// Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print even numbers 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Loop over an array
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of 1 to 100: ${sum}`);

// Loop over an array
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

// FInd the largest number
const dinomoro = [3, 7, 2, 5, 10, 6];
let largest = dinomoro[0];
for (let i = 0; i < dinomoro.length; i++) {
  if (dinomoro[i] > largest) {
    largest = dinomoro[i];
  }
}
console.log(`Largest number in [${dinomoro}]: is ${largest}`);

// Exercise 4: While Loops
// Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Print even numbers between 1 and 20
i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// Calculate sum from 1 to 100
let whileSum = 0;
i = 1;
while (i <= 100) {
  whileSum += i;
  i++;
}
console.log(`The sum of numbers from 1 to 100: ${whileSum}`);

// Print all multiples of 5 less than 50
i = 5;
while (i < 50) {
  console.log(i);
  i += 5;
}

// Exercise 5: Do While Loops
// Print numbers from 1 to 10
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Calculate sum from 1 to 100
let doWhileSum = 0;
i = 1;
do {
  doWhileSum += i;
  i++;
} while (i <= 100);
console.log(`Sum of numbers from 1 to 100: ${doWhileSum}`);

// Prompt user to enter a number greater than 10
const readlineSync = require("readline-sync");

// Prompt user to enter a number greater than 10
let input;

do {
  input = Number(readlineSync.question("Enter a number greater than 10: "));

  if (isNaN(input) || input <= 10) {
    console.log("Invalid input. Please enter a number greater than 10.");
  }
} while (isNaN(input) || input <= 10);

console.log(`Valid input received: ${input}`);

// Guessing game
const secret = Math.floor(Math.random() * 10) + 1;
let guess;
 
console.log("Guess the number between 1 and 10!");
 
do {
  guess = Number(readlineSync.question("Your guess: "));
 
  if (isNaN(guess)) {
    console.log("Invalid input. Please enter a number.");
  } else if (guess > secret) {
    console.log("Too high! Try again.");
  } else if (guess < secret) {
    console.log("Too low! Try again.");
  }
} while (isNaN(guess) || guess !== secret);
 
console.log(`Correct! The number was ${secret}. You won!`);
