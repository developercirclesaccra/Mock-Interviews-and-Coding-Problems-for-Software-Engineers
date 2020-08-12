/**
 *
Introduction: 
There is a technique for finding all prime numbers up to a specified value n. This is called Sieve of Eratosthenes In this program, is ancient (third century BCE) and was developed by a Greek named Eratosthenes. The multiples of  a given prime are generated as a sequence of numbers starting from that prime with constant difference between them that is equal to that difference. And all those multiples are not considered as the prime except the value itself. 
 

Question:
Create a function that  uses a queue to implement the Sieve of Eratosthenes algorithm.
 

 */
//using queues
function sieveAlgorithm(number) {
  let listOfNumbers = [];
  for (let i = 2; i <= number; i++) {
    listOfNumbers.push(i);
  }
  let primes = [];
  let notCurrentMultiples = [];
  while (listOfNumbers.length > 0) {
    let prime = listOfNumbers.shift();
    primes.push(prime);
    while (listOfNumbers.length > 0) {
      let currentNumber = listOfNumbers.shift();
      if (currentNumber % prime != 0) notCurrentMultiples.push(currentNumber);
    }
    let temp = listOfNumbers;
    listOfNumbers = notCurrentMultiples;
    notCurrentMultiples = temp;
  }
  return primes;
}

console.log(sieveAlgorithm(10)); // [2,3,5,7]
console.log(sieveAlgorithm(20)); //[2,3,5,7,11,13,17,19]
console.log(sieveAlgorithm(30)); // [2,3,5,7,11,13,17,19, 23,29]

//With Math Operation

function usingEratosthenes(n) {
  let grid = {};
  for (let i = 2; i <= n; i++) {
    grid[i] = false;
  }
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    for (let j = i + i; j <= n; j += i) {
      grid[j] = true;
    }
  }
  let output = [];
  for (let i = 2; i <= n; i++) {
    if (!grid[i]) output.push(i);
  }
  return output;
}
console.log(usingEratosthenes(1000000));
