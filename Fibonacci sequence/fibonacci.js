function getFibonacciNumbers(num) {
  let fibonacciArr = [0, 1];

  let num1 = 0;
  let num2 = 1;
  let nextNum = null;

  for (let i = 2; i < num; i++) {
    nextNum = num1 + num2;
    fibonacciArr.push(nextNum);
    num1 = num2;
    num2 = nextNum;
    nextNum = null;
  }

  return fibonacciArr;
}

console.log(getFibonacciNumbers(10));
