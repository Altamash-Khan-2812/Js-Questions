// Move all zeroes to the end of an array
function moveAllZeroes(arr) {
  let arrCopy = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (arrCopy[i] === 0) {
      arrCopy.splice(arrCopy.indexOf(arrCopy[i]), 1);
      arrCopy.push(0);
    }
  }
  return arrCopy;
}

console.log(moveAllZeroes([2, 0, 4, 0, 5]));
