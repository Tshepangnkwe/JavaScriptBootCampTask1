// Exercise 1: Number Operations
let wholeNumber = 25;
let decimalNumber = 3.14;

console.log(
  `Addition: ${wholeNumber} + ${decimalNumber} = ${wholeNumber + decimalNumber}\n`,
  `Subtraction: ${wholeNumber} - ${decimalNumber} = ${wholeNumber - decimalNumber}\n`,
  `Multiplication: ${wholeNumber} * ${decimalNumber} = ${wholeNumber * decimalNumber}\n`,
  `Division: ${wholeNumber} / ${decimalNumber} = ${wholeNumber / decimalNumber}\n`,
  `Modulus (remainder): ${wholeNumber} & ${decimalNumber} = ${wholeNumber % decimalNumber}\n`,
  `Exponentiation (power): ${wholeNumber} ** ${decimalNumber} = ${wholeNumber ** decimalNumber}\n`,
);

// Exercise 2: Boolean and Operators
// Part 1: Comparison Operators
let x = 8;
let y = 12;

console.log(`x = ${x}, y = ${y}`);
console.log(`Is x greater than y? ${x > y}`);
console.log(`Is x less than or equal to y?${x <= y}`);
console.log(`Is x equal to y? ${x === y}`);
console.log(`Is x not equal to y? ${x != y}`);

// Part 2: Logical Operators
let a = true;
let b = false;

console.log(`a = ${a}, b = ${b}`);
console.log(`a AND b: ${a && b}`);
console.log(`a OR b: ${a || b}`);
console.log(`NOT a: ${!a}`);

// Part 3: Assignment Operators
let p = 10;
console.log(`Initial value of p = ${p}`);
console.log(`After p +=5: p = ${(p += 5)}`);
console.log(`After p -= 3: p = ${(p -= 3)}`);
console.log(`After p *= 2: p = ${(p *= 2)}`);
console.log(`After p /= 4: p = ${(p /= 4)}`);
console.log(`After p %= 3: p = ${(p %= 3)}`);
