function getLcmOf(num1, num2) {
  let product = num1 * num2;
  let hcf = getHcfOf(num1, num2);

  return product / hcf;
}

function getHcfOf(num1, num2) {
  let num1Factors = getFactors(num1);
  let num2Factors = getFactors(num2);

  let commonFactorsArr = [];
  for (let i = 0; i < num1; i++) {
    if (num2Factors.includes(num1Factors[i])) {
      commonFactorsArr.push(num1Factors[i]);
    }
  }
  return Math.max(...commonFactorsArr);
}

function getFactors(num) {
  let factorsArr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factorsArr.push(i);
    }
  }
  return factorsArr;
}
