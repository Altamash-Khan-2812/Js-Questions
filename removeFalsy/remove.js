// Write a function to remove all falsy values from an array.

function removeFalsyvalues(arr) {
  let truthyValuesArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isFalsyValue(arr[i])) {
      truthyValuesArr.push(arr[i]);
    }
  }
  return truthyValuesArr;
}

function isFalsyValue(element) {
  if (
    element === null ||
    element === undefined ||
    element === "" ||
    element === 0 ||
    element === false ||
    Number.isNaN(element)
  ) {
    return true;
  }
  return false;
}
