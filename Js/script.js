// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  const isDiv5 = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5) == 0;
  console.log('These numbers are multiple of 5');

  const isGreat = console.log((n1 > n4));
  console.log('The first number is greater than last number');

//   Subtracting Numbers
  const isSub = n1 - n2;
  console.log('The subtracted number ' + isSub);
//   Multiplying Numbers
  const isMul = isSub * n3;
  console.log('The multiplied number ' + isMul);
//   Getting the Remainder
  const isRemain = isMul % n4;
  console.log('The remainder number ' + isRemain);

//   Testing that 25 is the Max number
const isMax25 = console.log( n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25);
console.log('25 is still Max number');


const totalDistant = 1500;
const totalBudget = 175;
const avgGas = 3;
const planAgas = totalDistant / 30;
const planBgas = totalDistant / 28;
const planCgas = totalDistant / 23;
const planAbudget = planAgas * avgGas;
const planBbudget = planBgas * avgGas;
const planCbudget = planCgas * avgGas;
const totalTime = totalDistant / 60;
const budgetAsavings = totalBudget - planAbudget;
const budgetBsavings = totalBudget - planBbudget;

console.log('How many gallons of fuel will you need for the entire trip? ' + 
'\nIf Plan A then the gallon is: ' + planAgas + 
'\nIf Plan B then the gallon is: ' + planBgas + 
'\nIf Plan C then the gallon is: ' + planCgas);

console.log('Will your budget be enough to cover the fuel expense? ' + 
'\nThe budget is: ' + totalBudget + 
'\nIf Plan A then the budget is: ' + planAbudget +
'\nIf Plan B then the budget is: ' + planBbudget +
'\nIf Plan C then the budget is: ' + planCbudget +
'\nBase on budget two out of three plans will be enough.');

console.log('How long will the trip take in hours? ' + 
'\nThe amount of time needed to make full trip will take ' + totalTime + ' hours.');

console.log('After comparing all 3 of the miles per hours traveled from 75, 60, and 55: ' + 
'\nThe 75mph way will not be a option because it out budget.' + 
'\nThe 60mph way will be a option because it is budget and give you a savings of: ' + budgetAsavings +
'\nThe 55mph way will be a option because it is budget and give you a savings of: ' + budgetBsavings);