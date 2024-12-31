// Write a function to check if a number is prime.

function isPrime(num) {
  let halfOfNum = Math.floor(num / 2);

  for (let i = 2; i < halfOfNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
