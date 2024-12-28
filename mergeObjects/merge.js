// Write a function to check if a number is prime.

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

function mergeObjects(obj1, obj2) {
  obj1 = Object.assign(obj1, obj2);
  return obj1;
}
