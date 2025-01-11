// Write a function to find the longest word in a string.

function largestWord(str) {
  let arr = str.split(" ");
  // let longestWord = arr[0];
  // for (let word of arr) {
  //   if (word.length >= longestWord.length) {
  //     longestWord = word;
  //   }
  // }

  return arr.reduce(function (acc, currVal) {
    if (acc.length > currVal.length) {
      return acc;
    } else {
      return currVal;
    }
  });
}

console.log(largestWord("My name is ayan"));
