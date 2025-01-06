// Implement a function that converts a string to title case.

function getTitleCase(str) {
  let arr = str.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

console.log(getTitleCase("my "));
